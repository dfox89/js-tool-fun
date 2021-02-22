/**
 * 加载css，js
 * @param {String} url 地址
 */
export const loadCssJs = (url) => {
  var ext = url.slice(url.lastIndexOf('.'))
  var dom
  switch (ext) {
    case '.css':
      dom = document.createElement('link')
      dom.rel = 'stylesheet'
      dom.href = url
      break
    case '.js':
      dom = document.createElement('script')
      dom.type = 'text/javascript'
      dom.src = url
      break
    default:
      break
  }
  document.body.appendChild(dom)
}

/**
 * 获取地址栏get参数
 * @param {String} str key值
 */
export const getUrlParams = (str) => {
  var reg = new RegExp('(^|&)' + str + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r !== null) {
    return unescape(r[2])
  } else {
    return null
  }
}

/**
 * base64图片转bytes
 * @param {String} url base64图片
 */
export const baseImgToBytes = (url) => {
  var ia = []
  var data = url.split(',')[1]
  data = window.atob(data)
  for (var i = 0; i < data.length; i++) {
    ia[i] = data.charCodeAt(i)
  }
  return ia
}

/**
 * 数组合并去重
 */
export const uniqueArr = () => {
  if (arguments.length === 0) return []
  var arr = []
  for (let i = 0; i < arguments.length; i++) {
    arr.push(...arguments[i])
  }
  return [...new Set(arr)]
}

/**
 * 深拷贝
 * @param {Array|Object} obj 被深拷贝的
 */
export const deepCopy = (obj) => {
  var back = obj instanceof Array ? [] : {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        back[key] = deepCopy(obj[key])
      } else {
        back[key] = obj[key]
      }
    }
  }
  return back
}
