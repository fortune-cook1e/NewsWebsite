import request from '@/utils/request'

/**
 * @description 获取新闻
 * @param {current:当前页 size:新闻数量 status type flag：是否使用缓存} params
 */
export function getAllNews(params) {
  return request({
    url: '/news/list',
    method: 'get',
    params
  })
}

/**
 * @description 根据id查询新闻详细
 * @param {*} id 新闻id
 */
export function getNewsDetail(id) {
  return request({
    url: '/news/' + id,
    method: 'get'
  })
}
