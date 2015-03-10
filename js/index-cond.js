//timeago
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(){var e=a(this),o=r.settings;return isNaN(e.datetime)||(0==o.cutoff||Math.abs(n(e.datetime))<o.cutoff)&&t(this).text(i(e.datetime)),this}function a(e){if(e=t(e),!e.data("timeago")){e.data("timeago",{datetime:r.datetime(e)});var a=t.trim(e.text());r.settings.localeTitle?e.attr("title",e.data("timeago").datetime.toLocaleString()):!(a.length>0)||r.isTime(e)&&e.attr("title")||e.attr("title",a)}return e.data("timeago")}function i(t){return r.inWords(n(t))}function n(t){return(new Date).getTime()-t.getTime()}t.timeago=function(e){return i(e instanceof Date?e:"string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var r=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"yang lalu",suffixFromNow:"Sekarang",inPast:"waktu ini",seconds:"Baru saja",minute:"semenit",minutes:"%d menit",hour:"Sejam",hours:"about %d jam",day:"sehari",days:"%d hari",month:"sebulan",months:"%d bulan",year:"setahun",years:"%d tahun",wordSeparator:" ",numbers:[]}},inWords:function(e){function a(a,n){var r=t.isFunction(a)?a(n,e):a,o=i.numbers&&i.numbers[n]||n;return r.replace(/%d/i,o)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var i=this.settings.strings,n=i.prefixAgo,r=i.suffixAgo;if(this.settings.allowFuture&&0>e&&(n=i.prefixFromNow,r=i.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var o=Math.abs(e)/1e3,s=o/60,u=s/60,m=u/24,l=m/365,d=45>o&&a(i.seconds,Math.round(o))||90>o&&a(i.minute,1)||45>s&&a(i.minutes,Math.round(s))||90>s&&a(i.hour,1)||24>u&&a(i.hours,Math.round(u))||42>u&&a(i.day,1)||30>m&&a(i.days,Math.round(m))||45>m&&a(i.month,1)||365>m&&a(i.months,Math.round(m/30))||1.5>l&&a(i.year,1)||a(i.years,Math.round(l)),f=i.wordSeparator||"";return void 0===i.wordSeparator&&(f=" "),t.trim([n,d,r].join(f))},parse:function(e){var a=t.trim(e);return a=a.replace(/\.\d+/,""),a=a.replace(/-/,"/").replace(/-/,"/"),a=a.replace(/T/," ").replace(/Z/," UTC"),a=a.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),a=a.replace(/([\+\-]\d\d)$/," $100"),new Date(a)},datetime:function(e){var a=t(e).attr(r.isTime(e)?"datetime":"title");return r.parse(a)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var o={init:function(){var a=t.proxy(e,this);a();var i=r.settings;i.refreshMillis>0&&(this._timeagoInterval=setInterval(a,i.refreshMillis))},update:function(a){var i=r.parse(a);t(this).data("timeago",{datetime:i}),r.settings.localeTitle&&t(this).attr("title",i.toLocaleString()),e.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:r.parse(t(this).attr(r.isTime(this)?"datetime":"title"))}),e.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};t.fn.timeago=function(t,e){var a=t?o[t]:o.init;if(!a)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){a.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")});
//recentpost
window.recentposts=(function(){var a=function(p){var d=p||{},i=d.url_blog||"",n=d.numberofposts||5,h=d.id_contain||"#rcposts",e=d.imagesize||40,b=d.snippetsize||100,c=d.loadingClass||"rcloading",m=d.commentstext||"Comments",l=d.firstcmtext||"Comment",f=d.NoCmtext||"No Comments",g=d.MonthNames||["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],k=d.pBlank||"http://2.bp.blogspot.com/-MZ2UNvioO2A/Up-XDjMGhWI/AAAAAAAABuo/7btg1OAL3FQ/s1600/no.png";$(h).addClass(c);var j=i;if(i===""){j=window.location.protocol+"//"+window.location.host}$.ajax({url:j+"/feeds/posts/default?alt=json-in-script&orderby=published&max-results="+n+"",type:"get",dataType:"jsonp",success:function(v){var y,o,w,q,A,D,z,F,x,C,E,s="",B=v.feed.entry;if(B!==undefined){s="<ul class='rcpost'>";for(var u=0;u<B.length;u++){for(var t=0;t<B[u].link.length;t++){if(B[u].link[t].rel=="alternate"){y=B[u].link[t].href;break}}for(var r=0;r<B[u].link.length;r++){if(B[u].link[r].rel=="replies"&&B[u].link[r].type=="text/html"){w=B[u].link[r].title.split(" ")[0];break}}if("content" in B[u]){A=B[u].content.$t}else{if("summary" in B[u]){A=B[u].summary.$t}else{A=""}}if("media$thumbnail" in B[u]){D=B[u].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+e+"-c")}else{D=k}if(w===0){q=' <span class="rccomments">'+f+"</span>"}else{if(w===1){q=' <span class="rccomments">'+w+" "+l+"</span>"}else{q=' <span class="rccomments">'+w+" "+m+"</span>"}}A=A.replace(/<\S[^>]*>/g,"");if(A.length>b){A=A.substring(0,b)+"..."}o=B[u].title.$t;z=B[u].published.$t.substring(0,10),F=z.substring(0,4),x=z.substring(5,7),C=z.substring(8,10),E=g[parseInt(x,10)-1],s+='<li><a class="rcthumbs" href="'+y+'" target="_blank"><img style="width:'+e+"px;height:"+e+'px;display:block" alt="'+o+'"src="'+D+'"/></a><strong><a href="'+y+'" target="_blank">'+o+'</a></strong><span class="date"><span class="dd">'+C+'</span> <span class="dm">'+E+'</span> <span class="dy">'+F+"</span></span>"+q+"<p>"+A+"</p></li>"}s+="</ul>";$(h).html(s).removeClass(c)}else{$(h).html("<span>No result!</span>").removeClass(c)}},error:function(){$(h).html("<strong>Error Loading Feed!</strong>").removeClass(c)}})};return function(b){a(b)}})();
//text-zoom
var min=10; var max=20; function increaseFontSize() {   var p = document.getElementsByClassName('post'); for(i=0;i<p.length;i++) {   if(p[i].style.fontSize) { var s = parseInt(p[i].style.fontSize.replace("px","")); } else {   var s = 17; } if(s!=max) {   s += 1; } p[i].style.fontSize = s+"px"   } } function decreaseFontSize() { var p = document.getElementsByClassName('post'); for(i=0;i<p.length;i++) {   if(p[i].style.fontSize) { var s = parseInt(p[i].style.fontSize.replace("px","")); } else {   var s = 17; } if(s!=min) {   s -= 1; } p[i].style.fontSize = s+"px"   } }
//slider halaman awal
function FeaturedPostSide(a){(function(e){var h={blogURL:"",MaxPost:4,idcontaint:"",ImageSize:100,interval:5000,autoplay:false,loadingClass:"loadingxx",pBlank:"http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.gif",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tagName:false};h=e.extend({},h,a);var g=e(h.idcontaint);var d=h.MaxPost*200;g.html('<div class="sliderx"><ul class="rcentside"></ul></div>');var f=function(w){var q,k,m,u,x,p,t,v,r,l="",s=w.feed.entry;for(var o=0;o<s.length;o++){for(var n=0;n<s[o].link.length;n++){if(s[o].link[n].rel=="alternate"){q=s[o].link[n].href;break}}if("media$thumbnail" in s[o]){u=s[o].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+h.ImageSize+"-c")}else{u=h.pBlank.replace(/\/s[0-9]+(\-c|\/)/,"/s"+h.ImageSize+"$1")}k=s[o].title.$t;r=s[o].published.$t.substring(0,10);m=s[o].author[0].name.$t;x=r.substring(0,4);p=r.substring(5,7);t=r.substring(8,10);v=h.MonthNames[parseInt(p,10)-1];l+='<li><a target="_blank" href="'+q+'"><div class="overlayx"></div><img class="random" src="'+u+'"/><h4>'+k+'</h4></a><div class="label_text"><span class="date"><span class="dd">'+t+'</span> <span class="dm">'+v+'</span> <span class="dy">'+x+'</span></span> <span class="autname">'+m+"</span></div></li>"}e("ul",g).append(l).addClass(h.loadingClass)};var c=function(){e(h.idcontaint+" .nextx").click()};var b=function(){e.get((h.blogURL===""?window.location.protocol+"//"+window.location.host:h.blogURL)+"/feeds/posts/summary"+(h.tagName===false?"":"/-/"+h.tagName)+"?max-results="+h.MaxPost+"&orderby=published&alt=json-in-script",f,"jsonp");setTimeout(function(){e(h.idcontaint+" .prevx").click(function(){e(h.idcontaint+" .sliderx li:first").before(e(h.idcontaint+" .sliderx li:last"));return false});e(h.idcontaint+" .nextx").click(function(){e(h.idcontaint+" .sliderx li:last").after(e(h.idcontaint+" .sliderx li:first"));return false});if(h.autoplay){var i=h.interval;var j=setInterval(c,i);e(h.idcontaint+" .sliderx li:first").before(e(h.idcontaint+" .sliderx li:last"));e(h.idcontaint+" .sliderx").hover(function(){clearInterval(j)},function(){j=setInterval(c,i)})}e("ul",g).removeClass(h.loadingClass)},d)};e(document).ready(b)})(jQuery)};
