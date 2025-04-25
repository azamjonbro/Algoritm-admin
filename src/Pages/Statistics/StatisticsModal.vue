<template>
    <transition name="slide-modal">
      <div class="modal" @click.self="$emit('close')">
        <div class="modal-content relative">
          <Icons name="xIcon" class="xIcon" @click="closeModal" />
          <h2>Do`kon yaratish</h2>
  
          <form>
            <div class="modal-form">
              <div class="form-group">
                <label for="title">Nomi</label>
                <input
                  id="title"
                  type="text"
                  placeholder="Do`kon nomi narxini raqamini kiriting"
                  @blur="validateField('title')"
                  v-model="shop.title"
                />
                <p v-if="errors.title" class="error-text">{{ errors.title }}</p>
              </div>
  
              <div class="form-group">
                <label for="description">Tavsif</label>
                <input
                  id="description"
                  type="text"
                  placeholder="Do`kon nonni description raqamini kiriting"
                  @blur="validateField('description')"
                  v-model="shop.description"
                />
                <p v-if="errors.description" class="error-text">
                  {{ errors.description }}
                </p>
              </div>
  
              <div class="form-group">
                <label for="sellerBreadId">Non turi</label>
                <CustomSelect
                  :search="true"
                  :options="breads"
                  @blur="validateField('sellerBreadId')"
                  @input="selectBreadId($event)"
                  :placeholder="'Non turini kiriting'"
                  :selected="shop.sellerBreadId"
                />
                <p v-if="errors.sellerBreadId" class="error-text">
                  {{ errors.sellerBreadId }}
                </p>
              </div>
              <div class="form-group">
                <label for="price">Narxi</label>
                <input
                  id="price"
                  type="number"
                  placeholder="Do`kon nonni narxini raqamini kiriting"
                  @blur="validateField('price')"
                  v-model="shop.price"
                />
                <p v-if="errors.price" class="error-text">{{ errors.price }}</p>
              </div>
              <div class="form-group">
                <label for="quantity">Soni (Dona)</label>
                <input
                  id="quantity"
                  type="number"
                  placeholder="Do`kon nonni Soni (Dona) kiriting"
                  @blur="validateField('quantity')"
                  v-model="shop.quantity"
                />
                <p v-if="errors.quantity" class="error-text">
                  {{ errors.quantity }}
                </p>
              </div>
            </div>
          </form>
  
          <div class="modal-buttons d-flex j-end a-center gap24">
            <button type="button" class="action-button" @click="closeModal">
              Chiqish
            </button>
            <button
              type="submit"
              @click="submitForm"
              class="action-button"
              :disabled="isSubmitting"
            >
              {{
                !isUpdate
                  ? isSubmitting
                    ? "Yaratilmoqda..."
                    : "Yaratish"
                  : isSubmitting
                  ? "Yangilanmoqda..."
                  : "Yangilash"
              }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  import Icons from "@/components/Icons.vue";
  import CustomSelect from "@/components/customSelect.vue";
  
  export default {
    components: {
      Icons,
      CustomSelect,
    },
    data() {
      return {
        
      };
    },
    props: {
      update: {
        type: Object,
      },
    },
    methods: {
      
    },
  };
  </script>
  
  <style></style>