<template>
    <div v-if="!loading" class="custom-select" ref="customSelect">
      <div
        class="select-selected d-flex j-between a-center"
        @click="toggleDropdown"
      >
        {{ selectedOption ? selectedOption.text : placeholder }}
        <Icons :name="isOpen ? 'topArrow' : 'bottomArrow'" />
      </div>
      <div v-if="isOpen" class="select-items scroll">
        <input
          v-if="search"
          type="text"
          v-model="searchText"
          placeholder="Поиск"
          class="search-input"
        />
        <div
          v-for="(option, index) in filteredOptions"
          :key="index"
          :class="[
            'option',
            { active: selectedOption && selectedOption.value === option.value },
          ]"
          @click="selectOption(option)"
        >
          {{ option.text }}
        </div>
      </div>
    </div>
  </template>
    
    <script>
  import Icons from "./Icons.vue";
  
  export default {
    name: "CustomSelect",
    components: {
      Icons,
    },
    props: {
      options: {
        type: Array,
        required: true,
        validator(value) {
          return value.every(
            (option) =>
              typeof option.text === "string" && option.value !== undefined
          );
        },
      },
      placeholder: {
        type: String,
        default: "Tanlang...",
      },
      search: {
        type: Boolean,
        default: false,
      },
      selected: String,
    },
    data() {
      return {
        isOpen: false,
        selectedOption: null,
        loading: false,
        searchText: "",
      };
    },
    computed: {
      filteredOptions() {
        return this.options?.filter((option) =>
          option?.text?.toLowerCase()?.includes(this.searchText?.toLowerCase())
        );
      },
    },
    watch: {
       selected(newVal) {
        if (newVal !== null && newVal !== undefined && !!newVal) {
          this.loading = true;
          const initialOption =  this.filteredOptions?.find((option) => {
            return option?.value == newVal;
          });
          if (initialOption) {
            this.selectedOption = initialOption;
          }
          this.loading = false;
        }
      },
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
        this.searchText = "";
      },
      selectOption(option) {
        this.selectedOption = option;
        this.isOpen = false;
        this.searchText = "";
        this.$emit("input", option.value);
      },
      closeDropdown(event) {
        const selectContainer = this.$refs.customSelect;
  
        if (selectContainer && !selectContainer.contains(event.target)) {
          this.isOpen = false;
          this.searchText = "";
        }
      },
    },
     mounted() {
      document.addEventListener("click", this.closeDropdown);
      if (
        this.selected !== null &&
        this.selected !== undefined &&
        !!this.selected
      ) {
        this.loading = true;
        const initialOption = this.filteredOptions?.find(
          (option) => {
            return option?.value == this.selected
          }
        );
        if (initialOption) {
          this.selectedOption = initialOption;
        }
        this.loading = false;
      }
    },
    beforeMount() {
      document.removeEventListener("click", this.closeDropdown);
    },
  };
  </script>
    
    
    <style>
  .custom-select {
    position: relative;
    min-width: 200px;
    font-family: Arial, sans-serif;
    user-select: none;
  }
  
  .select-selected {
    background-color: #fff;
    padding: 10px;
    cursor: pointer;
    border: 1px solid #d2d9df;
    border-radius: 8px;
    font-size: 14px;
  }
  
  .select-items {
    position: absolute;
    background-color: #fff;
    border: 1px solid #ddd;
    width: 100%;
    z-index: 99;
    border-radius: 8px;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    box-shadow: 1px 0px 14px lightgray;
    max-height: 300px;
    min-height: 200px;
  }
  
  .search-input {
    width: 100%;
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ddd;
  }
  
  .option {
    padding: 10px;
    cursor: pointer;
  }
  
  .option:hover {
    background-color: #8eb5ff;
    color: #fff;
    border-radius: 8px;
  }
  
  .option.active {
    background-color: #2f76fa;
    color: #fff;
    width: 100%;
    text-align: start;
    border-radius: 8px;
  }
  </style>
    