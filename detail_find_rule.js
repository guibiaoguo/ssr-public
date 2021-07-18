function detail_rule(rule) {
var d = [];
var html = getResCode();
var arts_selector = rule[0];
var conts_selector = rule[1];
var desc_selector = rule[2];
var pic_selector = rule[3];
var other_selector = rule[4];
var info_selector = rule[5];

putVar("other_selector",other_selector);
putVar("info_selector",info_selector);
var urls=MY_URL.match(/https?:\/\/.*?\//);
var domain =urls[0].substring(0,urls[0].length-1);
var arts = parseDomForArray(html,arts_selector);
var tabs = [];
for (var i in arts) {
    tabs.push(parseDomForHtml(arts[i], 'Text'))
}
var conts = parseDomForArray(html,conts_selector);
var lists =[];
for (var i in conts) {
    lists.push(parseDomForArray(conts[i], 'ul&&li'))
}
d.push({
    title: '共' + conts.length + '条线路\n\n点击查看详情',
    desc: parseDomForHtml(html, desc_selector),
    pic_url: parseDom(html, pic_selector) + '@Referer='+domain,
    url: MY_URL + `@rule=js:let d=[];other_selector=getVar("other_selector");info_selector=getVar("info_selector");let html=getResCode();let otherInfo=parseDomForArray(html,other_selector);for(let i=0;i<otherInfo.length;i++){d.push({title:parseDomForHtml(otherInfo[i],info_selector),col_type:'long_text'})};setResult(d);`,
    col_type: 'movie_1_vertical_pic'
});

function setTabs(tabs, vari) {
        d.push({
            title: '‘‘线路’’',
            url: `@lazyRule=.js:let conf = getVar('折叠');if(conf=='关'){putVar({key:'折叠', value:'开'});}else{putVar({key:'折叠', value:'关'})};refreshPage(false);'toast://切换成功'`,
            col_type: 'text_center_1'
        })
if (getVar('折叠') == '开'||getVar('折叠') == '') {
        var title = '';
        for (var i = 0; i < tabs.length; i++) {
            var url = "@lazyRule=.js:putVar('" + vari + "', '" + i + "');refreshPage(false);'toast://切换成功！'";
            d.push({
                title: tabs[i] + (getVar(vari, '0') == i ? '✅' : ''),
                url: url,
                col_type: 'text_2'
            })
        }
        d.push({
            col_type: 'line_blank'
        })
    }
}
    function setLists(lists, index) {
        d.push({
            title: '‘‘选集’’',
            url: `@lazyRule=.js:let conf = getVar('shsort');if(conf==' - 逆序'){putVar({key:'shsort', value:' - 正序'});}else{putVar({key:'shsort', value:' - 逆序'})};refreshPage(false);'toast://切换排序成功'`,
            col_type: 'text_center_1'
        })
        var list = lists[index];

if (getVar('shsort') == ' - 逆序') {
            list=list.reverse();
        } 
            for (var j = 0; j < list.length; j++) {
                d.push({
                title: parseDomForHtml(list[j], 'a&&Text'),
                url: lazyRule(parseDom(list[j], 'a&&href')),
                col_type: list.length > 3 ? 'flex_button' : 'text_2'
                });
            }
        
    }
setTabs(tabs, MY_URL);
setLists(lists, getVar(MY_URL, '0'));

d.push({title: '<br>', col_type: 'rich_text'});
return d;
}
