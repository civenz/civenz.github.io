'use strict';

var btnCiven = document.getElementById('civen'),
    btnAbout = document.getElementsByTagName('h1')[0];

if ( (/MicroMessenger/gi).test(navigator.userAgent) ) {
    btnCiven.setAttribute('href', 'https://github.com/civenz/resume/blob/master/README.md');
}

try {

    btnAbout.addEventListener('mouseup', function() {
        btnCiven.setAttribute('style', 'color: #00f;'),
        btnCiven.click();
    }, false);

    window.console && window.console.log && (
        console.log('你好!' ),
        console.log('%c其实我是一个演员!','color: #f00'),
        console.log(''),

        console.table([
            {Type: '编程语言', Description: 'Python, PHP'},
            {Type: '数据库', Description: 'MySQL|MariaDB, PostgreSQL, MongoDB, Redis'},
            {Type: '中间件', Description: 'ActiveMQ'},
            {Type: '搜索引擎', Description: 'Apache Solr'},
            {Type: '脚本语言', Description: 'JavaScript, VBScript, Windows Bat, Linux Shell'},
            {Type: 'WEB', Description: 'HTML, XML, CSS'},
        ]),
        console.log(''),

        console.group('Javascript'),
            console.log('jQuery'),
            console.log('Vue.js'),
            console.log('Node.js'),
        console.groupEnd('Javascript'),
        console.log(''),

        console.log('%c我的 Github: https://github.com/civenz', 'background: #ff0; color: #f00; font-size: 18px;'),
        console.log(''),
        console.log('%c微信公众号', 'font-size: 24px; font-weight: 700;'),
        console.log("%c ", "background: #ff0 url(https://civenz.github.io/images/weixin_gzh.jpg) center/200px 200px no-repeat border-box; padding: 100px; margin: 0;  border: 5px dotted #f00; font-size: 0; line-height: 0;")
        //background: ([color] [img] [position/size] [repeat] [origin] [clip])
    );
} catch(e) {}

if ( (/MSIE/gi).test(navigator.appVersion)
    || (!!window.ActiveXObject || "ActiveXObject" in window) ) {
    document.body.innerHTML = '<body><h1 style="padding: 1em;">你是穿越过来的吗? 还在使用奇葩的 IE 内核浏览器!</h1></body>';
}
