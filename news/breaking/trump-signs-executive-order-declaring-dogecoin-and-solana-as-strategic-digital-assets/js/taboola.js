/* eslint-disable */
window._taboola = window._taboola || []
_taboola.push({ article: 'auto' })
!(function(e, f, u, i) {
  if (!document.getElementById(i)) {
    e.async = 1
    e.src = u
    e.id = i
    f.parentNode.insertBefore(e, f)
  }
  console.log('Mid Mobile Taboola Ad Is set for Milwauke and Seattle')
})(
  document.createElement('script'),
  document.getElementsByTagName('script')[0],
  '//cdn.taboola.com/libtrc/myfox-network/loader.js',
  'tb_loader_script'
)
if (window.performance && typeof window.performance.mark == 'function') {
  window.performance.mark('tbl_ic')
}
