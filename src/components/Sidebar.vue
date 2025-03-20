<template>
    <div class="navbar">
      <div class="overlay" v-if="isOpen" @click="closeSidebar"></div>
      <div
        class="menu-container navbar-box d-flex column j-between"
        :class="{ open: isOpen }"
      >
        <div class="navbar-logo relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="220"
            height="19"
            viewBox="0 0 191 19"
            fill="none"
          >
            <path
              d="M16.85 15.97C18.19 15.97 18.86 15.21 18.86 13.69C18.86 12.17 18.19 11.41 16.85 11.41H16.58V8.41C18.34 8.41 19.67 8.76 20.57 9.46C21.47 10.16 21.92 11.26 21.92 12.76V14.53C21.92 16.03 21.5 17.15 20.66 17.89C19.82 18.63 18.49 19 16.67 19H0.71V15.97H16.85ZM5.78 3.85C4.44 3.85 3.77 4.61 3.77 6.13C3.77 7.65 4.44 8.41 5.78 8.41H6.05V11.41C2.49 11.41 0.71 9.96 0.71 7.06V5.29C0.71 2.31 2.47 0.82 5.99 0.82H21.92V3.85H5.78ZM47.4287 19H43.8587L36.2387 4.45L28.5887 19H25.0787L32.9087 3.88C33.5287 2.68 34.1187 1.88 34.6787 1.48C35.2387 1.08 35.6987 0.879999 36.0587 0.879999H36.5087C36.6887 0.879999 36.8887 0.919999 37.1087 0.999999C37.3287 1.08 37.5687 1.24 37.8287 1.48C38.0887 1.7 38.3687 2.01 38.6687 2.41C38.9687 2.79 39.2787 3.28 39.5987 3.88L47.4287 19ZM53.6621 19H50.5721V5.38C50.5721 4.76 50.6721 4.17 50.8721 3.61C51.0921 3.05 51.4121 2.57 51.8321 2.17C52.2521 1.75 52.7821 1.42 53.4221 1.18C54.0821 0.939999 54.8521 0.82 55.7321 0.82H71.8121V3.85H55.7321C55.0721 3.85 54.5521 4.04 54.1721 4.42C53.7921 4.78 53.6021 5.34 53.6021 6.1V8.41H71.8121V11.44H53.6621V19ZM87.0901 19H86.0401C84.2601 19 82.7301 18.84 81.4501 18.52C80.1701 18.18 79.1101 17.65 78.2701 16.93C77.4501 16.21 76.8401 15.28 76.4401 14.14C76.0401 13 75.8401 11.62 75.8401 10C75.8401 6.86 76.6601 4.55 78.3001 3.07C79.9601 1.57 82.5501 0.82 86.0701 0.82H87.0601C90.5601 0.82 93.1401 1.57 94.8001 3.07C96.4601 4.55 97.2901 6.86 97.2901 10C97.2901 11.62 97.0901 13 96.6901 14.14C96.2901 15.28 95.6701 16.21 94.8301 16.93C94.0101 17.65 92.9501 18.18 91.6501 18.52C90.3701 18.84 88.8501 19 87.0901 19ZM87.0601 3.85H86.1901C83.6501 3.85 81.8001 4.37 80.6401 5.41C79.4801 6.43 78.9001 7.95 78.9001 9.97C78.9001 12.01 79.4701 13.52 80.6101 14.5C81.7701 15.48 83.6201 15.97 86.1601 15.97H86.9701C89.5101 15.97 91.3501 15.49 92.4901 14.53C93.6501 13.55 94.2301 12.04 94.2301 10C94.2301 8 93.6501 6.48 92.4901 5.44C91.3501 4.4 89.5401 3.87 87.0601 3.85ZM114.783 11.44H101.313V8.41H114.783V11.44ZM135.407 17.35L121.847 5.05V19H118.817V2.68C118.817 1.44 119.327 0.82 120.347 0.82H121.037C121.317 0.859999 121.607 0.959999 121.907 1.12C122.207 1.28 122.567 1.52 122.987 1.84L137.027 14.59V0.82H140.057V17.17C140.057 18.39 139.557 19 138.557 19H138.047C137.767 18.94 137.397 18.78 136.937 18.52C136.477 18.26 135.967 17.87 135.407 17.35ZM155.335 19H154.285C152.505 19 150.975 18.84 149.695 18.52C148.415 18.18 147.355 17.65 146.515 16.93C145.695 16.21 145.085 15.28 144.685 14.14C144.285 13 144.085 11.62 144.085 10C144.085 6.86 144.905 4.55 146.545 3.07C148.205 1.57 150.795 0.82 154.315 0.82H155.305C158.805 0.82 161.385 1.57 163.045 3.07C164.705 4.55 165.535 6.86 165.535 10C165.535 11.62 165.335 13 164.935 14.14C164.535 15.28 163.915 16.21 163.075 16.93C162.255 17.65 161.195 18.18 159.895 18.52C158.615 18.84 157.095 19 155.335 19ZM155.305 3.85H154.435C151.895 3.85 150.045 4.37 148.885 5.41C147.725 6.43 147.145 7.95 147.145 9.97C147.145 12.01 147.715 13.52 148.855 14.5C150.015 15.48 151.865 15.97 154.405 15.97H155.215C157.755 15.97 159.595 15.49 160.735 14.53C161.895 13.55 162.475 12.04 162.475 10C162.475 8 161.895 6.48 160.735 5.44C159.595 4.4 157.785 3.87 155.305 3.85ZM186.148 17.35L172.588 5.05V19H169.558V2.68C169.558 1.44 170.068 0.82 171.088 0.82H171.778C172.058 0.859999 172.348 0.959999 172.648 1.12C172.948 1.28 173.308 1.52 173.728 1.84L187.768 14.59V0.82H190.798V17.17C190.798 18.39 190.298 19 189.298 19H188.788C188.508 18.94 188.138 18.78 187.678 18.52C187.218 18.26 186.708 17.87 186.148 17.35Z"
              fill="#5565FF"
            />
          </svg>
        </div>
        <ul class="navbar-menu d-flex column gap12">
          <li
            v-for="item in users[role] || []"
            :key="item.page"
            :class="activePage === item.page ? 'active' : 'left-item'"
            class="d-flex gap12"
            @click="setActive(item.page)"
          >
            <Icons :name="item.icon" />
            <router-link to="/">{{ item.title }}</router-link>
          </li>
        </ul>
        <div class="navbar-buttonbox">
          <div class="nav-name">{{ userName }}</div>
          <Icons @click="exitLogin" name="exit" />
        </div>
      </div>
      <div class="burgericon" @click="handleOpenMenu">
        <Icons name="openmenu" />
      </div>
    </div>
  </template>
  
  <script>
  import { defineAsyncComponent } from "vue";
  
  export default {
    name:"SidebarPage",
    components: {
      Icons: defineAsyncComponent(() => import("./Icons.vue")),
    },
    data() {
      return {
        activePage: "dashboard",
        userName: "Admin",
        role: 'manager',
        isOpen: false,
        users: {
          manager: [
            { title: "Dashboard", icon: "home", page: "Managerdashboard" },
            { title: "Nonvoylar", icon: "workers", page: "workers" },
            { title: "Do'konlar", icon: "product", page: "magazine" },
            { title: "Sozlamalar", icon: "setting", page: "settings" },
            // { title: "Yetkazuvchilar", icon: "delivery", page: "delivery" },
            // { title: "Chiqimlar", icon: "rasxod", page: "debt" },
            // { title: "Omborxona", icon: "firma", page: "warehouse" },
            // { title: "Non turlari", icon: "bread", page: "typeOfBread" },
          ],
        },
      };
    },
    methods: {
      setActive(page) {
        this.activePage = page;
        this.$emit("menu-click", page);
  
        this.closeSidebar();
      },
      exitLogin() {
        localStorage.removeItem("user");
        this.$router.push("/login");
      },
      handleOpenMenu() {
        this.isOpen = true;
      },
      closeSidebar() {
        this.isOpen = false;
      },
      handleTouchStart(event) {
        this.touchStartX = event.touches[0].clientX;
      },
      handleTouchMove(event) {
        this.touchEndX = event.touches[0].clientX;
        if (this.touchEndX - this.touchStartX >= 100) {
          this.isOpen = true;
        }
      },
    },
    mounted() {
      document.addEventListener("touchstart", this.handleTouchStart);
      document.addEventListener("touchmove", this.handleTouchMove);
      const role = JSON.parse(localStorage.getItem("user")).role || "";
      switch (role) {
        case "superAdmin":
          this.setActive("dashboard");
          break;
        case "manager":
          this.setActive("Managerdashboard");
          break;
        case "seller":
          this.setActive("sellerDash");
          break;
        case "delivery":
          this.setActive("homeDelivery");
          break;
      }
    },
    beforeUnmount() {
      document.removeEventListener("touchstart", this.handleTouchStart);
      document.removeEventListener("touchmove", this.handleTouchMove);
    },
  };
  </script>
  
  <style>
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1% 0% 1% 1%;
  }
  
  .navbar-box {
    width: 100%;
    height: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: white;
    border: 1px solid #d1d1d1;
    border-radius: 10px;
    padding: 24px;
  }
  
  .navbar-menu {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
  }
  
  .navbar-logo {
    font-size: 33px;
  }
  
  .nav-name {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
  }
  
  .left-item,
  .active {
    width: 100%;
    color: #000;
    font-size: 16px;
    text-align: center;
    position: relative;
    list-style: none;
    padding-bottom: 5px;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 8px;
    gap: 12px;
  }
  
  .navbar-menu > li.active {
    color: #fff;
    background: #6598f7;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  }
  
  .navbar-menu > li.active > a {
    color: #fff;
    font-weight: 400;
    font-style: normal;
  }
  
  li.active div svg path {
    stroke: #fff;
  }
  
  .left-item:hover {
    background: #dce8ff;
    color: #5565ff;
  }
  
  .navbar-buttonbox {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  .navbar-buttonbox {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-around;
    padding: 0px 12px;
    background: #fff;
    border-radius: 10px;
    color: #000;
    border: 1px solid #919191;
  }
  
  .navbar-buttonbox > :first-child {
    flex: 1;
  }
  
  @media screen and (max-width: 768px) {
    .navbar-box {
      position: fixed;
      top: 0;
      left: -100%;
      width: 60%;
      height: 100vh;
      background: white;
      transition: left 0.3s ease-in-out;
      z-index: 1001;
    }
  
    .navbar-box.open {
      left: 0;
    }
  
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }
  
    .burgericon {
      display: block;
      cursor: pointer;
    }
  }
  
  @media (max-width: 580px) {
    .navbar-box {
      padding: 12px;
    }
  }
  </style>
  
  
  
  
  
  
  
  
  