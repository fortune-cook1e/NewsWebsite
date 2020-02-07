<template>
  <div class="carousel-news">
    <el-carousel height="250px">
      <el-carousel-item
        v-for="item in news"
        :key="item.id"
      >
        <div class="carousel-news-item" @click="goArticle(item.id)">
          <p class="title">{{ item.title }}</p>
          <el-image :src="item.newsImgUrl" fit="fill" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <el-divider />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CarouselNews',
  props: {
    news: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters('app', ['appid', 'channelId'])
  },
  methods: {
    goArticle(id) {
      this.$router.push({
        name: 'news',
        params: {
          id
        },
        query: {
          appid: this.appid,
          channelId: this.channelId
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .carousel-news {
    .carousel-news-item {
      position: relative;
      height: 100%;
      p.title {
        position: absolute;
        bottom: 2rem;
        left: 1rem;
        font-size: 1.4rem;
        font-weight: 500;
        color: #fff;
        z-index: 999;
      }
      .el-image {
        height: 250px;
      }
    }
  }
</style>
