var rule={
    title:'爱迪影视',
    host:'https://adys.tv',
    //host:'https://adys123.com',  //网址发布站
    // url:'/show/fyclass--------fypage---.html',
    url:'/show/fyfilter.html',
    filterable:1,//是否启用分类筛选,
    filter_url:'{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',
    filter:{
        "dianying":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"dianying"},{"n":"动作片","v":"dongzuopian"},{"n":"喜剧片","v":"xijupian"},{"n":"爱情片","v":"aiqingpian"},{"n":"科幻片","v":"kehuanpian"},{"n":"恐怖片","v":"kongbupian"},{"n":"剧情片","v":"juqingpian"},{"n":"战争片","v":"zhanzhengpian"},{"n":"传记","v":"zhuanji"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"动作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"剧情","v":"剧情"},{"n":"战争","v":"战争"},{"n":"警匪","v":"警匪"},{"n":"犯罪","v":"犯罪"},{"n":"动画","v":"动画"},{"n":"奇幻","v":"奇幻"},{"n":"武侠","v":"武侠"},{"n":"冒险","v":"冒险"},{"n":"枪战","v":"枪战"},{"n":"恐怖","v":"恐怖"},{"n":"悬疑","v":"悬疑"},{"n":"惊悚","v":"惊悚"},{"n":"经典","v":"经典"},{"n":"青春","v":"青春"},{"n":"文艺","v":"文艺"},{"n":"微电影","v":"微电影"},{"n":"古装","v":"古装"},{"n":"历史","v":"历史"},{"n":"运动","v":"运动"},{"n":"农村","v":"农村"},{"n":"儿童","v":"儿童"},{"n":"网络电影","v":"网络电影"},{"n":"情色","v":"情色"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"意大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"其它","v":"其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"最新上映","v":"time"},{"n":"超高人气","v":"hits"},{"n":"全网热播","v":"up"},{"n":"高分好评","v":"score"}]}],
        "lianxuju":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"lianxuju"},{"n":"国产剧","v":"guochanju"},{"n":"港台剧","v":"gangtaiju"},{"n":"韩剧","v":"hanju"},{"n":"美剧","v":"meiju"},{"n":"日剧","v":"riju"},{"n":"英剧","v":"yingju"},{"n":"泰剧","v":"taiju"},{"n":"其他剧","v":"qita"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"古装","v":"古装"},{"n":"战争","v":"战争"},{"n":"青春偶像","v":"青春偶像"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"动作","v":"动作"},{"n":"奇幻","v":"奇幻"},{"n":"剧情","v":"剧情"},{"n":"历史","v":"历史"},{"n":"经典","v":"经典"},{"n":"乡村","v":"乡村"},{"n":"情景","v":"情景"},{"n":"商战","v":"商战"},{"n":"网剧","v":"网剧"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"韩国","v":"韩国"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"泰国","v":"泰国"},{"n":"英国","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"最新上映","v":"time"},{"n":"超高人气","v":"hits"},{"n":"全网热播","v":"up"},{"n":"高分好评","v":"score"}]}],
        "zongyi":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"zongyi"},{"n":"内地综艺","v":"ndzy"},{"n":"港台综艺","v":"gtzy"},{"n":"韩国综艺节目","v":"variety"},{"n":"欧美综艺","v":"oumeizongyi"},{"n":"日本综艺","v":"ribenzongyi"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"选秀","v":"选秀"},{"n":"情感","v":"情感"},{"n":"访谈","v":"访谈"},{"n":"播报","v":"播报"},{"n":"旅游","v":"旅游"},{"n":"音乐","v":"音乐"},{"n":"美食","v":"美食"},{"n":"纪实","v":"纪实"},{"n":"曲艺","v":"曲艺"},{"n":"生活","v":"生活"},{"n":"游戏互动","v":"游戏互动"},{"n":"财经","v":"财经"},{"n":"求职","v":"求职"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"港台","v":"港台"},{"n":"日韩","v":"日韩"},{"n":"欧美","v":"欧美"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"最新上映","v":"time"},{"n":"超高人气","v":"hits"},{"n":"全网热播","v":"up"},{"n":"高分好评","v":"score"}]}],
        "hanguodianying":[{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"韩国","v":"韩国"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"韩语","v":"韩语"}]},{"key":"by","name":"排序","value":[{"n":"最新上映","v":"time"},{"n":"超高人气","v":"hits"},{"n":"全网热播","v":"up"},{"n":"高分好评","v":"score"}]}],
        "dongman":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"dongman"},{"n":"日韩动漫","v":"rihan"},{"n":"国产动漫","v":"guoman"},{"n":"欧美动漫","v":"oumei"},{"n":"动漫电影","v":"cartoon"}]},{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"情感","v":"情感"},{"n":"科幻","v":"科幻"},{"n":"热血","v":"热血"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒险","v":"冒险"},{"n":"萝莉","v":"萝莉"},{"n":"校园","v":"校园"},{"n":"动作","v":"动作"},{"n":"机战","v":"机战"},{"n":"运动","v":"运动"},{"n":"战争","v":"战争"},{"n":"少年","v":"少年"},{"n":"少女","v":"少女"},{"n":"社会","v":"社会"},{"n":"原创","v":"原创"},{"n":"亲子","v":"亲子"},{"n":"益智","v":"益智"},{"n":"励志","v":"励志"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"国产","v":"国产"},{"n":"日本","v":"日本"},{"n":"欧美","v":"欧美"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}]},{"key":"by","name":"排序","value":[{"n":"最新上映","v":"time"},{"n":"超高人气","v":"hits"},{"n":"全网热播","v":"up"},{"n":"高分好评","v":"score"}]}],
        "jilu":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"by","name":"排序","value":[{"n":"最新上映","v":"time"},{"n":"超高人气","v":"hits"},{"n":"全网热播","v":"up"},{"n":"高分好评","v":"score"}]}]
    },
    filter_def:{
        dianying:{cateId:'dianying'},
        lianxuju:{cateId:'lianxuju'},
        zongyi:{cateId:'zongyi'},
        hanguodianying:{cateId:'hanguodianying'},
        dongman:{cateId:'dongman'},
        jilu:{cateId:'jilu'}
    },
    // searchUrl:'/vsearch/-------------.html?wd=**&submit=',
    searchUrl:'/vsearch/**----------fypage---.html',
    searchable:2,
    quickSearch:0,
    headers:{ 'User-Agent':'MOBILE_UA', },
    // class_parse: '.top_nav li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    class_parse: '.nav_list li:gt(0):lt(5);a&&title;a&&href;.*/(.*?).html',
    tab_remove:['VIP线路','app专用'], // VIP线路 需登录会员
    play_parse:true,
    lazy:`js:
        var url = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]).url;
        url.indexOf('http') == -1 ? input = request('https://adys.tv/player/?url=' + url, {}).match(/url":.*?['"](.*?)['"]/)[1] :input = url

    `,
    推荐:'*',
    // 一级:'.vodlist.vodlist_wi li;a&&title;.lazyload&&data-original;.pic_text&&Text;a&&href',
    一级:'.vodlist.vodlist_wi li;a&&title;.lazyload&&data-background-image;.xszxj&&Text;a&&href',
    二级:{
        "title":"h1&&Text;li.data--span:eq(0)&&Text",
        // "img":".lazyload&&data-original",
        "img":".bgi.lazyload&&data-background-image",
        // "desc":";.content_min li:eq(1)&&Text;;.content_min li:eq(2)&&Text;.content_min li:eq(3)&&Text;.data:eq(4)&&Text",
        "desc":"li.data:eq(4)&&Text;;;li.data--span:eq(3)&&Text;li.data--span:eq(2)&&Text",
        // "content":".context.clearfix&&Text",
        "content":".full_text&&span&&Text",
        "tabs":".play_source_tab--i&&a",
        "lists":".content_playlist.list_scroll:eq(#id) li"
    },
    搜索:'.vodlist.clearfix li;*;*;*;*',
}
