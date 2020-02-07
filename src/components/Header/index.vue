<template>
  <div class="header">
    <el-row type="flex" justify="start" align="middle">
      <el-col :span="8">
        <i class="el-icon-menu" @click="openSidebar" />
      </el-col>
      <el-col :span="8" :offset="1">
        <h3>MokNews</h3>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    openSidebar() {
      this.$store.dispatch('app/toggleSideStatus', true)
    }
  }
}
</script>

<style lang="scss">
  .header {
    height: 48px;
    background: #111;
    color:#fff;
    padding: 0 1rem;
    .el-row {
      height: 100%;
    }
    i {
      font-size:1.5rem;
    }
  }
</style>
