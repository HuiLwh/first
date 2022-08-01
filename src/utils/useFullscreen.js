
function useFullscreen(isFullScreen) {
    if(isFullScreen.value){
        // 已经全屏
        let doc = document.webkitCancelFullScreen || document.mozCancelFullScreen || document.exitFullscreen
        // doc() // this == window
        doc.call(document)
    }else{
        // 没有全屏
        let el = document.documentElement
        let fullscreen = el.webkitRequestFullScreen || el.requestFullScreen || el.mozRequestFullScreen
        fullscreen.call(el)
    }
    isFullScreen.value = !isFullScreen.value
}
export default useFullscreen