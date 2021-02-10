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
