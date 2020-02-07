
/**
 * @description 转换相应的新闻类型
 * @param {*} val 新闻typeId
 * @returns
 */
export function formatType(val) {
  switch (val) {
    case 1:return 'Funny'
    case 2:return 'Finance'
    case 3:return 'Tech'
    case 4:return 'Success'
    case 5:return 'Fashion'
    case 6:return 'Health'
    case 7:return 'Travel'
    default:return 'Funny'
  }
}
