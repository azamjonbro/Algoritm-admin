<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    let userToken = localStorage.getItem("token")
    console.log("Token in App.vue:", userToken);
    if(!userToken){
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
