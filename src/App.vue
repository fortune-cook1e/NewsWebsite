<template>
  <div v-cloak id="app">
    <transition name="fade" mode="out-in">
      <router-view :key="key" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,body {
    width: 100%;
    overflow: auto !important;
  }
  .fade-leave-active,
  .fade-enter-active {
    transition:all .5s
  }

  .fade-enter,.fade-leave-to {
    opacity: 0;
  }
</style>
