<template>
  <div v-loading.fullscreen.lock="loading" class="news">
    <Header />
    <side-bar />
    <div class="news-detail">
      <div class="news-detail-title">
        {{ article.title }}
      </div>
      <div class="news-detail-date">
        {{ article.updateTime }}
      </div>
      <div class="news-detail-thumbnail">
        <el-image :src="article.newsImgUrl" />
      </div>
      <div class="news-detail-content" v-html="article.detail" />
      <el-divider />
      <h1 v-if="!loading">Most Popular</h1>
      <card-news :news="newsList" />
    </div>
    <Footer v-if="!loading" />
  </div>
</template>

<script>
import { getNewsDetail, getAllNews } from '@/api'
import Header from '@/components/Header'
import SideBar from '@/components/Sidebar'
import CardNews from '@/components/CardNews'
import Footer from '@/components/Footer'
import { mapGetters } from 'vuex'
export default {
  name: 'News',
  components: {
    Header,
    SideBar,
    CardNews,
    Footer
  },
  data() {
    return {
      article: {
        title: '',
        updateTime: '',
        newsImgUrl: '',
        detail: ''
      },
      newsQuery: {
        current: 1,
        size: 3,
        status: 1,
        type: '',
        flag: 1
      },
      newsList: undefined,
      loading: false
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    ...mapGetters('app', ['newsTypeId'])
  },
  async created() {
    this.loading = true
    await Promise.all([this.getArticleDetail(), this.getNewsList()])
    this.loading = false
  },
  methods: {
    /**
     * @description 获取文章详情
     */
    async getArticleDetail() {
      try {
        const result = await getNewsDetail(this.id)
        const { data } = result
        this.article = data
        this.article.detail = this.article.detail.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        this.loading = false
      } catch (e) {
        console.log(e)
      }
    },
    async getNewsList() {
      try {
        const result = await getAllNews(this.newsQuery)
        const { data } = result.data
        this.newsList = data
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss">
@import url('../../common/css/font.css');
  .news {
    overflow: scroll;
    .news-detail {
      padding: 2rem 1rem 0;
      h1 {
        text-align: center;
      }
      .news-detail-title {
        font-size: 28px;
        font-family: "YaHei";
        font-weight: 600;
        color: #333;
      }
      .news-detail-date {
        height: 20px;
        font-size: 14px;
        font-family: "YaHei";
        font-weight: 400;
        line-height: 20px;
        margin: 8px 0 20px;
        color: #999;
      }
      .news-detail-thumbnail {
        width: 100%;
        margin-bottom: 10px;
      }
      .news-detail-content {
        color: #333;
        font-size: 17px;
        line-height: 1.5em;
        p {
          word-break: break-word;
          color:#000;
        }
      }
    }
  }
</style>
