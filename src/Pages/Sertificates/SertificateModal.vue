<template>
    <transition name="slide-modal">
      <div class="modal" @click.self="$emit('close')">
        <div class="modal-content relative">
          <Icons name="xIcon" class="xIcon" @click="closeModal" />
          <h2>Statistika qo‘shish</h2>
  
          <form @submit.prevent="submitForm" class="form" style="margin-top: 1rem;">
            <div class="input-row">
              <input
                v-model="form.title"
                type="text"
                placeholder="Title"
                class="input"
                required
              />
              <input
                v-model="form.integer"
                type="integer"
                placeholder="integer"
                class="input"
                required
              />
            </div>
  
            <textarea
              v-model="form.subtitle"
              placeholder="subtitle"
              class="textarea"
              required
            ></textarea>
  
            <button type="submit" class="submit-button">Yuborish</button>
          </form>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  import Icons from "@/components/Icons.vue";
  import axios from "@/Utils/axios";
  
  export default {
    components: {
      Icons,
    },
    data() {
      return {
        form: {
          title: "",
          integer: "",
          subtitle: "",
        },
      };
    },
    methods: {
      closeModal() {
        this.$emit("close", false);
      },
      async submitForm() {
        try {
          let response = await axios.post("/statistics", this.form);
          console.log(response)
          this.$emit("close", true);
        } catch (error) {
          console.error("Xatolik:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .input-row {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
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
  