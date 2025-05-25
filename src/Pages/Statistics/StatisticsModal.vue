<template>
  <transition name="slide-modal">
    <div class="modal" @click.self="$emit('close')">
      <div class="modal-content relative">
        <div class="modal-top">
          <h2>Statistika qo‘shish</h2>

        </div>
        <form @submit.prevent="submitForm" class="form" >
          <div class="input-row">
            <input v-model="form.title" type="text" placeholder="Title" class="input" required />
            <input v-model="form.integer" type="integer" placeholder="integer" class="input" required />
          </div>

          <textarea v-model="form.subtitle" placeholder="subtitle" class="textarea" required></textarea>

          <button type="submit" class="submit-button">Yuborish</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "@/Utils/axios";

export default {
  props:{
    editOneProfile:{}
  },
  components: {
  },
  data() {
    return {
      form: {
        title: "",
        integer: "",
        subtitle: "",
      },
      id:null
    };
  },
  methods: {
    closeModal() {
      this.$emit("close", false);
    },
    async submitForm() {
      
      try {
        if(this.id){
          let response = await axios.patch("/statistics/"+this.id, this.form);
        if (response.status == 201 || response.status == 200) {
          this.$emit("status", { status: "success", message: "Statistics successfully created" });
        }
        else {
          this.$emit("status", { status: "error", message: "Error adding statistics" });
        }
        }else{
          let response = await axios.post("/statistics", this.form);
        if (response.status == 201 || response.status == 200) {
          this.$emit("status", { status: "success", message: "Statistics successfully created" });
        }
        else {
          this.$emit("status", { status: "error", message: "Error adding statistics" });
        }
        }
      } catch (error) {
        console.error("Xatolik:", error);
        this.$emit("close", { status: "error", message: "Error adding statistics" });

      }
      this.id=null
      this.form={
        title: "",
        integer: "",
        subtitle: "",
      }
    },
    
  },
  mounted(){
    this.id=this.editOneProfile.id
    this.form={
      title:this.editOneProfile.title,
      integer:this.editOneProfile.integer,
      subtitle:this.editOneProfile.subtitle
    }
  }
};
</script>

<style scoped>
.input-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.form{
  height: 60vh;
}

.input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.textarea {
  width: 100%;
  height: 130px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  resize: none;
  margin-bottom: 1rem;
}

.submit-button {
  width: 100%;
  padding: 0.6rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: #1e40af;
}
</style>