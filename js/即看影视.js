var rule = {
    title: '即看影视',
    host: 'https://www.jkv.app',
    url: '/show/fyclass--------fypage---.html',
    searchUrl: '/search/**----------fypage---.html',
    class_parse: '.nav_list&&li;a&&title;a&&href;.*/(.*?)\.html',
    class_name: '短剧',
    class_url: '53',
    cate_exclude: '排名|明星|专题',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    play_parse: true,
    limit: 6,
    lazy:muban.mxpro.lazy,
    推荐: '.cbox_list;*;*;*;*;*',
    double: true,
    一级: 'ul.vodlist&&li;a&&title;a&&data-background-image;.text_right&&Text;a&&href',
    二级: {
        title: 'h2&&Text;.content_detail:eq(1)&&ul&&li&&a:eq(2)&&Text',
        img: '.vodlist_thumb&&data-background-image',
        desc: ';.content_detail:eq(1)&&ul&&li&&a:eq(3)&&Text;.content_detail:eq(1)&&ul&&li&&a&&Text;;',
        content: '.content_desc&&span&&Text',
        tabs: '.play_source_tab&&a--i',
        lists: 'div.playlist_full:eq(#id) li',
    },
    搜索: '*',
}