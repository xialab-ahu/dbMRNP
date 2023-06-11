function windowResize() {
    s = window.screen.width / 1873;
    document.body.style.zoom = s;
}

windowResize()
// 监听窗口尺寸变化
window.addEventListener('resize', windowResize);