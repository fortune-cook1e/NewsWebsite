%<template>
  <div class="side-bar">
    <el-drawer
      :visible="sideStatus"
      direction="ltr"
      :modal="true"
      :show-close="false"
      @open="sideBarOpen"
      @close="sideBarClose"
    >
      <el-scrollbar>
        <el-menu
          :default-active="defaultIndex"
          background-color="#000"
          text-color="#999"
        >
          <el-menu-item
            v-for="item in navList"
            :key="item.name"
            :index="item.id"
            @click="goCategory(item)"
          >
            <span slot="title">
              {{ item.name }}
            </span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      defaultIndex: '',
      navList: [
        { name: 'HOME', link: 'home', id: '' },
        { name: 'FUNNY', link: 'home', id: '1' },
        { name: 'FINANCE', link: 'home', id: '2' },
        { name: 'TECH', link: 'home', id: '3' },
        { name: 'SUCCESS', link: 'home', id: '4' },
        { name: 'FASHION', link: 'home', id: '5' },
        { name: 'HEALTH', link: 'home', id: '6' },
        { name: 'TRAVEL', link: 'home', id: '7' }
      ]
    }
  },
  computed: {
    ...mapGetters('app', ['sideStatus', 'appid', 'channelId'])
  },
  created() {
    if (this.$route.query.newsType) {
      this.defaultIndex = this.$route.query.newsType
    }
  },
  methods: {
    sideBarOpen() {
      this.$store.dispatch('app/toggleSideStatus', true)
    },
    sideBarClose() {
      this.$store.dispatch('app/toggleSideStatus', false)
    },
    goCategory(item) {
      this.$store.dispatch('app/toggleSideStatus', false)
      this.$store.dispatch('app/setTypeId', item.id)
      this.defaultIndex = item.id
      // 如果当前不是home  则跳转到home页
      if (this.$route.name !== 'home') {
        this.$router.push({
          name: 'home',
          query: {
            appid: this.appid,
            channelId: this.channelId
          }
        })
      } else {
        this.$emit('get-type-news', item.id)
      }
    }
  }
}
</script>

<style lang="scss">
  .side-bar {
    .el-drawer {
      background: #000;
    }
    .el-menu {
      border-right: none;
      font-family: YaHei;
    }
  }
</style>
