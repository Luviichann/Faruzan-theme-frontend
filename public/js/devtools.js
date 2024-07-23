// 监听按键事件
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
    }
  });
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});