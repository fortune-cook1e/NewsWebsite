<template>
  <div class="card-news">
    <div
      v-for="item in news"
      :key="item.id"
      class="card-news-detail"
    >
      <div class="card-news-image">
        <el-image :src="item.newsImgUrl" fit="fill" @click="goArticle(item)" />
      </div>
      <div class="card-news-description">
        <el-button
          size="mini"
          type="primary"
          plain
          @click="getTypeNews(item.type)"
        >
          {{ item.type | formatType }}
          <i class="el-icon-link" />
        </el-button>
        <span class="title">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CardNews',
  props: {
    news: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    ...mapGetters('app', ['utm_source', 'utm_campaign'])
  },
  methods: {
    /**
     * @description 加载更多
     */
    loadingMore() {
      this.$emit('loading-news')
    },
    /**
     * @description 全文章详页
     */
    goArticle(item) {
      this.$router.push({
        name: 'news',
        params: {
          id: item.id,
          type: item.type
        },
        query: {
          utm_source: this.utm_source,
          utm_campaign: this.utm_campaign
        }
      })
    },
    getTypeNews(typeId) {
      this.$emit('get-type-news', typeId)
    }
  }
}
</script>

<style lang="scss">
@import url('../../common/css/font.css');
  .card-news {
    padding: 0rem .9rem 0;
    .card-news-detail {
      margin-bottom: 15px;
      border: 1px solid #f2f2f4;
      border-radius: 4px;
      .card-news-image {
        .el-image {
          width: 100%;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          max-height: 190px;
        }
        img {
          width: 100%;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          max-height: 190px;
          object-fit: fill;
        }
      }
      .card-news-description {
        text-align: left;
        font-family: Open Sans,sans-serif;
        font-size: 16px;
        color: #333;
        line-height: 26px;
        margin: 6.9px 0;
        overflow: hidden;
        font-weight: 900;
        padding: 0 6.9px;
        .el-button {
          padding: 3px 3px 3px 7px;
          vertical-align: text-bottom;
        }
        .title {
          margin-left: 1rem;
        }
      }
    }
  }
</style>
