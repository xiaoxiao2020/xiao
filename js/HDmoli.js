var rule = {
  title: 'HDmoli',
  host: 'https://www.hdmoli.pro',
  url: '/mlist/indexfyclass-fypage.html',
  searchUrl: '/search.php?page=fypage&searchword=**&searchtype=',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_parse: '.myui-header__menu li;a&&Text;a&&href;index(\\d+)\.html',
  play_parse: true,
  lazy: $js.toString(() => {
        let js = 'try{function requestApix(callback){$.post(\"ass.php\",{vid:getQueryString(\"vid\")},function(result){callback(result.data.url);},\"json\");}requestApix(function(data){location.href=sign(data);})}catch(e){}location.href=document.querySelector(\"#playleft iframe\").src;';
        input = {
            parse: 1,
            url: input,
            click: js,
            js: js
        };
    }),
  limit: 6,
  推荐: 'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  double: true,
  一级: '.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  二级: {
    title: '.myui-content__detail .title&&Text;.myui-content__detail p:eq(-2)&&Text',
    img: '.myui-content__thumb .lazyload&&data-original',
    desc: '.myui-content__detail p:eq(0)&&Text;.myui-content__detail p:eq(1)&&Text;.myui-content__detail p:eq(2)&&Text',
    content: '.content&&Text',
    tabs: '.nav-tabs:eq(0) li',
    lists: '.myui-content__list:eq(#id) li',
  },
  搜索: '#searchList li;a&&title;.lazyload&&data-original;.text-muted&&Text;a&&href;.text-muted:eq(-1)&&Text',
}