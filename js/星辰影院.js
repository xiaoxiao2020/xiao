var rule = {
    模板: '自动',
    title:'星辰影院',
    host: 'https://tv.vjiangyin.com',
    url:'/vodshow/fyclass--------fypage---.html',//网站的分类页面链接
    searchUrl:'/vodsearch/**----------fypage---.html',
    class_parse: '.drop-content-items&&li;a&&Text;a&&href;.*/(.*?).html',
    cate_exclude:'体育赛事|全部影片',
    一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a.module-item-title&&href',
    搜索: '.module-items .module-search-item;a.video-serial&&title;img&&data-src;.video-serial&&Text;a.video-serial&&href',
}