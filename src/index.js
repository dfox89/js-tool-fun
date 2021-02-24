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
 * @param {String} value key值
 */
export const getUrlParams = (value) => {
  var str = decodeURIComponent(window.location.search)
  var query = {}
  if (str) {
    var arr = str.slice(1).split('&')
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i].split('=')
      query[temp[0]] = temp[1]
    }
  }
  return value ? query[value] : query
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
 * @param {Array|Object} value 被深拷贝的
 */
export const deepCopy = (value) => {
  var back = Array.isArray(value) ? [] : {}
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      if (typeof value[key] === 'object' && value[key] !== null) {
        back[key] = deepCopy(value[key])
      } else {
        back[key] = value[key]
      }
    }
  }
  return back
}
