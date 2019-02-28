'use strict';

if ( (/MicroMessenger/gi).test(navigator.userAgent) ) {
    var btnCiven = document.getElementById('civen');
    btnCiven.setAttribute('href', 'https://qbview.url.cn/getResourceInfo?appid=62&url=https%3A%2F%2Fcivenz.github.io%2F&doview=1');
}

if ( !(/MicroMessenger/gi).test(navigator.userAgent) ) {
    var btnWxTips = document.getElementById('wechat-tips');
    btnWxTips.setAttribute('style', 'display: none;');
}