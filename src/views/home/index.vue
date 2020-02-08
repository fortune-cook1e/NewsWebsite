<template>
  <div v-loading.fullscreen.lock="loading" class="home">
    <Header />
    <side-bar @get-type-news="getTypeNews" />
    <Carousel :news="carouselList" />
    <card-news
      :news="newsList"
      @loading-news="loadingMore"
      @get-type-news="getTypeNews"
    />
    <loading-more v-if="!maxLoading" @loading-more="loadingMore" />
    <Footer v-if="!loading" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import SideBar from '@/components/Sidebar'
import Carousel from '@/components/Carousel'
import CardNews from '@/components/CardNews'
import LoadingMore from '@/components/LoadingMore'
import Footer from '@/components/Footer'
import { getAllNews } from '@/api'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    SideBar,
    Carousel,
    CardNews,
    LoadingMore,
    Footer,
    Header
  },
  data() {
    return {
      newsQuery: {
        current: 1,
        size: 8,
        status: 1,
        type: '',
        flag: 1
      },
      loading: false,
      maxLoading: false,
      total: undefined, // 新闻总数
      newsType: '', // 新闻类型id
      maxPage: undefined, // 最大翻页数
      newsList: [], // 全部新闻
      carouselList: [] // 轮播图新闻
    }
  },
  computed: {
    ...mapGetters('app', ['newsTypeId', 'utm_source', 'utm_campaign'])
  },
  watch: {
    // 当前页与最大页相同时 则隐藏 loading more
    newsQuery: {
      handler(val) {
        if (val.current === this.maxPage) {
          this.maxLoading = true
        }
      },
      deep: true
    }
  },
  created() {
    if (this.$route.query.utm_source) {
      this.$store.dispatch('app/setAppId', this.$route.query.utm_source)
      this.$store.dispatch('app/setChannelId', this.$route.query.utm_campaign)
    }
    this.newsQuery.type = this.newsTypeId
    this.getNewsList()
  },
  methods: {
    /**
     * @description 获取新闻列表
     */
    async getNewsList() {
      // 全屏loading
      this.loading = true
      try {
        const result = await getAllNews(this.newsQuery)
        const { data, total } = result.data
        this.newsList = data
        this.maxPage = Math.ceil(total / this.newsQuery.size)
        this.total = total
        this.carouselList = this.newsList.splice(0, 3)
        this.loading = false
      } catch (e) {
        this.loading = false
        console.log(e)
      }
    },
    /**
     * @description 加载更多
     */
    async loadingMore() {
      this.loading = true
      try {
        this.newsQuery.current++
        const result = await getAllNews(this.newsQuery)
        const { data } = result.data
        this.newsList = this.newsList.concat(data)
        this.loading = false
      } catch (e) {
        this.loading = false
        console.log(e)
      }
    },
    /**
     * @description 根据新闻类型查询新闻
     */
    async getTypeNews(id) {
      const loading = this.$loading({
        lock: true,
        text: 'loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      try {
        this.newsList = []
        this.newsQuery.current = 1
        this.newsQuery.type = id
        const result = await getAllNews(this.newsQuery)
        const { data, total } = result.data
        this.maxPage = Math.ceil(total / this.newsQuery.size)
        this.total = total
        this.newsList = data
        this.carouselList = this.newsList.splice(0, 3)
        loading.close()
      } catch (e) {
        loading.close()
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss">
  .home {
    position: relative;
  }
</style>
