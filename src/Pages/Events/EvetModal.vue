<template>
  <transition name="slide-modal">
    <div class="modal" @click.self="closeModal">
      <div class="modal-content relative">
        <!-- <Icons name="xIcon" class="xIcon" @click="closeModal" /> -->
        <h2>Event ma'lumotlarini qo‘shish</h2>

        <form class="form modal-forma" @submit.prevent="submitForm">
          <div class="form-group">
            <label>Video fayl</label>
            <input type="file" />
          </div>

          <div class="form-group">
            <label>Poster fayl</label>
            <input type="file" />
          </div>

          <div class="form-group">
            <label>Sarlavha</label>
            <input type="text" placeholder="Test video" />
          </div>

          <div class="form-group">
            <label>Yo‘nalish</label>
            <input type="text" placeholder="test" />
          </div>

          <div class="modal-buttons">
            <button type="button" class="action-button" @click="closeModal">Bekor qilish</button>
            <button type="submit" class="action-button">Yangilash</button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
  },
  emits: ['close'],
  methods: {
    closeModal() {
      this.$emit('close')
    },
    submitForm() {
      this.closeModal()
    }
  }
}
</script>

<style scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: end;
  z-index: 100;
}

.modal-content {
  width: 90%;
  height: 100%;
  background: #fff;
  border-radius: 30px 0 0 30px;
  padding: 70px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
}

.slide-modal-enter-active,
.slide-modal-leave-active {
  transition: transform 0.5s ease;
}

.slide-modal-enter-from,
.slide-modal-leave-to {
  transform: translateX(100%);
}

.slide-modal-enter-to,
.slide-modal-leave-from {
  transform: translateX(0);
}

.modal-forma {
  gap: 20px;
  margin-top: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.form-group label {
  font-size: 14px;
  color: #919ead;
}

.form-group input {
  padding: 12px;
  border: 1px solid #d2d9df;
  border-radius: 8px;
  font-size: 14px;
  color: #000;
}

.modal-buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  margin-top: 30px;
}

.modal-buttons .action-button {
  padding: 12px 77px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.modal-buttons .action-button:first-child {
  background-color: #ff4d4d;
  color: #fff;
}

.modal-buttons .action-button:last-child {
  background-color: #4d79ff;
  color: #fff;
}

.action-button:disabled {
  background-color: #d6d6d6;
  cursor: not-allowed;
  color: #000;
}
</style>
