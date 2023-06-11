// body宽高
// {#let cw = 1920,ch = 1080#}
let cw = 1873, ch = 969
let body = document.getElementById('body')
// {#document.body.style.width = `${cw}px`#}
// {#document.body.style.height = `${ch}px`#}
window.innerWidth = `${cw}px`
window.innerHeight = `${ch}px`

// 对body进行缩放
function windowResize() {
    var w1 = window.innerWidth;
    var h1 = window.innerHeight;
    var pw = w1 / 1873; // 根据页面设计，动态修改宽高
    var ph = h1 / 969;
    window.innerWidth = `${w1}px`
    window.innerHeight = `${h1}px`
    $("body").css("transform", "scale(" + pw + "," + ph + ")");  // 设置等比例缩放
    // 窗口宽高
    let w = window.innerWidth, h = window.innerHeight
    // 缩放比例
    let r = w / cw < h / ch ? w / cw : h / ch

    // {#document.body.style.transform = `scale( ${r})`#}
    // 因为scale是以body的原中心点为基准进行缩放，所以缩放之后需要调整外边距，使其位于窗口的中心位置
    document.body.style.marginLeft = (-(cw - pw * cw) / 2 + (w - pw * cw) / 2) + 'px'
    document.body.style.marginTop = (-(ch - ph * ch) / 2 + (h - ph * ch) / 2) + 'px'
    document.body.style.marginBottom = (-(h > ch ? h : ch - ph * ch)) + 'px'
    document.body.style.marginRight = (-(w > cw ? w : cw - pw * cw)) + 'px'
}

windowResize()
// 监听窗口尺寸变化
window.addEventListener('resize', windowResize);

