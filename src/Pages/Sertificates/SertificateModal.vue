<template>
  <transition name="slide-modal">
    <div class="modal" @click.self="$emit('close')">
      <div class="modal-content relative">
        <Icons name="xIcon" class="xIcon" @click="closeModal" />
        <h2>Sertifikat ma'lumotlarini qo‘shish</h2>

        <form @submit.prevent="submitForm" class="form" style="margin-top: 1rem;">
          <div class="input-row">
            <input
              v-model="form.first_Name"
              type="text"
              placeholder="Ism"
              class="input"
              required
            />
            <input
              v-model="form.last_Name"
              type="text"
              placeholder="Familiya"
              class="input"
              required
            />
          </div>

          <div class="input-row">
            <input
              v-model="form.stack"
              type="text"
              placeholder="Yonalishi"
              class="input"
              required
              
            />
            <!-- <input
              v-model="form.accepted_Date"
              type="date"
              placeholder="Qabul qilingan vaqt"
              class="input"
              required
            /> -->
            <div class="input border1 d-flex a-center radius1 relative">
              <DatePicker @dateSelected="selectDate($event)"/>
            </div>

          </div>

          <div class="input-row">
          <input
            v-model="form.teachername"
            type="text"
            placeholder="Teacher ismi"
            class="input"
            required
            style="margin-bottom: 1rem;"
          />
          <input
            v-model="form.sertificate_Id"
            type="text"
            placeholder="Sertifikat ID "
            class="input"
            required
            style="margin-bottom: 1rem;"
          />
          </div>

          <div class="input-row">
            <label>
              <input
                type="checkbox"
                v-model="form.is_active"
              />
              Faol holatda
            </label>
          </div>

          <button type="submit" class="submit-button">Yuborish</button>
        </form>
      </div>
    </div>
  </transition>
</template>
<script>
import DatePicker from '@/components/DatePicker.vue';
import Icons from "@/components/Icons.vue";
import axios from "@/Utils/axios";

export default {
  components: {
    Icons,
    DatePicker
  },
  data() {
    return {
      form: {
        first_Name: "",
        last_Name: "",
        stack: "",
        accepted_Date: "",
        sertificate_Id: "",
        is_active: true,
      },
    };
  },
  methods: {
    selectDate(item){
      this.form.accepted_Date=item
    },
    closeModal() {
      this.$emit("close", false);
    },
    async submitForm() {
      try {
        let response = await axios.post("/sertificate", this.form);
        if(response.status==201){
          this.$emit("status", {message:"Sertificate successfully created"});
        }
        else{
          this.$emit("status", {message:"Error inserting certificate"});
        }
        this.closeModal()

      } catch (error) {
        this.$emit("status", {message:"Error inserting certificate"});
      }
      this.closeModal()
    },
  },
};
</script>
