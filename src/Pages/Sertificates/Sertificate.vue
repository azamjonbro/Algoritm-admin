<template>
  <div class="page">
    <div class="page__top d-flex a-item j-between">
      <h2 class="page__title">Sertificates</h2>

      <div class="d-flex gap12 a-center">
        <input
          type="text"
          v-model="searchParameter"
          placeholder="Search id | name"
          class="worker-search border1 home-search"
        />
        <button class="create-button" @click="openModalFunc">
          Create Sertificate
        </button>
      </div>
    </div>
    <div class="page-bottom">
      <div class="table scroll">
        <div class="table-header">
          <div class="row">
            <div class="cell">ID</div>
            <div class="cell">Name</div>
            <div class="cell">Teacher</div>
            <div class="cell">Role</div>
            <div class="cell">Date</div>
            <div class="cell d-flex j-end"></div>
          </div>
        </div>
        <div class="table-body">
          <div class="row" v-for="(data,index) in filteredStatistics" :key="index">
            <div class="cell">{{ data?.sertificate_Id || data.id }}</div>
            <div class="cell" :title="data.title">
              {{
                data?.first_Name + data.last_Name ||
                data.name + " " + data.surname
              }}
            </div>
            <!-- {{ data }} -->
            <div class="cell">{{ data?.teachername||'----' }}</div>
            <div class="cell" :title="data.subtitle">
              {{ data?.stack || data?.courseName }}
            </div>
            <div class="cell">{{ data?.accepted_Date || data.givenDate }}</div>
            <div class="cell d-flex gap12 j-end" >
              <Icons name="edit" class="icon info"  v-show="data.is_active"/>
              <Icons
                name="deleted"
                class="icon danger"
                @click="deleteUser(data?.id)"
                v-show="data.is_active"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SertificateModal
    v-if="openModal"
    @close="openModal = event"
    @status="CreatedSertificate($event)"
  />
</template>
<script>
import axios from "@/Utils/axios";
import Icons from "@/components/Icons.vue";
import SertificateModal from "./SertificateModal.vue";
import EskiData from "../../assets/data.json";
export default {
  name: "SertificatePage",
  components: {
    Icons,
    SertificateModal,
  },
  data() {
    return {
      statistics: [],
      searchParameter: null,
      openModal: false,
    };
  },
  computed: {
    filteredStatistics() {
      if (!this.searchParameter || !this.searchParameter.trim()) {
        return this.statistics
          .filter((item) => this.hasEnoughValidFields(item))
          .slice()
          .reverse();
      }

      const search = this.searchParameter.trim().toLowerCase();

      return this.statistics
        .filter((item) => {
          const id = (item.sertificate_Id || item.id || "")
            .toString()
            .toLowerCase();
          const name =
            item.first_Name && item.last_Name
              ? (item.first_Name + " " + item.last_Name).toLowerCase()
              : ((item.name || "") + " " + (item.surname || "")).toLowerCase();
          return (
            (id.includes(search) || name.includes(search)) &&
            this.hasEnoughValidFields(item) 
          );
        })
        .reverse();
    },
  },

  methods: {
    hasEnoughValidFields(item) {
      const fieldsToCheck = [
        item.first_Name || item.name,
        item.last_Name || item.surname,
        item.stack || item.courseName,
        item.givenDate || item.accepted_Date,
      ];

      return fieldsToCheck.every((val) => {
        return typeof val === "string" && val.trim().length >= 2;
      });
    },
    async getAllStatistics() {
      let response = await axios.get("/sertificate");
      console.log("data keldi",response.data);

      this.statistics = [...response?.data, ...EskiData].reverse();
    },
    openModalFunc() {
      this.openModal = !this.openModal;
      console.log(this.openModal);
    },
    CreatedSertificate(item) {
      console.log(item);
      this.getAllStatistics();
      this.openModal = false;
    },
    async deleteUser(id) {
      let response = await axios.delete("/sertificate/" + id);
      console.log(response);
      if (response.status == 200) {
        this.getAllStatistics();
      }
    },
  },
  mounted() {
    this.getAllStatistics();
  },
};
</script>
<style>
.home-search {
  /* border: 1px solid #919191; */
  background: #f1f1f1;
  padding-left: 20px;
}
</style>
