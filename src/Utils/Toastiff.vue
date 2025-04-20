<template>
    <div v-if="toastOptions.open"></div>
  </template>
  

<script>
  import Toastify from "toastify-js";
  import "toastify-js/src/toastify.css";  
  export default {
    name: "ToastComponent",
    components: {
    },
    props: {
      toastOptions: {
        type: Object,
        required: true,
        default: () => ({
          open: false,
          text: "Default Toast Message",
          type: "success",
          style: {
            background: "#4CAF50",
            width: "400px",
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            padding: "12px",
          },
        }),
      },
    },
    watch: {
      toastOptions: {
        handler(newVal) {
          if (newVal.open) {
            this.showToast(newVal);
          }
        },
        deep: true,
      },
    },
    methods: {
      getIcon(name) {
        const icons = {
          success: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          error: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 9V14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9999 21.41H5.93993C2.46993 21.41 1.01993 18.93 2.69993 15.9L5.81993 10.28L8.75993 5.00003C10.5399 1.79003 13.4599 1.79003 15.2399 5.00003L18.1799 10.29L21.2999 15.91C22.9799 18.94 21.5199 21.42 18.0599 21.42H11.9999V21.41Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9946 17H12.0036" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          warning: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 22H22L12 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16H12.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 10V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        };
        return icons[name] || "";
      },
  
      showToast({ text, type, style }) {
        // Type ga qarab background ranglarini sozlash
        const bgColors = {
          success: "#4CAF50",
          error: "#FF543F",
          warning: "#FFC107",
        };
  
        const iconHTML = this.getIcon(type);
  
        Toastify({
          text: `<span class="notifytable" style="display:flex; border-radius:10px; align-items:center; gap:20px">
                  ${iconHTML} <span>${text}</span>
                 </span>`,
          duration: 3000,
          close: false,
          gravity: "top",
          position: "center",
          escapeMarkup: false,
          style: {
            ...style,
            borderRadius:"10px",
            background: bgColors[type] || style?.background,
          },
        }).showToast();
      },
    },
  };
  </script>


  
  
  <style scoped></style>