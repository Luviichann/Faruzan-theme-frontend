// 监听按键事件
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
        window.close();  // 关闭当前页面
    }
  });
  
  // 监听窗口大小变化
  window.addEventListener('resize', function(e) {
    if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
      e.preventDefault();
      window.close();  // 关闭当前页面
    }
  });