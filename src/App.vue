<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    let userToken = JSON.parse(localStorage.getItem("user"))
    console.log(userToken);
    if(!userToken?.token){
      this.$route.push('/login')
    }
  }
}
</script>

<style>

</style>
