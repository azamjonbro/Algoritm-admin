<template >
    <div class="home-page">
        <Sidebar class="sidebar" @menu-click="changePage($event)" />
        <main class="main">

            <Statistics v-if="activePage=='statistics'"/>
            <Sertificate v-if="activePage=='sertificate'"/>
            <Settings v-if="activePage=='settings'"/>
        </main>
    </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
import Sertificate from '@/Pages/Sertificates/Sertificate.vue';
import Settings from '@/Pages/Settings/Settings.vue';
import Statistics from '@/Pages/Statistics/Statistics.vue';
export default {
    name:"HomePage",
    components:{
        Sidebar,
        Statistics,
        Sertificate,
        Settings
    },
    data() {
    return {
      activePage: "",
    };
  },
  methods: {
    changePage(page) {
      this.activePage = page;
    },
  },
}
</script>
<style >
    
</style>