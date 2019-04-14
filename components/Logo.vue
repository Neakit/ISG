<template>
<div class="logo" @click="goToMain">
    <h1 class="logo-title py-1">
      ISG
    </h1>
    <!-- <div class="logo-subtitle">
      автомобильные
    </div>
    <div class="logo-subtitle">
      грузоперевозки
    </div> -->
</div>
</template>

<script>
export default {
  name: 'Logo',
  methods: {
      goToMain(){
      this.$store.commit('setCurrentTab', 'taps')
      this.$router.push({
        path: '/'
      })
    },
  }
}
</script>


<style>
  .logo {
    font-family: 'WorldFair', sans-serif;
    /* font-weight: bold; */
    color: white;
    /* background: rgb(47, 81, 106); */
    padding: 0.5rem;
    text-align: center;
    cursor: pointer;
  }
  .logo-title {
    font-size: 3.2rem;
    padding-bottom: 0 !important;
    margin-bottom: 0 !important
  }
  .logo-subtitle{
    font-size: 0.7rem;
  }
</style>
