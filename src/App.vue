<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    let userToken = JSON.parse(localStorage.getItem("user"))
    console.log(userToken);
    if(!userToken){
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
