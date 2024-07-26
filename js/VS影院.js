var rule = {
  title: 'VS影院',
  host: 'https://www.nxgqmy.com',
  url: '/ybsitp/fyclass-fypage.html',
  searchUrl: '/ybsisc/**----------fypage---.html',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_parse: 'ul.menu li:gt(0);a&&Text;a&&href;/.*/(\\d+).*',
  play_parse: true,
  lazy:muban.mxpro.lazy,
  limit: 6,
  double: true,
  tab_remove:['秒播'],
  推荐: 'ul.myui-vodlist.clearfix;li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  一级: '.myui-vodlist li;a&&title;a&&data-original;.pic-text&&Text;a&&href',
  二级: {
    title: 'h3&&Text;span.pic-text&&Text',
    img: 'div.ds-top-info-main-cover&&style',
    desc: '',
    content: 'meta[name=\'description\']&&content',
    tabs: '.myui-panel__head&&li',
    lists: '.myui-content__list:eq(#id) li a.btn',
  },
  搜索: '*',
}