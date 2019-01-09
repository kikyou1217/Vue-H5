(function(doc,win){
    //实现响应式效果
    var docEl=doc.documentElement,//返回html dom中的根节点<html>
        resizeEvt='orientationchange' in window?'orientationchange':'resize',
        recalc = function(){
            //获取屏幕的高度
            var clientWidth=docEl.clientWidth;
            if(!clientWidth) return;
            //设置响应式rem单位,以320（Ipone4设备宽度为基本尺寸）
            docEl.style.fontSize=20*(clientWidth/320)+'px';
        };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt,recalc,false);
        doc.addEventListener('DOMContentLoaded',recalc,false);
})(document,window);