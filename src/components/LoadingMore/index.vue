<template>
  <div class="loading-more" @click="loadingMore">
    Loading More
  </div>
</template>

<script>
export default {
  name: 'LoadingMore',
  methods: {
    loadingMore() {
      this.$emit('loading-more')
    }
  }
}
</script>

<style lang="scss">
  .loading-more {
    height: 43px;
    line-height: 43px;
    color: #5fbeed;
    text-align: center;
    border-top: 1px solid #ebebeb;
    font-size: 14px;
    cursor: pointer;
  }
</style>
