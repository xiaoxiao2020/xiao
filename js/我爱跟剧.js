var rule = {
  title: '我爱跟剧',
  host: 'http://fabu.timiys.vip',
  hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,"li:eq(0)&&a&&href");print(src);HOST=src',
  url: '/vodshow/fyclass--------fypage---.html',
  searchUrl: '/vodsearch/**----------fypage---.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  class_parse: '.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
  //cate_exclude:'',
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: '.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
  double: true,
  一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.tag-link&&Text',
    img: '.module-item-pic&&img&&data-src',
    desc: '.video-info-items:eq(0)&&Text;.video-info-items:eq(1)&&Text;.video-info-items:eq(2)&&Text;.video-info-items:eq(3)&&Text',
    content: '.vod_content&&Text',
    tabs: '.module-tab-item',
    lists: '.module-player-list:eq(#id)&&.scroll-content&&a',
  },
  搜索: '.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',
}