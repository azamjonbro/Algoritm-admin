<template>
  <transition name="slide-modal">
    <div class="modal" @click.self="$emit('close')">
      <div class="modal-content relative">
        <Icons name="xIcon" class="xIcon" @click="closeModal" />
        <h2>Sertifikat ma'lumotlarini qo‘shish</h2>

        <form @submit.prevent="submitForm" class="form" style="margin-top: 1rem;">
          <div class="input-row">
            <input v-model="form.first_Name" type="text" placeholder="Ism" class="input" required />
            <input v-model="form.last_Name" type="text" placeholder="Familiya" class="input" required />
          </div>

          <div class="input-row">
            <CustomSelect
              style="width: 49.5%;"
              :search="true"
              :selected="form.stack"
              @input="ItemSelect($event)"
              :options="option"
              :value="form.stack"
            />
            <div class="input border1 d-flex a-center radius1 relative">
              <DatePicker :modelValue="form.accepted_Date" @dateSelected="selectDate($event)" />
            </div>
          </div>

          <div class="input-row">
            <input v-model="form.teacherName" type="text" placeholder="Teacher ismi" class="input" required style="margin-bottom: 1rem;" />
            <input v-model="form.sertificate_Id" readonly type="text" placeholder="Sertifikat ID " class="input" style="margin-bottom: 1rem;" />
          </div>

          <div class="input-row">
            <label>
              <input type="checkbox" v-model="form.is_active" />
              Faol holatda
            </label>
          </div>

          <button type="submit" class="submit-button">{{ edit ? "Yangilash" : "Yuborish" }}</button>
          <input
            type="text"
            placeholder="Agar boshqa yo'nalish bo‘lsa foydalaning"
            class="border1 w-50 radius1"
            style="margin-top: 40px; font-size: 20px;"
            v-model="form.stack"
          />
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import DatePicker from '@/components/DatePicker.vue';
import Icons from "@/components/Icons.vue";
import axios from "@/Utils/axios";
import { generateNumericId } from './idgenerator';
import CustomSelect from '@/components/CustomSelect.vue';

export default {
  props: {
    edit: {
      type: Object,
      default: null
    }
  },
  components: {
    Icons,
    DatePicker,
    CustomSelect
  },
  data() {
    return {
      form: {
        first_Name: "",
        last_Name: "",
        stack: "",
        accepted_Date: "" || new Date(),
        sertificate_Id: "",
        teacherName: "",
        is_active: true,
      },
      option: [
        { text: "Front End", value: "Front End" },
        { text: "Back end", value: "Back End" },
        { text: "Full Stack", value: "Full Stack" },
        { text: "Kiberxavfsizlik", value: "Kiberxavfsizlik" },
        { text: "SMM", value: "SMM" },
        { text: "IT Kids", value: "IT Kids" },
        { text: "Grafik dizayn", value: "Grafik dizayn" },
        { text: "Kompyuter Savodxonlik", value: "Kompyuter Savodxonlik" },

      ]
    };
  },
  watch: {
    edit: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.form = { ...newVal };
        } else {
          this.resetForm();
        }
      }
    }
  },
  methods: {
    ItemSelect(item) {
      this.form.stack = item;
    },
    generateId() {
      this.form.sertificate_Id = generateNumericId();
    },
    selectDate(item) {
      this.form.accepted_Date = item;
    },
    closeModal() {
      this.resetForm();
      this.$emit("close", false);
    },
    resetForm() {
      this.form = {
        first_Name: "",
        last_Name: "",
        stack: "",
        accepted_Date: "",
        sertificate_Id: "",
        teacherName: "",
        is_active: true,
      };
      this.generateId();
      this.$emit("reset-edit"); // parentda this.edit=null qilish uchun
    },
    async submitForm() {
      try {
        let response;
        if (this.edit && this.edit.id) {
          
          response = await axios.patch(`/api/sertificates/${this.edit.id}`, this.form);
        } else {
          response = await axios.post("/api/sertificates", this.form);
        }

        if (response.status === 201 || response.status === 200) {
          this.$emit("status", {
            message: this.edit ? "Sertifikat yangilandi" : "Sertifikat yaratildi"
          });
        } else {
          this.$emit("status", { message: "Xatolik yuz berdi" });
        }

        this.closeModal();
      } catch (error) {
        this.$emit("status", { message: "Server bilan bog'lanishda xatolik" });
        this.closeModal();
      }
    },
  },
  mounted() {
    if (!this.edit) {
      this.generateId();
    }
  }
};
</script>
