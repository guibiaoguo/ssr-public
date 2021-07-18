eval(getCryptoJS());

function aesDecrypt (result,base_lv,asc_key) {

    let tmpiv = CryptoJS.enc.Utf8.parse(base_lv);

    let key = CryptoJS.enc.Utf8.parse(asc_key);

    var b = CryptoJS.AES.decrypt(result, key, {iv: tmpiv,padding:       CryptoJS.pad.Pkcs7});

    return CryptoJS.enc.Utf8.stringify(b);

}

function loadm3u8(jsurls) { 

var jsurl = 0;

for(i=0;i<jsurls.length;i++){

var urls=jsurls[i].match(/https?:\/\/.*?\//);

var domain =urls[0].substring(0,urls[0].length-1);

try{

json1=fetch(jsurls[i],{headers:{"referer":domain}});

if(json1.match(/\((.*)\)/)) {json1=json1.match(/\((.*)\)/)[1];}

//setError(json1);

json1 = JSON.parse(json1);

if(json1.code == 200&&json1.url.search("404.")<0) {

jsurl = json1.url.search("http")==0?json1.url:"https://"+json1.url;

break;

} 

}catch(e){

//jsurl = 0;

continue;

}

}

return jsurl;

}

function postm3u8(purls) { 

var jsurl = 0;

for(i=0;i<purls.length;i++){

var urls=purls[i].url.match(/https?:\/\/.*?\//);

var domain =urls[0].substring(0,urls[0].length-1);

try {

json1=fetch(purls[i].url,{headers:{"referer":domain},body:purls[i].body,method:"post"});

if(purls[i].cryptojs) {

json1=aesDecrypt(json1,purls[i].base_lv,purls[i].asc_key);

}

setError(json1);

json1 = JSON.parse(json1);

if(json1.code == 200) {

jsurl = json1.url.search("url=http")>-1?unescape(json1.url.split("url=")[1]):json1.url.search("http")==0?json1.url:"https://"+json1.url;

}

} catch(e) {

    //jsurl = 0;

    //setError(e);

    continue;

}

if(jsurl != 0) {break;}

}

return jsurl;

}

function loadjs(jsurls) { 

var jsurl = 0;

for(i=0;i<jsurls.length;i++){

setError(jsurls[i]);

var urls=jsurls[i].match(/https?:\/\/.*?\//);

var domain =urls[0].substring(0,urls[0].length-1);

try {

result=fetch(jsurls[i],{headers:{"referer":domain},timeout:20000});

//setError(result);

if(result.match(/alizyw.*/)) {js=result.match(/alizyw.*/)[0];setError(js);jsurl=unescape(js);}

else if(result.match(/&url=.*';/)) {js=result.match(/&url=(.*)&next=';/)[1];jsurl=unescape(js);}

else if(result.match(/url\d* =.*/)){js=result.match(/url\d* =(.*)/)[1];eval("url="+js.replace("window.atob","base64Decode"));jsurl=url;}

else if(result.match(/urls =.*/)){js=result.match(/urls =(.*)/)[1];setError(js);eval("url="+js);jsurl=url.search("http")==0?url:"https:"+url;}

else if(result.match(/url:([\s\S]*?),/)){js=result.match(/url:([\s\S]*?),/)[1];jsurl=eval(js);}

} catch(e) {

    //jsurl = 0;

    //setError(e);

    continue;

}

if(jsurl != 0 && jsurl != "null" && jsurl != null) {break;}

}

return jsurl;

}

function jxqq (jsurl,index) {

//setError(jsurl);

    jurl = escape(jsurl);

js_url = ["https://api.leduotv.com/wp-api/ifr.php?vid=","https://jx.sujx.top/dp/?url=","https://www.ifreefans.com/player/?url=","https://api.68yulecheng.com/dp/?url="];

jsurls=["https://jx.ab33.top/vip/api.php?url=","https://api.qianqi.net/vip/bingdouapi.php?url=","http://jx.lache.me/ccds/api.php?danmu=0&url=","https://www.41478.net/api.php?tp=checkPlay&url=","http://vip.wandhi.com/api.php?url=","https://api.jx.yh0523.cn/api/pgjx-1/api.php?url=","https://jx.52a.ink/api.php?dd=1&tp=link&url=","https://jx.rdhk.net/api.php?dd=1&tp=link&url="];

jsurl = loadjs(js_url.map(w=>w+jurl));

//jsurl=0;

if(jsurl == 0) {

   jsurl = loadm3u8(jsurls.map(w=>w+jurl));

}

purls = [{url:"https://www.xymav.com/p1/api_p1.php",body:"url="+jurl},{url:"https://jiexi8090.laobandq.com/jiexi20210115/api.php",body:"url="+jurl+"&referer="+base64Encode("https://jiexi8090.laobandq.com/jiexi20210115/jx.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://h8jx.ccyjjd.com/h8jx07051/api.php",body:"url="+jurl+"&referer="+base64Encode("https://h8jx.ccyjjd.com/h8jx07051/jiexi.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://jiexiapi.ntryjd.net/pangu/api.php",body:"url="+jurl+"&referer="+base64Encode("https://jiexiapi.ntryjd.net/pangu/apijx.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://m3u8.zh188.net/20210508%60/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.playm3u8.cn/jiexi.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://1717yun.zh188.net/0526/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.1717yun.com/jx/ty.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://ckmov.ccyjjd.com/ckmov/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.ckmov.vip/api.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.ikandie.cn/jiexi/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://jx.mw0.cc/8090/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://jx.668game.cn/fuxing/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://vip.cjys.top/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://jiexi8090.laobandq.com/jiexi2019/api.php",body:"url="+jurl+"&referer="+base64Encode("https://jiexi8090.laobandq.com/jiexi20211/jx.php?url="+jurl)+"&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.kpezp.cn/jx/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.kpezp.cn/jlexi.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"http://api.13tv.top/jiexi/api.php",body:"url="+jurl+"&referer=&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.yemu.xyz/pangu/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.yemu.xyz/v/a.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://jx.668game.cn/fuxing/api.php",body:"url="+jurl+"&referer=&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="}];

//jsurl=0;

if(jsurl==0) {

jsurl=postm3u8(purls);

}

  if(jsurl==0){jsurl = "https://z1.m1907.cn/?jx="+jsurl;}

    return jsurl;

}

function jxyouku (jsurl,index) {

setError(jsurl);

    jurl = escape(jsurl);

js_url = ["https://api.leduotv.com/wp-api/ifr.php?vid=","https://jx.sujx.top/dp/?url=","https://www.ifreefans.com/player/?url=","https://jx.mmkv.cn/jiexi.php?url=","https://api.68yulecheng.com/dp/?url="];

jsurls=["https://jx.ab33.top/vip/api.php?url=","https://api.qianqi.net/vip/bingdouapi.php?url=","http://jx.lache.me/ccds/api.php?danmu=0&url=","https://www.41478.net/api.php?tp=checkPlay&url=","http://vip.wandhi.com/api.php?url=","https://api.jx.yh0523.cn/api/pgjx-1/api.php?url=","https://jx.52a.ink/api.php?dd=1&tp=link&url=","https://jx.rdhk.net/api.php?dd=1&tp=link&url="];

purls = [{url:"https://www.xymav.com/p1/api_p1.php",body:"url="+jurl},{url:"https://jiexi8090.laobandq.com/jiexi20210115/api.php",body:"url="+jurl+"&referer="+base64Encode("https://jiexi8090.laobandq.com/jiexi20210115/jx.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://h8jx.ccyjjd.com/h8jx07051/api.php",body:"url="+jurl+"&referer="+base64Encode("https://h8jx.ccyjjd.com/h8jx07051/jiexi.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://jiexiapi.ntryjd.net/pangu/api.php",body:"url="+jurl+"&referer="+base64Encode("https://jiexiapi.ntryjd.net/pangu/apijx.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://m3u8.zh188.net/20210508%60/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.playm3u8.cn/jiexi.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://1717yun.zh188.net/0526/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.1717yun.com/jx/ty.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://ckmov.ccyjjd.com/ckmov/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.ckmov.vip/api.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.ikandie.cn/jiexi/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://jx.mw0.cc/8090/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://jx.668game.cn/fuxing/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://vip.cjys.top/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://1717yun.zh188.net/0526/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.1717yun.com/jx/ty.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://jiexi8090.laobandq.com/jiexi2019/api.php",body:"url="+jurl+"&referer="+base64Encode("https://jiexi8090.laobandq.com/jiexi20211/jx.php?url="+jurl)+"&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.kpezp.cn/jx/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.kpezp.cn/jlexi.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"http://api.13tv.top/jiexi/api.php",body:"url="+jurl+"&referer=&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.yemu.xyz/pangu/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.yemu.xyz/v/a.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://jx.668game.cn/fuxing/api.php",body:"url="+jurl+"&referer=&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="}];

jsurl=0;

if(jsurl == 0) {

   jsurl = loadjs(js_url.map(w=>w+jurl));

}

if(jsurl == 0) {

jsurl = loadm3u8(jsurls.map(w=>w+jurl));

}

//jsurl=0;

if(jsurl==0) {

jsurl=postm3u8(purls);

}

  if(jsurl==0){jsurl = "https://z1.m1907.cn/?jx="+jsurl;}

    return jsurl;

}

function jxmgtv (jsurl,index) {

//setError(jsurl);

js_url = ["https://jiexi.dplayer.club/jianghu.php?url=","https://titan.mgtv.com.okjx.cc/analysis.php?url=","https://api.leduotv.com/wp-api/ifr.php?vid=","https://jx.sujx.top/dp/?url=","https://www.ifreefans.com/player/?url=","https://jx.mmkv.cn/jiexi.php?url=","https://api.68yulecheng.com/dp/?url="];

jsurls=["https://jx.ab33.top/vip/api.php?url=","https://api.qianqi.net/vip/bingdouapi.php?url=","http://jx.lache.me/ccds/api.php?danmu=0&url=","https://www.41478.net/api.php?tp=checkPlay&url=","http://vip.wandhi.com/api.php?url=","https://api.jx.yh0523.cn/api/pgjx-1/api.php?url=","https://jx.52a.ink/api.php?dd=1&tp=link&url=","https://jx.rdhk.net/api.php?dd=1&tp=link&url="];

    jurl = escape(jsurl);

purls = [{url:"https://jx.618g.com/api.php",base_lv:CryptoJS.MD5("618G618G").toString().substring(0x0,0x10),asc_key:CryptoJS.MD5("618G618G").toString().substring(0x10),cryptojs:true,body:"url="+jurl},{url:"https://660e.com/api.php",base_lv:CryptoJS.MD5("618G618G").toString().substring(0x0,0x10),asc_key:CryptoJS.MD5("618G618G").toString().substring(0x10),cryptojs:true,body:"url="+jurl},{url:"https://playmgtvcache.ccyjjd.com/mgtv20210115%60/api.php",body:"url="+jurl+"&referer="+base64Encode("https://playmgtvcache.ccyjjd.com/play.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.xymav.com/p1/api_p1.php",body:"url="+jurl},{url:"https://jiexi8090.laobandq.com/jiexi20210115/api.php",body:"url="+jurl+"&referer="+base64Encode("https://jiexi8090.laobandq.com/jiexi20210115/jx.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://h8jx.ccyjjd.com/h8jx07051/api.php",body:"url="+jurl+"&referer="+base64Encode("https://h8jx.ccyjjd.com/h8jx07051/jiexi.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://jiexiapi.ntryjd.net/pangu/api.php",body:"url="+jurl+"&referer="+base64Encode("https://jiexiapi.ntryjd.net/pangu/apijx.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://m3u8.zh188.net/20210508%60/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.playm3u8.cn/jiexi.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://1717yun.zh188.net/0526/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.1717yun.com/jx/ty.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://ckmov.ccyjjd.com/ckmov/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.ckmov.vip/api.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.ikandie.cn/jiexi/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://jx.mw0.cc/8090/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://jx.668game.cn/fuxing/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://vip.cjys.top/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://1717yun.zh188.net/0526/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.1717yun.com/jx/ty.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://jiexi8090.laobandq.com/jiexi2019/api.php",body:"url="+jurl+"&referer="+base64Encode("https://jiexi8090.laobandq.com/jiexi20211/jx.php?url="+jurl)+"&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.kpezp.cn/jx/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.kpezp.cn/jlexi.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"http://api.13tv.top/jiexi/api.php",body:"url="+jurl+"&referer=&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.yemu.xyz/pangu/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.yemu.xyz/v/a.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://jx.668game.cn/fuxing/api.php",body:"url="+jurl+"&referer=&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="}];

jsurl=0;

if(jsurl == 0) {

   jsurl = loadjs(js_url.map(w=>w+jurl));

}

if(jsurl==0) {

jsurl=postm3u8(purls);

}

if(jsurl == 0) {

jsurl = loadm3u8(jsurls.map(w=>w+jurl));

}

//jsurl=0;

  if(jsurl==0){jsurl = "https://z1.m1907.cn/?jx="+jsurl;}

    return jsurl;

}

function jxiqiyi (jsurl,index) {

//setError(jsurl);

    jurl = escape(jsurl);

js_url = ["https://api.68yulecheng.com/dp/?url=","https://www.ifreefans.com/player/?url=","https://jx.mmkv.cn/jiexi.php?url=","https://jx.sujx.top/dp/?url=","https://api.leduotv.com/wp-api/ifr.php?vid="];

jsurls=["https://jx.ab33.top/vip/api.php?url=","https://api.qianqi.net/vip/bingdouapi.php?url=","http://jx.lache.me/ccds/api.php?danmu=0&url=","http://vip.wandhi.com/api.php?url=","https://api.jx.yh0523.cn/api/pgjx-1/api.php?url=","https://jx.52a.ink/api.php?dd=1&tp=link&url=","https://jx.rdhk.net/api.php?dd=1&tp=link&url="];

purls = [{url:"https://jx.618g.com/api.php",base_lv:CryptoJS.MD5("618G618G").toString().substring(0x0,0x10),asc_key:CryptoJS.MD5("618G618G").toString().substring(0x10),cryptojs:true,body:"url="+jurl},{url:"https://660e.com/api.php",base_lv:CryptoJS.MD5("618G618G").toString().substring(0x0,0x10),asc_key:CryptoJS.MD5("618G618G").toString().substring(0x10),cryptojs:true,body:"url="+jurl},{url:"https://playmgtvcache.ccyjjd.com/mgtv20210115%60/api.php",body:"url="+jurl+"&referer="+base64Encode("https://playmgtvcache.ccyjjd.com/play.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.xymav.com/p1/api_p1.php",body:"url="+jurl},{url:"https://jiexi8090.laobandq.com/jiexi20210115/api.php",body:"url="+jurl+"&referer="+base64Encode("https://jiexi8090.laobandq.com/jiexi20210115/jx.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://h8jx.ccyjjd.com/h8jx07051/api.php",body:"url="+jurl+"&referer="+base64Encode("https://h8jx.ccyjjd.com/h8jx07051/jiexi.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://jiexiapi.ntryjd.net/pangu/api.php",body:"url="+jurl+"&referer="+base64Encode("https://jiexiapi.ntryjd.net/pangu/apijx.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://m3u8.zh188.net/20210508%60/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.playm3u8.cn/jiexi.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://1717yun.zh188.net/0526/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.1717yun.com/jx/ty.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://ckmov.ccyjjd.com/ckmov/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.ckmov.vip/api.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.ikandie.cn/jiexi/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://jx.mw0.cc/8090/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://jx.668game.cn/fuxing/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://vip.cjys.top/api.php",body:"url="+jurl+"&referer=&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios=1"},{url:"https://1717yun.zh188.net/0526/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.1717yun.com/jx/ty.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://jiexi8090.laobandq.com/jiexi2019/api.php",body:"url="+jurl+"&referer="+base64Encode("https://jiexi8090.laobandq.com/jiexi20211/jx.php?url="+jurl)+"&ref=1&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.kpezp.cn/jx/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.kpezp.cn/jlexi.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"http://api.13tv.top/jiexi/api.php",body:"url="+jurl+"&referer=&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://www.yemu.xyz/pangu/api.php",body:"url="+jurl+"&referer="+base64Encode("https://www.yemu.xyz/v/a.php?url="+jurl)+"&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="},{url:"https://jx.668game.cn/fuxing/api.php",body:"url="+jurl+"&referer=&ref=0&time=1626343068&type=&other="+base64Encode(jurl)+"&ios="}];

jsurl=0;

if(jsurl==0) {

jsurl=postm3u8(purls);

}

if(jsurl == 0) {

   jsurl = loadjs(js_url.map(w=>w+jurl));

}

if(jsurl == 0) {

jsurl = loadm3u8(jsurls.map(w=>w+jurl));

}

//jsurl=0;

  if(jsurl==0){jsurl = "https://z1.m1907.cn/?jx="+jsurl;}

    return jsurl;

}

function getM3u8Url(jsurl,num) {

var jssp = jsurl.split("\/share")[0];

if(jsurl.search("share")>-1){

var json=fetch(jsurl,{});

var curl=json.match("url:.*?'(.*?)'");

var durl = json.split('var main = "');

jsurl=curl != null?jssp+curl[1].split("'")[0]:durl.length>1?jssp+durl[1].split('"')[0]:jsurl;

} else if(jsurl.search(".mp4")>-1){jsurl=jsurl;}

else if(jsurl.search("qq.com")>-1){

   jsurl = jxqq(jsurl,parseInt(num[2])-1);

} else if (jsurl.search("iqiyi.com")>-1) {

   jsurl = jxiqiyi(jsurl,parseInt(num[2])-1);

} else if (jsurl.search("youku.com")>-1) {

   jsurl = jxyouku(jsurl,parseInt(num[2])-1);

}else if (jsurl.search("mgtv.com")>-1) {

   jsurl = jxmgtv(jsurl,parseInt(num[2])-1);

} else { jsurl = jxqq(jsurl,parseInt(num[2])-1);}

return jsurl;

}
