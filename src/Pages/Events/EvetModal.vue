<template>
  <transition name="slide-modal">
    <div class="modal">
      <div class="modal-content relative">
         <Icons name="xIcon" class="xIcon" @click="closeModal" />
        <h2>Sertifikat ma'lumotlarini qo‘shish</h2>
        <form class="form" style="margin-top: 1rem;">
          <div class="input-row">
           
          </div>

          <div class="input-row">
           
          </div>

          <div class="input-row">
          
          </div>

          <div class="input-row">
         
          </div>

          <button type="submit" class="submit-button">Yangilash</button>
        </form>
      </div>
    </div>
  </transition>
</template>
<script>
import Icons from '@/components/Icons.vue';

export default {
  components:{
    Icons
  },
  methods:{
    closeModal(){

    }
  }
};
</script>
<style lang=""></style>
