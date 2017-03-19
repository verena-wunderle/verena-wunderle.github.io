$(document).ready(function(){window.noconsole={off:!0,error:function(){},group:function(){},groupCollapsed:function(){},groupEnd:function(){},log:function(){}};typeof console!="object"&&(console=noconsole);_toolll=new _Toolll;_toolll.init();window.loadMap=_toolll.ext.googlemap.loadMap});
function _Toolll(){var c=this;c.scrll=$.browser.webkit?$("body"):$("html, body");c.label=$("meta[name=label]").attr("content")*1;if(c.label)_Toolll.prototype.labelmenu=new LabelMenu;_Toolll.prototype.ext=new _Ext;_Toolll.prototype.core=new _Core;_Toolll.prototype.init=function(){this.events();this.proportionate();$(window).resize(function(){c.proportionate()});var a=navigator.userAgent.toLowerCase();c.iphone=a.match(/(iphone|ipod)/);c.ipad=a.match(/(ipad)/);c.items=[];c.domitems=$(".item");$(c.domitems).each(function(b,
a){var d=$(a),f;f=d.attr("rel").replace(RegExp("'","g"),'"');var h={json:JSON.parse(f),dom:d};d.data("item",h);if(d.hasClass("text"))c.linkHover(d);else if(d.hasClass("image")){f=d.find(".inneritem > img");var j=window.devicePixelRatio>1?f.data("px")+"@2x":f.data("px"),l=f.attr("data-iid"),i=f.data("ext");f.attr({src:"/_image/"+l+"_"+j+i})}else d.hasClass("youtube")?d.bind("click",function(){c.ext.youtube.init(d)}):d.hasClass("vimeo")?_toolll.iphone&&window.devicePixelRatio<2?d.find(".inneritem > img").remove():
_toolll.ipad||_toolll.iphone?d.find(".inneritem > img").mouseover(function(){$(this).css({display:"none"})}):d.find(".inneritem > .custom-load").bind("click",function(){c.ext.vimeo.init(h)}):d.hasClass("gmap")&&c.ext.googlemap.init(d);c.items.push(h)});c.core.zoom.init(c.items);c.label&&this.labelmenu.init();if(window.location.hash)setTimeout(function(){var b=$(window.location.hash);b.length&&c.scrll.animate({scrollTop:b.offset().top-15},200,"",function(){})},100),window.onhashchange=function(){if(window.location.hash==
""||window.location.hash=="#")return!1}};_Toolll.prototype.proportionate=function(a){c.setBlockHeight(a)};_Toolll.prototype.setBlockHeight=function(a){a?(c.blocksize=a,c.oblocksize=$("#toolll").attr("rel")*1):$("#toolll").attr("rel")?c.blocksize=$("#toolll").attr("rel")*1:(a=$(window).width(),c.blocksize=a<524?262:a<1E3?524:1E3);c.fontsize=c.blocksize*100/1E3;c.roundedleftmargin=Math.round(($(window).width()-c.blocksize)/2);if(c.roundedleftmargin<0)c.roundedleftmargin=0;$("#render").text($("#render").text()+
"body{\t\t\t\tbackground-image:"+$("body").css("background-image").replace("_1","_0")+";\t\t\t\tfont-size: "+c.fontsize+"%;\t\t\t}");a=$("#inner").css("padding-bottom").replace(/px/,"");$("#inner").css({minHeight:$(window).innerHeight()-a});$("#inner, #footer").width(c.blocksize)};_Toolll.prototype.imageRes=function(){var a=typeof Toolll=="undefined"?"":"_0";$("#items > .image > .inneritem > img").each(function(){var b=dom.find(".inneritem > img"),a=window.devicePixelRatio>1?b.data("px")+"@2x":b.data("px"),
c=b.attr("data-iid"),f=b.data("ext");b.attr({src:"/_image/"+c+"_"+a+f})});$("#header > .image > .inneritem > img").each(function(){var b=$(this).attr("src").replace(/_.*[0-9]/,"_0");$(this).attr({src:b})});$("#items > .image > .inneritem > img").each(function(){$(this).data("px");$(this).data("iid");var b=$(this).attr("src").replace(/_.*[0-9]/,a);$(this).attr({src:b})});$("#footer > .image > .inneritem > img").each(function(){var b=$(this).attr("src").replace(/_.*[0-9]/,"_0");$(this).attr({src:b})})};
_Toolll.prototype.events=function(){window.onpopstate=c.changeState};_Toolll.prototype.changeState=function(a){(a=a.state)&&a.item&&c.core.zoom.zoom($("#"+a.item).data("item"))};_Toolll.prototype.linkHover=function(a){var b=noconsole;b.groupCollapsed("_Toolll.linkHover()");if(!a)return!1;a=a[0].tagName.match(/^a/i)?a:a.find("a");$(a).each(function(a,d){var f=!1;$(this).attr("rel")&&(f="{"+$(this).attr("rel").replace(/\'/g,'"').replace(/(\{|\})/g,"")+"}",f=JSON.parse(f));b.log("HOVER STYLES",f);var h=
{};if($(this).attr("class")&&$(this).attr("class").match(/_\d*/)){var j=$(this).attr("class").match(/_\d*/)[0];b.log("cn",j);var l=userdata.classes[j]}$.each(f,function(a){var c=a.replace(/([A-Z])/g,function(b){return"-"+b.toLowerCase()}),c=RegExp(c+":"),e=$(d).attr("style")&&$(d).attr("style").match()?!0:!1,f=$(d).css(a);b.log("keypat","-"+c+"-");b.log("$(a).attr('style')",$(d).attr("style"));b.log("inlinekeyisset",e);b.log("style",f);f&&e&&(h[a]=f);l&&l.css[a]&&(h[a]=l.css[a]);h[a]||(h[a]="")});
b.log("NON-HOVER STYLES",h);$(this).data("styles",h).data("hover",f).click(function(){setTimeout(function(){var b=$(window.location.hash);b.length&&c.scrll.animate({scrollTop:b.offset().top-15})},100)}).hover(function(){if($(this).data("hover")){var b=$(this).data("hover");if(b.color&&b.color.match(/[0-9]{0,35}--/)){var a=b.color.match(/([0-9]{0,35})--/)[1];$.each(userdata.swatches,function(c,e){if(e.swatch_id==a)b.color="rgba("+e.color+")"})}b.backgroundColor&&b.backgroundColor.match(/[0-9]{0,35}--/)&&
(a=b.backgroundColor.match(/([0-9]{0,35})--/)[1],$.each(userdata.swatches,function(c,e){if(e.swatch_id==a)b.backgroundColor="rgba("+e.color+")"}));$(this).css(b)}if($(this).attr("class")&&$(this).attr("class").match(/_[0-9]{0,35}/)){var c=userdata.classes[$(this).attr("class").match(/_[0-9]{0,35}/)];c.class_hover&&($(this).data("nonhoverclass",$(this).attr("class").match(/_[0-9]{0,35}/)),$(this).data("hoverclass",c.class_hover),$(this).attr("class").replace(/_[0-9]{0,35}/,""),$(this).addClass("_"+
c.class_hover))}},function(){$(this).data("styles")&&$(this).css($(this).data("styles"));$(this).data("nonhoverclass")&&$(this).removeClass("_"+$(this).data("hoverclass"))})});b.groupEnd()}};function _Ext(){_Ext.prototype.youtube=new _YouTube;_Ext.prototype.vimeo=new _Vimeo;_Ext.prototype.googlemap=new _GoogleMap};function _ItemFocus(){var c=this;c.hoovered=!1;_ItemFocus.prototype.prepare=function(){c.focalcurtain=$("<div/>",{css:{width:"100%",height:"100%",position:"fixed",zIndex:0,background:"rgb(120,120,120)",opacity:0,left:0,top:0}});c.toolll=$("#toolll");c.focaltoolll=c.toolll.clone();c.focaltoolll.removeAttr("id").find("*").removeAttr("id");c.toolll.before(c.focaltoolll.css({opacity:0,position:"absolute !important"}),c.focalcurtain)};_ItemFocus.prototype.init=function(a){a.data("oz",a.css("z-index")*
1);a.mouseenter(c.start);a.mouseleave(c.stop)};_ItemFocus.prototype.destroyForEditor=function(){c.focalcurtain.remove();c.focaltoolll.remove()};_ItemFocus.prototype.destroy=function(a){a.unbind("mouseenter",c.start);a.unbind("mouseleave",c.stop)};_ItemFocus.prototype.start=function(){clearTimeout(c.endfocus);if(c.item){if(!c.hoovered){c.hoovered=!0;c.item.removeClass("hasfocus");c.item=$(this);var a=c.item.data().json;c.focalcurtain.css({background:"rgba("+a.zoom.m_focus+")"});c.item.addClass("hasfocus");
c.focaltoolll.css({opacity:1});c.toolll.addClass("focussed");c.focalcurtain.css({zIndex:1}).stop().animate({opacity:0.6},200);c.item=!1}}else{var b=$(this);c.startfocus=setTimeout(function(){if(!c.hoovered){clearTimeout(c.endfocus);c.hoovered=!0;c.item&&c.item.removeClass("hasfocus");c.item=b;var a=c.item.data().json;c.focalcurtain.css({background:"rgba("+a.zoom.m_focus+")"});c.item.addClass("hasfocus");c.focaltoolll.css({opacity:1});c.toolll.addClass("focussed");c.focalcurtain.css({zIndex:1}).stop().animate({opacity:0.6},
800);c.item=!1}},200)}};_ItemFocus.prototype.stop=function(){clearTimeout(c.startfocus);c.item=$(this);c.hoovered=!0;c.hoovered=!1;c.endfocus=setTimeout(function(){c.focalcurtain.stop().animate({opacity:0},300,"",function(){c.item.removeClass("hasfocus");c.focaltoolll.css({opacity:0});c.toolll.removeClass("focussed");c.focalcurtain.css({zIndex:0});c.item=!1})},200)}};function _Core(){_Core.prototype.zoom=new _Zoom}
function _Zoom(){var c=this,a=noconsole;_Zoom.prototype.init=function(b){c.csszoom="-webkit-"+Modernizr.prefixed("transition");(_toolll.iphone||_toolll.ipad)&&$("#render").text($("#render").text()+".item{backface-visibility: hidden;}");$.each(userdata.zoom,function(a,d){$.each(d.items,function(a,e){$.each(b,function(b,l){if(e==l.json.item_id){if(!d.itemobjects)d.itemobjects=[];d.itemobjects[a]=l.dom;l.dom.hammer({}).off("tap").on("tap",function(b){b.preventDefault();c.zoom(l)}).on("doubletap",function(b){b.preventDefault()}).on("transform",
function(b){b.originalEvent.preventDefault();!c.curr&&b.scale>1.1&&c.zoom(l)});l.dom.data("item").zoom=d;l.zoom=d;c.csszoom&&l.dom.addClass("csszoom")}})})})};_Zoom.prototype.zoom=function(b,e){b&&typeof b.target!="undefined"&&(b=$(b.target).hasClass("item")?$(b.target).data("item"):$(b.target).parents(".item").data("item"));a.log("_Zoom.zoom");if(c.curr){a.log("out");var d=c.curr,f=d.item.dom,h=$("meta[name*=viewport]").attr("content")+" user-scalable=1";$("head meta[name=viewport]").remove();$("head").prepend('<meta name="viewport" content="'+
h+'" />');if(c.csszoom)f.css({width:d.ow,height:d.oh,left:d.ol,top:d.ot,fontSize:j}),setTimeout(function(){f.css({fontSize:"100%"})},10),setTimeout(function(){f.css({zIndex:d.oz,overflow:""});e&&c.zoom(b)},d.ms_out),d.item.dom.hasClass("image")&&setTimeout(function(){if(typeof Toolll=="undefined"){var b=d.item.dom.find("img");b.attr("src",b.attr("src").replace(/_0/,c.osrc))}},c.curr.ms_out);else{d.item.dom.stop();var j;d.item.dom.animate({width:d.ow,height:d.oh,left:d.ol,top:d.ot,fontSize:"100%"},
90,"",function(){$(this).css({zIndex:d.oz,overflow:""});e&&c.zoom(b);if(d.item.dom.hasClass("image")&&typeof Toolll=="undefined"){var a=d.item.dom.find("img");a.attr("src",a.attr("src").replace(/_0/,c.osrc))}})}c.curr=!1;e||c.end(d)}else if(!c.curr){a.log("in");f=!b||b.target?$(this):b.dom;c.definecurr(b);if(c.curr.bg&&!c.bgcurtain)c.bgcurtain=$("<div/>",{id:"zoom_curtain",css:{position:"fixed",opacity:0,top:0,left:0,width:"100%",height:"100%",background:c.curr.bg}}),c.bgcurtain.css(c.csszoom,"opacity "+
c.curr.ms_in*2+"ms ease-out"),c.curr.item.dom.before(c.bgcurtain);c.csszoom?(c.bgcurtain&&(c.bgcurtain.unbind("click",c.end),setTimeout(function(){c.bgcurtain.css({zIndex:c.curr.z-1}).css({opacity:1}).bind("click",c.end)},c.curr.ms_in*1+10)),f.css(c.csszoom,"all "+c.curr.ms_in*1+"ms ease-in-out, z-index 0s"),$("body").hammer({}).on("drag",function(b){b.preventDefault();b.originalEvent.preventDefault();b.angle<200&&b.angle>160?c.event_prev():b.angle<20&&b.angle>340&&c.event_next()}).on("transform",
function(b){b.preventDefault();b.originalEvent.preventDefault();b.scale<1&&c.end()}).on("swipe",function(b){b.preventDefault();b.originalEvent.preventDefault();b.angle<200&&b.angle>160?c.event_prev():b.angle<20&&b.angle>340&&c.event_next()}),f.css({zIndex:c.curr.z,overflow:"visible !important"}).css({width:c.curr.destination.w,height:c.curr.destination.h,left:c.curr.destination.l,top:c.curr.destination.t,fontSize:c.curr.destination.f}),f.hasClass("image")&&setTimeout(function(){if(typeof Toolll==
"undefined"){var b=c.curr.item.dom.find(".inneritem > img");c.osrc=b.attr("src").match(/_.*[0-9]/);window.devicePixelRatio>1?b.data("px"):b.data("px");var a=b.attr("data-iid"),e=b.data("ext");b.attr({src:"/_image/"+a+"_0"+e})}},c.curr.ms_in*1+50)):(e||f.stop(),c.curr.bg&&c.bgcurtain.css({zIndex:c.curr.z-1}).click(c.end).animate({opacity:1},220,"",function(){}),f.css({zIndex:c.curr.z,overflow:"visible !important"}).animate({width:c.curr.destination.w,height:c.curr.destination.h,left:c.curr.destination.l,
top:c.curr.destination.t,fontSize:c.curr.destination.f},180,"",function(){if(f.hasClass("image")&&typeof Toolll=="undefined"){var b=c.curr.item.dom.find(".inneritem > img");c.osrc=b.attr("src").match(/_.*[0-9]/);window.devicePixelRatio>1?b.data("px"):b.data("px");var a=b.attr("data-iid"),e=b.data("ext");b.attr({src:"/_image/"+a+"_0"+e})}}))}};_Zoom.prototype.end=function(b){a.log("_Zoom.end");b=c.curr||b;c.curr?c.zoom():(c.bgcurtain&&(c.csszoom?(c.bgcurtain.css(c.csszoom,"opacity "+b.ms_out*2+"ms ease-out").css({opacity:0}),
setTimeout(function(){c.bgcurtain.remove();delete c.bgcurtain;var b=$("meta[name*=viewport]").attr("content")+" user-scalable=0";$("head meta[name=viewport]").remove();$("head").prepend('<meta name="viewport" content="'+b+'" />')},b.ms_out*2)):c.bgcurtain.animate({opacity:0},200,"",function(){c.bgcurtain.remove();delete c.bgcurtain})),c.zoomnav&&(c.csszoom?(c.zoomnav.css({marginBottom:-50}),setTimeout(function(){c.zoomnav.remove();delete c.zoomnav},150)):c.zoomnav.animate({marginBottom:-50},100,"",
function(){c.zoomnav.remove();delete c.zoomnav})),$(document).off("swipe").off("transform").off("drag"))};_Zoom.prototype.definecurr=function(b){var a=b.dom,d=b.zoom,f;if(d.items.length)f=d.itemobjects,!c.zoomnav&&d.itemobjects.length>1&&setTimeout(function(){c.nav()},d.ms_in*1+10);var h=d.bg?"rgba("+d.bg+")":"rgba(0,0,0,0.5)",j={};j.item=b;j.w=a.width();j.ow=a.css("width");j.h=a.height();j.oh=a.css("height");j.t=a.offset().top;j.ot=a.css("top");j.l=a.position().left;j.ol=a.css("left");j.z=9999999;
j.oz=a.css("z-index");j.gang=f;j.bg=h;j.bottomz=99999;j.ms_in=d.ms_in||180;j.ms_out=d.ms_out||180;win_w=$(window).width();win_h=$(window).height();b=$("#items").css("top").replace(/px|\ /,"")*1||0;a=$("#items").css("margin-top").replace(/px|\ /,"")*1||0;f=_toolll.scrll.scrollTop();h={};d=d.margin;if(j.w>j.h)h.w=win_w-d,h.h=j.h*h.w/j.w;if(!h.h||h.h>win_h-d)h.h=win_h-d,h.w=j.w*h.h/j.h;if(h.w>win_w-d)h.w=win_w-d,h.h=j.h*h.w/j.w;if(h.h>win_h-d)alert("4th fitting attempt!"),h.h=win_h-50,h.w=j.w*h.h/j.h;
h.l=(win_w-h.w)/2-_toolll.roundedleftmargin;h.t=-b-a+(win_h-h.h)/2+f;h.f=100*h.w/j.w+"%";j.destination=h;c.curr=j};_Zoom.prototype.nav=function(){c.zoomnav=$("<div/>",{id:"zoomnav",css:{marginBottom:-50}}).css(c.csszoom,"margin-bottom 250ms ease-out").bind("selectstart",!1).append($("<div/>",{"class":"chrome"}).append($("<div/>",{"class":"prev",html:$("<div/>"),mousedown:function(){c.event_prev($(this))}}),$("<div/>",{"class":"next",html:$("<div/>"),mousedown:function(){c.event_next($(this))}})));
$("#uai").append(c.zoomnav);c.csszoom?setTimeout(function(){c.zoomnav.css({marginBottom:0})},80):c.zoomnav.animate({marginBottom:0},200)};_Zoom.prototype.event_next=function(){var b;$.each(c.curr.gang,function(e,d){var f=d.data("item"),h=f.json;if(b)return a.log("1"),c.zoom(f,!0),!1;else if(e+1==c.curr.gang.length)return a.log("2",e+"//"+c.curr.gang.length),c.zoom(c.curr.gang[0].data("item"),!0),!1;else h.item_id==c.curr.item.json.item_id?(a.log("3"),b=!0):a.log("4")})};_Zoom.prototype.event_prev=
function(){var b;$.each(c.curr.gang,function(a,d){var f=d.data("item");if(f.json.item_id==c.curr.item.json.item_id)return b?c.zoom(b,!0):c.zoom(c.curr.gang[c.curr.gang.length-1].data("item"),!0),!1;b=f})}};window.onYouTubePlayerReady=function(c){console.log("onYouTubePlayerReady"+c);var a=$("#"+c).parents(".item:first").data("yt");console.log(a);a.initPlayer(c)};
function _YouTube(){_YouTube.prototype.init=function(c){var a=c.attr("rel");c.unbind("click");if(navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/)){var c=$("#ytelement_"+a).parent(),b=$("#ytelement_"+a).attr("rel");c.append($("<iframe/>").attr({src:"http://www.youtube.com/embed/"+b+"?autoplay=1",width:"100%",height:"100%",frameborder:"0"}));b=c.children(".preview").eq(0);c=c.children(".yt-play").eq(0);b.hide();c.hide()}else{c=new _YTPlayer;c.ytid=$("#ytelement_"+a).attr("rel");c.item=
$("#ytelement_"+a).parents(".item:first");c.item.data("yt",c);var e={rel:0,allowScriptAccess:"always",autoplay:1,showsearch:0,showinfo:0},d={id:"yt"+a};typeof swfobject=="undefined"&&$.getScript("https://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",function(){swfobject.embedSWF("http://www.youtube.com/apiplayer?&enablejsapi=1&playerapiid=yt"+a,"ytelement_"+a,"480","295","8",null,null,e,d)})}}}
function _YTPlayer(){var c=this;this.ytid=this.mainplaybutton=this.preview=this.controller=this.player=this.item=null;_YTPlayer.prototype.initPlayer=function(a){c.player=$("#"+a)[0];c.item_id=c.item.attr("rel");c.placeholder=c.item.children(".inneritem").children(".preview").eq(0);c.mainplaybutton=c.item.children(".inneritem").children(".preplay").eq(0);c.placeholder.hide();c.mainplaybutton.hide().click(function(){c.controller.playpauze.click();c.mainplaybutton.hide();c.mainplaybuttonpauze=!1;c.controller.element.fadeIn(200)});
c.insertControls();c.item.hover(function(){c.mainplaybuttonpauze||c.controller.element.fadeIn(200)},function(){c.controller.element.fadeOut(200);if(c.player.getPlayerState()==2)c.mainplaybuttonpauze=!0,c.mainplaybutton.show()});console.log(a+" / "+c.ytid);console.log(c);setInterval(c.updatePlayerInfo,250);c.updatePlayerInfo();c.player.addEventListener("onStateChange","onPlayerStateChange");c.player.addEventListener("onError","onPlayerError");c.player.cueVideoById(c.ytid);c.playVideo(c.player)};_YTPlayer.prototype.insertControls=
function(){c.controller={element:$("<div/>",{"class":"ytcntrl controller"}),rew:$("<div/>",{"class":"ytcntrl rew"}),playpauze:$("<div/>",{"class":"ytcntrl playpause"}),ffwd:$("<div/>",{"class":"ytcntrl ffwd"}),timetotal:$("<div/>",{"class":"ytcntrl timetotal"}),timeleft:$("<div/>",{"class":"ytcntrl timeleft"}),progress:$("<div/>",{"class":"ytcntrl progress"})};c.controller.element.append($("<div/>",{"class":"main"}).append(c.controller.rew,c.controller.playpauze,c.controller.ffwd),$("<div/>",{"class":"progressbar"}).append(c.controller.progress),
c.controller.timetotal,c.controller.timeleft);c.item.append(c.controller.element);c.controllerEvents()};_YTPlayer.prototype.controllerEvents=function(){c.controller.rew.click(function(){c.player.seekTo(c.player.getCurrentTime()-5)});c.controller.playpauze.click(function(){$(this).hasClass("paused")?(console.log($(this).parents(".item:first").data("yt").item_id),c.playVideo($(this).parents(".item:first").data("yt").player),$(this).removeClass("paused")):(console.log("play_press_paused"),$(this).parents(".item:first").data("yt").pauseVideo($(this).parents(".item:first").data("yt").player),
$(this).addClass("paused"))});c.controller.ffwd.click(function(){c.player.seekTo(c.player.getCurrentTime()+5)})};_YTPlayer.prototype.onPlayerError=function(a){alert("An error occured of type:"+a)};_YTPlayer.prototype.onPlayerStateChange=function(a){updateHTML("playerState",a)};_YTPlayer.prototype.updateHTML=function(a,b){document.getElementById(elmId).innerHTML=b};_YTPlayer.prototype.updatePlayerInfo=function(){c.player&&c.player.getDuration&&(c.controller.timetotal.text(c.sectomin(Math.round(c.player.getDuration()))),
c.controller.timeleft.text("-"+c.sectomin(Math.round(c.player.getDuration()-c.player.getCurrentTime()))),c.controller.progress.width(c.player.getCurrentTime()*100/c.player.getDuration()+"%"))};_YTPlayer.prototype.setVideoVolume=function(){var a=parseInt(document.getElementById("volumeSetting").value);isNaN(a)||a<0||a>100?alert("Please enter a valid volume between 0 and 100."):c.player&&c.player.setVolume(a)};_YTPlayer.prototype.playVideo=function(a){c.player&&a.playVideo()};_YTPlayer.prototype.pauseVideo=
function(a){c.player&&a.pauseVideo()};_YTPlayer.prototype.muteVideo=function(){c.player&&c.player.mute()};_YTPlayer.prototype.unMuteVideo=function(){c.player&&c.player.unMute()};_YTPlayer.prototype.sectomin=function(a){var b=a%3600,a=Math.floor(b/60),b=Math.ceil(b%60),a=a.toString().length<2?"0"+a:a,b=b.toString().length<2?"0"+b:b;return a+":"+b}};var glbll;
function _Vimeo(){var c=noconsole;_Vimeo.prototype.init=function(a){c.log("Vimeo.init()");var b=a.json,e=a.dom,d=e.children(".inneritem"),b=b.item_id,a=d.children(".custom-load:first"),f=d.children("img:first"),h=$("#vmelement_"+b),d=h.attr("rel");a.hide();f.hide();if(!_toolll.iphone&&!_toolll.ipad||!h.find("iframe").length){var f=JSON.stringify({api:"1",player_id:"vimeo_"+b,title:"0",byline:"0",portrait:"0"}).replace(/(\{|\}|\")/g,"").replace(/:/g,"=").replace(/,/g,"&"),j=$("<iframe/>").attr({id:"vimeo_"+b,
src:"http://player.vimeo.com/video/"+d+"?"+f,width:"100%",height:"100%",frameborder:"0"});$f(j[0]).addEvent("ready",function(b){c.log("READY");document.getElementById(b)||h.append(j);var a=document.getElementById(b).parentNode.parentNode,d=$f(b);a.querySelector(".console .output");e.data("floop",d);e.data("player_id",b);d.addEvent("finish",function(){c.log("froogaloop.finish");e.mousedown();d.api("getDuration",function(){});var b=h.attr("data-next");b&&(c.log("up next",b),$("#"+b).find(".inneritem > .custom-load").click())});
d.api("play")});h.append(j);a.unbind("click")}c.groupEnd()}};function _GoogleMap(){var c=this;_GoogleMap.prototype.init=function(a){item=$(a);if(typeof google=="undefined")if(c.callbackitem){if(!c.callbackwaiting)c.callbackwaiting=[];c.callbackwaiting.push(item[0])}else c.callbackitem=item,$.getScript("http://maps.google.com/maps/api/js?sensor=true&callback=loadMap");else c.loadMap(item)};_GoogleMap.prototype.loadMap=function(a){if(c.callbackitem)a=c.callbackitem,delete c.callbackitem;if(!a)return alert("no item"),!1;var b=a.children(".inneritem").children("div");
a.data("item").json.gmap?b=a.data("item").json.gmap:(b=b.attr("rel").replace(/\'/g,'"'),b=JSON.parse(b));new google.maps.Geocoder;var e=new google.maps.LatLng(b.lat,b.lng),d={zoom:b.zoom,mapTypeControl:!1,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},streetViewControl:!1,center:e,mapTypeId:b.type},f=new google.maps.Map(a.find(".inneritem")[0],d),d=new google.maps.Marker({position:e,draggable:!0,map:f,icon:"/user/_style/_image/PinDown.png",title:"Hello World!"}),h=new google.maps.InfoWindow({content:"Hello"});
google.maps.event.addListener(d,"click",function(){h.open(f,this)});d.click=function(){alert("hiii")};b.heading&&b.pitch&&(b={addressControl:!1,enableCloseButton:!0,position:e,pov:{heading:b.heading,pitch:b.pitch,zoom:1}},b=new google.maps.StreetViewPanorama(a.find(".inneritem")[0],b),f.setStreetView(b));a.css({display:"none"});a.css({display:"block"});a.data("gmap",f);if(c.callbackwaiting)for(;c.callbackwaiting.length>0;)a=c.callbackwaiting.splice(0,1),c.loadMap($(a[0]))}};var uai;$(document).ready(function(){typeof _Toolll=="undefined"&&!$("#label").length&&(labelmenu=new LabelMenu,labelmenu.init())});
function LabelMenu(){var c=this;LabelMenu.prototype.init=function(){typeof Uai!="undefined"&&typeof uai!="object"&&(uai=new Uai);$("*").not("input").onselectstart=function(){return!1};this.insert();typeof Toolll=="undefined"&&$(document).mousedown(function(){uai.dialogue.dialoguehover||(uai.dialogue.stopLast(),uai.dialogue.instances.length||c.slideOutOfView())})};LabelMenu.prototype.insert=function(){var a=$("<div/>",{id:"labelmenu","class":"dialogue labelmenu"}).append($("<div/>",{id:"label","class":"label"}),
$("<div/>",{"class":"dialogueinner"}).append($("<div/>",{"class":"tabcontainer"}).append(this.content().addClass("active")),$("<div/>",{"class":"subdialoguecontainer"}))).mousedown(function(){uai.dialogue.dialoguehover=!0;c.slideInToView()}).mousemove(function(){uai.dialogue.dialoguehover=!0;c.slideInToView()}).hover(function(){uai.dialogue.dialoguehover=!0;c.slideInToView()},function(){uai.dialogue.dialoguehover=!1;c.slideOutOfView()});$("#uai").length?$("#uai").append(a):$("body").append(a);var b=
$("#label_name").width();c.labelwidth=b<185?185:b;a.css({width:c.labelwidth,marginRight:-c.labelwidth-70,display:"block"}).animate({marginRight:-c.labelwidth-20},300)};LabelMenu.prototype.slideInToView=function(){clearTimeout(c.labeltimer);c.labeltimer=setTimeout(function(){c.slideindone=!1;$("#label").css({left:-21});$("#labelmenu").css({right:0});$("#labelmenu").stop().animate({marginRight:-2},300,"easeOutQuad",function(){c.slideindone=!0})},50)};LabelMenu.prototype.slideOutOfView=function(){function a(){c.slideoutdone=
!1;$("#labelmenu").stop().animate({marginRight:-c.labelwidth-20},300,"easeOutQuad",function(){$("#label").css({left:-31});$("#labelmenu").css({right:-10});c.slideoutdone=!0})}clearTimeout(c.labeltimer);if(!$("#labelmenu").find(".blockedtab").length&&!$("#login_message").length)c.slideindone?c.labeltimer=setTimeout(function(){a()},300):a()};LabelMenu.prototype.content=function(){return typeof userdata!="undefined"&&userdata.account?this.knownUser():this.unKnownUser()};LabelMenu.prototype.knownUser=
function(){return $("<div/>",{"class":"tab"}).append($("<a/>",{href:"http://toolll.com"}).append($("<img/>",{src:"/_p_labelmenu/toolll_medium.png",css:{marginLeft:-12,marginTop:-15}})),$("<p/>",{text:"Signed in as:",css:{fontSize:9,marginBottom:3}}),$("<div/>",{"class":"inputtitle m",text:userdata.account.full_name,id:"label_name"}),uai.styl.space("s"),uai.styl.devision(),uai.input.button({label:"Account",classname:"inline",dialogue:!0,fnctn:function(){var a=$(this);a.data("uai").spinner.on();console.log("toolll:");
console.log(toolll);typeof toolll.account!="undefined"?toolll.account.init():(uai.account=new Account,uai.account.init());a.data("uai").spinner.off()}}),uai.input.button({classname:"inline last",label:"Help!",fnctn:function(){window.open("http://support.toolll.com/","open_window")}}),uai.input.button({label:"Sign Out",fnctn:function(){$.post("/_u_account/u.signout.php",function(){window.location.reload()})}}))};LabelMenu.prototype.unKnownUser=function(){return $("<div/>",{"class":"tab"}).append($("<a/>",
{href:"http://toolll.com"}).append($("<img/>",{src:"/_p_labelmenu/toolll_medium.png",css:{marginLeft:-12,marginTop:-15}})),uai.styl.space("m"),uai.input.button({label:"Sign In",id:"signin_button",dialogue:!0,fnctn:function(){uai.dialogue.insert({subdialogue:$(this),onclose:function(){uai.signin=!1},tabs:{tabcontent:c.signin(),active:!0}})}}))};LabelMenu.prototype.signin=function(){var a;a=$("<div/>",{"class":"tab"}).append($("<div/>",{id:"login_message"}),uai.input.text({placeholder:"Email addressss",
group:"login",width:190,name:"usr_email",classname:"large",autofocus:!0,id:"usr_email",fnctn:function(){},enter:function(){$("#signin").click()}}),uai.input.text({placeholder:"Password",password:!0,type:"password",group:!0,width:190,classname:"large",name:"pwd",id:"pwd",enter:function(){$("#signin").click()}}),uai.input.checkbox({id:"remember",label:"remember me",name:"remember",classname:"inline"}),uai.input.button({label:"Sign In",id:"signin",classname:"sumbit",fnctn:function(){var b=$(this),a=
$("#usr_email").val(),c=$("#pwd").val(),f=$("#remember")[0].checked;if(!$.browser.webkit)return alert("For now, please use the Safari or Google Chrome\nweb-browser when editing with Toolll.\n\nThanks!"),!1;a&&c&&(b.data("uai").spinner.on(),$.post("/_u_account/u.signin.php",{usr_email:a,pwd:c,remember:f,doLogin:"Login"},function(a){$("#login_message").text(a.replace(/\+/g," "));b.data("uai").spinner.off();a==="Thank you"?$.getJSON("/_p/p.JSON.php",{load:!0,labelmenu:!0},function(b){userdata=b;uai=
new Uai;$("#labelmenu").remove();labelmenu=new LabelMenu;labelmenu.init();$("#labelmenu").mouseenter()}):a==="Thank you "&&setTimeout(function(){window.location.reload()},900)}))}}));$.post("/_u_account/u.signin.php",{allreadylogedin:"check"},function(b){$("#login_message").text(b.replace(/\+/g," "))});return a};LabelMenu.prototype.browserCheck=function(a){a=a?a:{mozilla:!0,webkit:!0};return $.browser.webkit&&a.webkit?$.browser.version.substr(0,3)*1<533?(c.browserUpgrade(),!1):!0:$.browser.mozilla&&
a.mozilla?$.browser.version.substr(0,3)*1<1.9?(c.browserUpgrade(),!1):!0:(c.browserUpgrade(),!1)};LabelMenu.prototype.browserUpgrade=function(){$("body").append($("<div/>",{"class":"browser_upgrade"}).append($("<div/>",{"class":"fakedialogue"}).append($("<div/>").append($("<p>",{html:"We need a modern HTML5 browser to run the editor side of toolll."}),$("<p>",{html:"Please do us, the web and yourself the favour of switching to a decent browser and come right in!"})),$("<a/>",{"class":"chrome",href:"http://www.google.com/chrome/"}),
$("<a/>",{"class":"safari",href:"http://www.apple.com/safari/"}))))}}
$.extend($.easing,{def:"easeOutQuad",swing:function(c,a,b,e,d){return $.easing[$.easing.def](c,a,b,e,d)},easeInQuad:function(c,a,b,e,d){return e*(a/=d)*a+b},easeOutQuad:function(c,a,b,e,d){return-e*(a/=d)*(a-2)+b},easeInOutQuad:function(c,a,b,e,d){return(a/=d/2)<1?e/2*a*a+b:-e/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,e,d){return e*(a/=d)*a*a+b},easeOutCubic:function(c,a,b,e,d){return e*((a=a/d-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,e,d){return(a/=d/2)<1?e/2*a*a*a+b:e/2*((a-=2)*a*a+2)+b},
easeInQuart:function(c,a,b,e,d){return e*(a/=d)*a*a*a+b},easeOutQuart:function(c,a,b,e,d){return-e*((a=a/d-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,e,d){return(a/=d/2)<1?e/2*a*a*a*a+b:-e/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,e,d){return e*(a/=d)*a*a*a*a+b},easeOutQuint:function(c,a,b,e,d){return e*((a=a/d-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,e,d){return(a/=d/2)<1?e/2*a*a*a*a*a+b:e/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,e,d){return-e*Math.cos(a/d*(Math.PI/2))+e+
b},easeOutSine:function(c,a,b,e,d){return e*Math.sin(a/d*(Math.PI/2))+b},easeInOutSine:function(c,a,b,e,d){return-e/2*(Math.cos(Math.PI*a/d)-1)+b},easeInExpo:function(c,a,b,e,d){return a==0?b:e*Math.pow(2,10*(a/d-1))+b},easeOutExpo:function(c,a,b,e,d){return a==d?b+e:e*(-Math.pow(2,-10*a/d)+1)+b},easeInOutExpo:function(c,a,b,e,d){return a==0?b:a==d?b+e:(a/=d/2)<1?e/2*Math.pow(2,10*(a-1))+b:e/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,e,d){return-e*(Math.sqrt(1-(a/=d)*a)-1)+b},easeOutCirc:function(c,
a,b,e,d){return e*Math.sqrt(1-(a=a/d-1)*a)+b},easeInOutCirc:function(c,a,b,e,d){return(a/=d/2)<1?-e/2*(Math.sqrt(1-a*a)-1)+b:e/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,e,d){var c=1.70158,f=0,h=e;if(a==0)return b;if((a/=d)==1)return b+e;f||(f=d*0.3);h<Math.abs(e)?(h=e,c=f/4):c=f/(2*Math.PI)*Math.asin(e/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*d-c)*2*Math.PI/f))+b},easeOutElastic:function(c,a,b,e,d){var c=1.70158,f=0,h=e;if(a==0)return b;if((a/=d)==1)return b+e;f||(f=d*0.3);
h<Math.abs(e)?(h=e,c=f/4):c=f/(2*Math.PI)*Math.asin(e/h);return h*Math.pow(2,-10*a)*Math.sin((a*d-c)*2*Math.PI/f)+e+b},easeInOutElastic:function(c,a,b,e,d){var c=1.70158,f=0,h=e;if(a==0)return b;if((a/=d/2)==2)return b+e;f||(f=d*0.3*1.5);h<Math.abs(e)?(h=e,c=f/4):c=f/(2*Math.PI)*Math.asin(e/h);return a<1?-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*d-c)*2*Math.PI/f)+b:h*Math.pow(2,-10*(a-=1))*Math.sin((a*d-c)*2*Math.PI/f)*0.5+e+b},easeInBack:function(c,a,b,e,d,f){f==void 0&&(f=1.70158);return e*(a/=d)*
a*((f+1)*a-f)+b},easeOutBack:function(c,a,b,e,d,f){f==void 0&&(f=1.70158);return e*((a=a/d-1)*a*((f+1)*a+f)+1)+b},easeInOutBack:function(c,a,b,e,d,f){f==void 0&&(f=1.70158);return(a/=d/2)<1?e/2*a*a*(((f*=1.525)+1)*a-f)+b:e/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+b},easeInBounce:function(c,a,b,e,d){return e-$.easing.easeOutBounce(c,d-a,0,e,d)+b},easeOutBounce:function(c,a,b,e,d){return(a/=d)<1/2.75?e*7.5625*a*a+b:a<2/2.75?e*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?e*(7.5625*(a-=2.25/2.75)*a+0.9375)+
b:e*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,e,d){return a<d/2?$.easing.easeInBounce(c,a*2,0,e,d)*0.5+b:$.easing.easeOutBounce(c,a*2-d,0,e,d)*0.5+e*0.5+b}});var RecaptchaOptions={theme:"custom",custom_theme_widget:"recaptcha_widget",lang:"fr"},SignUp=function(){var c=this;SignUp.prototype.init=function(){this.pageEditTrigger();$("#toolll").mousedown(function(a){if($(a.target).hasClass("lightselectblock")&&(a.which==1&&a.ctrlKey||a.which==3)){toolll.dialoguetrigger.options.event=a;var b=$("#toolll").find(".dialogue-trigger").eq(0);toolll.dialoguetrigger.fire(b,{event:a});toolll.dialoguetrigger.options.event=!1}})};SignUp.prototype.pageEditTrigger=function(a){toolll.dialoguetrigger.build({event:a,
label:gl.subdomain,insertinto:$("#toolll"),mousedown:function(){toolll.pageedit.buildMenu({element:$(this)});toolll.dialoguetrigger.attach($(this),$("#toolll"))}})};SignUp.prototype.insertAccountInviteCodeForm=function(){c.signuploaded=!1;uai.dialogue.insert({id:"account_code",modal:!0,tabs:$("<div/>").append(uai.input.text({placeholder:"Enter invitation code",id:"code",width:160,fnctn:function(){$("#code_validate").data("uai").name("Validate");c.signuploaded=!1},enter:function(){$("#code_validate").click()}}),
uai.input.button({label:"Validate",id:"code_validate",fnctn:function(){var a=$(this);a.data("uai").spinner.on();$.post("/user_account/verifyinvitation.php",{code:$("#code").val()},function(b){b=="used"?a.data("uai").name("Code has been used allready!"):b=="confirmed"&&!c.signuploaded?(c.signuploaded=!0,signup.insertAccountBasicForm(),$("#dialogue_account_code").hide()):a.data("uai").name("This is not an invitation code!");a.data("uai").spinner.off()})}}))})};SignUp.prototype.insertAccountBasicForm=
function(a){a=$.extend({},{element:null},a);uai.dialogue.insert({id:"account_basics",tabs:$("<div/>").append(uai.input.text({label:"Full Name",name:"fullname",id:"fullname",width:160,fnctn:function(){var b=$(this),a=b.val();$.post("/_u_account/u.validate.php",{cmd:"fullname",fullname:a},function(a){var c=b.parent().children("label").eq(0),e=c.data("label")||c.text();a=="valid"?(b.data("valid",!0),c.css({color:""}),c.html(e)):(b.data("valid",!1),c.css({color:"red"}),c.data("label",e),c.html(e+" ("+
a+")"))})}}),uai.input.text({label:"Email Address",id:"email",name:"email",type:"email",width:160,fnctn:function(){var b=$(this),a=b.val();console.log(a);clearTimeout(c.email_val);c.email_val=setTimeout(function(){$.post("/_u_account/u.validate.php",{cmd:"email",email:a},function(a){var c=b.parent().children("label").eq(0),e=c.data("label")||c.text();c.data("label",e);a=="valid"?(b.data("valid",!0),c.css({color:""}),b.removeClass("invalid")):(a=="has been taken!"?(c.css({color:"red"}),e=e+" ("+a+
")"):(b.data("valid",!1),c.css({color:"red"})),b.addClass("invalid"));c.html(e)})},1E3)}}),uai.input.text({label:"Password",type:"password",name:"password",id:"password",width:160,enter:function(){$("#createstep1").click()},fnctn:function(){var b=$(this),a=b.val();$.post("/_u_account/u.validate.php",{cmd:"password",password:a},function(){var a=b.parent().children("label").eq(0),c=a.data("label")||a.text();a.data("label",c);var e=passwordStrength($("#password").val()),j=passwordStrengthPercent($("#password").val());
a.html(c+" ("+e+")");j>1?(b.data("valid",!0),a.css({color:""})):(b.data("valid",!1),a.css({color:"red"}))})}}),uai.styl.space("l"),uai.input.button({label:"Create my account",id:"createstep1",fnctn:function(){c.goToAccountRecapchaForm();$(this).unbind("click")}}))});$.getScript("/_u_third/passwordStrengthMeter.js")};SignUp.prototype.goToAccountRecapchaForm=function(){var a=!1;$("#fullname").data("valid")||($("#fullname").parent().children("label").eq(0).css({color:"red"}),a=!0);$("#email").data("valid")||
($("#email").parent().children("label").eq(0).css({color:"red"}),a=!0);$("#password").data("valid")||($("#password").parent().children("label").eq(0).css({color:"red"}),a=!0);if(a)return alert("hmmm"),!1;$("#dialogue_account_basics").hide();uai.dialogue.insert({id:"account_recapcha",tabs:$("<div/>").append($("<div/>",{id:"recapchaa","class":"tabgroup"}).append($("<div/>",{id:"recapcha_widget",css:{display:"block",fontSize:9}}).append($("<div/>",{id:"recaptcha_image"}),$("<div/>",{"class":"recaptcha_only_if_incorrect_sol",
css:{color:"red"},text:"Incorrect, please try again."}),$("<span/>",{"class":"recaptcha_only_if_image",text:"Enter the words above:"}),$("<span/>",{"class":"recaptcha_only_if_audio",text:"Enter the numbers you hear:"}),uai.input.text({id:"recaptcha_response_field",name:"recaptcha_response_field",enter:function(){$("#recapchasubmit").click()},width:291}),$("<div/>").append($("<span/>",{css:{cursor:"pointer"},click:function(){Recaptcha.reload()},text:"Get another CAPTCHA"})),$("<div/>",{"class":"recaptcha_only_if_image"}).append($("<span/>",
{css:{cursor:"pointer"},click:function(){Recaptcha.switch_type("audio")},text:"Get an audio CAPTCHA"})),$("<div/>",{"class":"recaptcha_only_if_audio"}).append($("<span/>",{css:{cursor:"pointer"},click:function(){Recaptcha.switch_type("image")},text:"Get an image CAPTCHA"})),$("<div/>").append($("<span/>",{css:{cursor:"pointer"},click:function(){Recaptcha.showhelp()},text:"Help"}))),uai.input.button({label:"Create my Account",id:"recapchasubmit",fnctn:function(){c.goToSitenameForm()}})))});$.getScript("http://www.google.com/recaptcha/api/js/recaptcha_ajax.js",
function(){Recaptcha.create("6Lds_70SAAAAAILVPP4TJDMA6dIBFJrKkal8Zqxy","recaptcha_widget",{theme:"custom",custom_theme_widget:"recaptcha_widget",callback:Recaptcha.focus_response_field})})};SignUp.prototype.goToSitenameForm=function(){var a={};$("#dialogue_account_recapcha").find("input, select").each(function(){a[$(this).attr("name")]=$(this).val()});a.doRegister="Register";a.invitationcode=$("#code").val();a.fullname=$("#fullname").val();a.password=$("#password").val();a.email=$("#email").val();
$.post("/user_account/e.signup.php",a,function(b){b=="ok"?($("#email").val(),$("#password").val(),$.post("/_u_account/u.signin.php",{usr_email:$("#email").val(),pwd:$("#password").val(),doLogin:"Login",remember:!1},function(b){b.match(/thank/gi)?(alert("login failed! (response comming up...)"),alert(b)):$("#dialogue_account_recapcha").hide()}),uai.dialogue.insert({width:310,tabs:$("<div/>").width(310).append(uai.styl.title("Choose a name for your site.","l"),uai.styl.space(),uai.input.text({placeholder:'sitename<span style="color:rgb(210,210,210);">.toolll.com</span>',
id:"site_name",width:240,enter:function(){$("#gothere").click()},fnctn:function(){}}),uai.styl.title("You can change this name later, also into www.sitename.com, it\u2019s just to get you started.","m"),uai.styl.space(),uai.input.button({label:"Go There",submit:!0,id:"gothere",classname:"submit",fnctn:function(){var b=$("#site_name").val();!b.match(/^[a-z0-9][a-z0-9\-]+[a-z0-9]$/)||!b.match(/^.{3,40}$/)?alert("Please use lowercase letters, numbers and hyphens (but not at the beginning or end)."):
(b=b.replace(".toolll.com",""),$.post("/user_account/command_base.php",{job:"addsite",site_name:b},function(a){a=="okok"?setTimeout(function(){window.location="http://"+b+".toolll.com"},900):alert(a)}))}}))})):uai.dialogue.insert({modal:!0,tabs:$("<div/>").append(uai.styl.title(b,"l"),uai.styl.space("l"),uai.input.button({label:"OK",fnctn:function(){uai.dialogue.stopLast()}}))});console.log(b)})}};function Account(){var c=this;Account.prototype.sites=new Sites(c);Account.prototype.init=function(){$("<img/>")[0].src="/_p/_style/_image/loading_animated.svg";c.refreshData(function(){c.insert()})};Account.prototype.refreshData=function(a){$.getJSON("/user_account/_command/get_accountdata.php",{},function(b){c.accountdata={};c.accountdata.account=b.account;c.accountdata.sites=b.sites;a()})};Account.prototype.insert=function(){if($("#dialogue_account").length)return!1;uai.dialogue.insert({id:"account",
tabs:[{tabtitle:"Sites",width:400,active:!0,tabcontent:$("<div/>",{css:{width:400}}).append($("<div/>",{id:"sites_overview",css:{marginTop:10}}).append(c.sites.render(c.accountdata.sites)),uai.input.button({dialogue:!0,conditional:userdata.account.user_level>1,label:"Create A New Site",fnctn:function(){uai.dialogue.insert({subdialogue:$(this),tabs:$("<div/>").append(uai.styl.title("Choose a name for your new site."),uai.styl.space("xl"),uai.input.text({placeholder:'sitename<span style="color:rgba(0,0,0,0.1);">.toolll.com</span>',
autofocus:!0,width:180,id:"site_name",fnctn:function(){$("#addsite").data("uai").name()},enter:function(){$("#addsite").click()}}),uai.input.button({label:"Add",id:"addsite",fnctn:function(){if(c.running)return!1;var a=$("#site_name").val();if(a=a.replace(".toolll.com","").replace(".toolll","")){c.running=!0;var b=$(this);$("#addsite").data("uai").name("Verifying");b.data("uai").spinner.on();var e=(new Date).getTime();$.post("/user_account/command_base.php",{job:"addsite",site_name:a},function(d){if(d==
"okok"){c.refreshData(function(){$("#sites_overview").empty().append(c.sites.render(c.accountdata.sites))});var d=function(){b.data("uai").spinner.off();$("#addsite").data("uai").name("Done");$("#site_name").parents(".tab:first").empty().append(uai.styl.title("Would you like to visit "+a+".toolll.com?"),uai.styl.space("xl"),uai.input.button({label:"No Thanks",classname:"inline",fnctn:function(){uai.dialogue.stopLast()}}),uai.input.button({label:"Visit Site",classname:"inline",fnctn:function(){window.open("http://"+
a+".toolll.com","mywindow")}}),uai.styl.space("xl"))},f=(new Date).getTime()-e;f<800?setTimeout(d,800-f):d()}else b.data("uai").spinner.off(),b.data("uai").name(d);c.running=!1})}}}))})}}))},{tabtitle:"Settings",tabcontent:$("<div/>",{"class":"tabgroup"}).append(uai.input.text({label:"Full Name",name:"fullname",width:160,value:c.accountdata.account.full_name}),uai.input.text({label:"Email Address",name:"email",value:c.accountdata.account.user_email,width:160,fnctn:function(){}}))},{tabtitle:"Password",
tabgroups:$("<div/>").append(uai.input.text({label:"Current Password",id:"pwd_old",width:160}),uai.input.text({label:"New Password",id:"pwd_new",width:160}),uai.input.text({label:"Verify New Password",id:"pwd_check",width:160,enter:function(){$("#pwd_change").click()}}),uai.input.button({label:"Change Password",id:"pwd_change",fnctn:function(){var a=$(this);if(!$("#pwd_old").val()||!$("#pwd_new").val()||!$("#pwd_check").val())return alert("Some fields are empty"),!1;else if($("#pwd_new").val()!=$("#pwd_check").val())return alert("The passwords are not identical."),
!1;else a.data("uai").spinner.on(),$.post("/_u_account/password.php",{pwd_old:$("#pwd_old").val(),pwd_new:$("#pwd_new").val()},function(b){a.data("uai").spinner.off();if(b=="ok"){var c=a.parents(".tabgroup:first"),d=$("<div/>",{"class":"tabgroup"}).append(uai.styl.title("Your password has been updated.","l"),uai.styl.space());c.hide();c.parent().append(d);$("#pwd_old").val("");$("#pwd_new").val("");$("#pwd_check").val("");setTimeout(function(){c.show();d.remove()},1E4)}else $("#pwd_old").val("").keypress(function(){a.data("uai").name("Change Password")}),
a.data("uai").name("Old Password is incorrect")})}}))}]})}};function Sites(c){var a=this;Sites.prototype.site=new Site(c);Sites.prototype.render=function(b){var c=$("<div/>",{css:{}});$(b).each(function(b,f){c.append($("<div/>",{"class":"site-pane tabgroup"}).css({}).hover(function(){$(this).css({color:""})},function(){$(this).css({color:""})}).append(a.site.render(f)))});return c}};function Site(c){var a=this;Site.prototype.pages=new Pages(a,c);Site.prototype.getlabel=function(b,a){var c;switch(b){case "daysleft":c=a?$("<div/>",{"class":"statlabel daysleft",text:a+(a==1?" day left":" days left")}):$("<div/>",{"class":"statlabel daysleft",text:"unpublished"});break;case "visits":c=$("<div/>",{"class":"statlabel visits",text:a+(a==1?" page view":" page views")});break;case "items":c=$("<div/>",{"class":"statlabel slitems",text:a+(a==1?" item":" items")});break;case "pages":c=
$("<div/>",{"class":"statlabel pages",text:a+(a==1?" page":" pages")})}return c};Site.prototype.sitetab=function(b){return $("<div/>",{id:"site_tab"}).append($("<p/>",{css:{fontSize:17,marginBottom:3},text:b.site_name+".toolll.com"}),$("<p/>",{css:{lineHeight:"13px",marginBottom:5},html:"Since: "+b.fdate}),a.getlabel("visits",b.visits),a.getlabel("daysleft",b.daysleft),a.getlabel("pages",b.page_count),a.getlabel("items",b.item_count),uai.styl.space("m"),$("<div/>",{"class":"tabgroup"}).append(uai.input.button({classname:"inline",
dialogue:!0,conditional:userdata.account.user_level>1,id:"newpage",label:"New Page",fnctn:function(){uai.dialogue.insert({subdialogue:$(this),tabs:$("<div/>").append(uai.input.text({placeholder:'<span style="color:rgba(0,0,0,0.1)">'+b.site_name+".toolll.com/</span>pagename",autofocus:!0,width:180,id:"page_name",fnctn:function(){$("#addpage").data("uai").name()},enter:function(){$("#addpage").click()}}),uai.input.button({label:"Add",id:"addpage",fnctn:function(){if(a.running)return!1;var e=$("#page_name").val();
if(e=e.replace(".toolll.com","").replace(".toolll","")){a.running=!0;var d=$(this);$("#addpage").data("uai").name("Verifying");d.data("uai").spinner.on();(new Date).getTime();$.post("/user_account/command_base.php",{job:"addpage",page_name:e,page_style:userdata.page?userdata.page.page_id:"",site_id:b.site_id},function(e){e=="ok"?c.refreshData(function(){uai.dialogue.stopLast();$.each(c.accountdata.sites,function(c,e){if(e.site_id==b.site_id){var d=$("#newpage").parents(".tabgroup:first").next().next(".tabgroup");
d.after(a.pages.render(e));d.remove();return!1}})}):(d.data("uai").spinner.off(),d.data("uai").name(e));a.running=!1})}}}))})}}),uai.input.button({label:"Publish Site",dialogue:!0,classname:"inline",fnctn:function(){uai.dialogue.insert({width:180,subdialogue:$(this),tabs:$("<div/>",{css:{width:180}}).append(uai.styl.title("By publishing this site (all pages!) you\u2019ll replace the version currently shown to visitors with the one you\u2019re looking at right now!<br/>","l","regular"),uai.styl.space(),
uai.input.button({classname:"inline",label:"Cancel",fnctn:function(){uai.dialogue.stopLast()}}),uai.input.button({classname:"inline",label:"Publish!",fnctn:function(){toolll.selection.s_stop();$(this).data("uai").spinner.on();var b=toolll.shift?!0:!1;if(b)alert("Force Publish"),toolll.shift=!1;var a={};a.site_id=userdata.site.site_id;b&&(a.force=!0);$.ajax({url:"/publish/",type:"post",dataType:"json",data:a,error:function(b,a,c){typeof console!="undefined"&&(typeof console.groupCollapsed!="undefined"&&
console.groupCollapsed("/publish/"),console.log(b.responseText.replace(/\\n/g,"\n")),typeof console.groupEnd!="undefined"&&console.groupEnd());alert(c)},success:function(b){if(b.succes)uai.dialogue.lastinstance.find(".tab").empty().append(uai.styl.title("This site is now visible<br />to the world!","l","regular"),uai.styl.space(),uai.input.button({label:"OK",fnctn:function(){uai.dialogue.stopLast()}})),userdata.site.milestones=b.milestones,localStorage.clearItemsOnly();b.dbug&&dbug.log(b.dbug);uai.dialogue.lastinstance.data("dlg").sizeFix(uai.dialogue.lastinstance,
!0)}})}}),uai.styl.space("xl"))})}}),uai.input.button({label:"Delete Site",conditional:userdata.account.user_level>1,classname:"inline last",dialogue:!0,fnctn:function(){var a="deleteimages";uai.dialogue.insert({subdialogue:$(this),tabs:$("<div/>",{width:220}).append(uai.styl.title("Are you sure you want to DELETE the site: \u2018"+b.site_name+".toolll.com\u2019?","l","regular"),uai.styl.space("xl"),uai.input.checkbox({label:"Delete images",checked:!0,fnctn:function(){a=a?"":"deleteimages"}}),uai.input.button({label:"Cancel",
classname:"inline",fnctn:function(){uai.dialogue.stopLast()}}),uai.input.button({label:"I am sure!",classname:"inline",fnctn:function(){$(this).data("uai").spinner.on();$.post("/user_account/command_base.php",{job:"deletesite",site_id:b.site_id,option:a},function(){c.refreshData(function(){uai.dialogue.stopLast();uai.dialogue.stopLast();$("#toolll").empty().css({backgroundImage:"none"});$("#sites_overview").empty().append(c.sites.render(c.accountdata.sites))})})}}))})}})),uai.styl.title("Pages","l regular"),
a.pages.render(b))};Site.prototype.siteoptiontab=function(){return $("<div/>",{id:"siteoptions_tab"}).append($("<div/>",{"class":"tabgroup"}).append(uai.styl.title("Google Analytics Tracking Code","l regular"),uai.input.text({label:"",width:180,id:"tracking_code",value:userdata.site.ua,fnctn:function(){a.running=!1;$(this).removeClass("invalid");$("#submit_tracking_code").data("uai").name()},enter:function(){$("#submit_tracking_code").click()}}),uai.input.button({id:"submit_tracking_code",classname:"inline",
label:"Submit",fnctn:function(){if(a.running)return!1;var b=$(this),c=$("#tracking_code").val();if(!c||!c.match(/UA-[0-9]{6,8}-[0-9]{1,2}/))return alert("Tracking Code is invalid or empty!"),!1;a.running=!0;b.data("uai").name("Veifying");b.data("uai").spinner.on();setTimeout(function(){$.post("/user_account/command_base.php",{site_id:userdata.site.site_id,job:"trackingcode",tracking_code:c},function(c){b.data("uai").spinner.off();alert(c);a.running=!1})},500)}}),uai.input.button({classname:"inline",
conditional:!userdata.site.ua,label:"Don\u2019t have a tracking code?",fnctn:function(){window.open("http://www.google.com/analytics/","mywindow")}})))};Site.prototype.render=function(b){return $("<div/>").append($("<iframe/>",{"class":"sitethumb",src:"http://"+b.site_name+".toolll.com?preview=1&width=132",width:132,height:87}),$("<p/>",{css:{fontSize:17,marginBottom:3},text:b.site_name+".toolll.com"}),$("<p/>",{css:{lineHeight:"13px",marginBottom:5},html:"Since: "+b.fdate}),a.getlabel("visits",b.visits),
a.getlabel("daysleft",b.daysleft),a.getlabel("pages",b.page_count),a.getlabel("items",b.item_count),$("<p/>",{css:{height:6}}),uai.input.button({dialogue:!0,classname:"inline",label:"More",name:"username",fnctn:function(){uai.dialogue.insert({subdialogue:$(this),tabs:[{tabtitle:"Site",active:!0,tabcontent:a.sitetab(b)},{tabtitle:"Options",width:280,tabcontent:a.siteoptiontab(b)}]})}}),uai.styl.space("m"))}};function Pages(c,a){Pages.prototype.render=function(b){var e=$("<div/>",{"class":"tabgroup"});$(b.pages).each(function(d,f){var h=userdata.site.domain?userdata.site.domain:b.site_name!="toolll"?b.site_name+".toolll.com":"toolll.com",j=f.page_name!="home"?f.page_name+"/":"";e.append($("<p/>",{css:{lineHeight:"12px",height:12},html:"http://"+h+"/"+j}).append(),c.getlabel("visits",f.visits),c.getlabel("items",f.item_count),uai.input.button({label:"Visit",classname:"small inline floatright",fnctn:function(){window.open("http://"+
h+"/"+j,"open_window")}}),uai.input.button({conditional:d==0||userdata.account.user_level<2?!1:!0,label:"Delete",classname:"small inline floatright",dialogue:!0,fnctn:function(){uai.dialogue.insert({subdialogue:$(this),tabs:$("<div/>").append(uai.styl.title("Sure you want to delete the Page: \u2018"+f.page_name+"\u2019? <br>This wil also delete its live counterpart and <br>can\u2019t be undone!","l","regular"),uai.styl.space("xl"),uai.input.button({label:"Cancel",classname:"inline",fnctn:function(){uai.dialogue.stopLast()}}),
uai.input.button({label:"I am sure!",classname:"inline",fnctn:function(){$(this).data("uai").spinner.on();$.post("/user_account/command_base.php",{job:"deletepage",page_name:f.page_name,page_id:f.page_id},function(){userdata.page.page_name=="home"?a.refreshData(function(){uai.dialogue.stopLast();$.each(a.accountdata.sites,function(a,d){if(d.site_id==b.site_id)return e.empty().after(c.pages.render(d)),e.remove(),!1})}):window.location="http://"+window.location.host})}}))})}}),uai.styl.space("l"))});
e.append();return e}};function Dlg(c,a){var b=this;Dlg.prototype.parse=function(e){var d={insertinto:$("#uai"),supercurtain:!1,tabs:"no tabs",element:null,subdialogue:!1,modal:!1,width:"auto",height:"auto",position:!1,classname:"",holdswitch:!1,positionTimeout:!1};props=$.extend(!0,d,e);p=$.extend(!0,{tabclass:typeof props.tabs=="array"?" tabbed":"",modalclass:props.modal?" modal":"",respondclass:props.modal.respond?" respond":""},props);b.p=p;b.did=p.id?p.id:Math.round(Math.random()*1E12+1);b.dlgnr=a;b.instance=$("<div/>",
{id:"dialogue_"+b.did,rel:a,"class":"dialogue "+p.classname+p.tabclass+p.modalclass,css:{width:p.width,height:p.height,opacity:0}});b.dialogueborder=$("<div/>",{"class":"dialogueborder drag"});b.dialogueinner=$("<div/>",{"class":"dialogueinner"});b.tabtitlecontainer=$("<div/>",{"class":"tabtitlecontainer"});b.subtabtitlecontainer=$("<div/>",{"class":"subtabtitlecontainer"});b.subsubtabtitlecontainer=$("<div/>",{"class":"subsubtabtitlecontainer"});b.tabcontainer=$("<div/>",{"class":"tabcontainer"});
b.subtabcontainer=$("<div/>",{"class":"subtabcontainer"});b.subsubtabcontainer=$("<div/>",{"class":"subsubtabcontainer"});b.tabs=[];b.subtabs=[];b.subsubtabs=[];b.subdialoguecontainer=$("<div/>",{"class":"subdialoguecontainer"});b.holdswitch=$("<div/>",{"class":"holdswitch"}).append($("<div/>",{"class":"statecolor"}),$("<div/>",{"class":"switch"}));b.instance.append(b.dialogueborder,b.dialogueinner.append(b.tabtitlecontainer,b.tabcontainer,b.subdialoguecontainer));b.container=p.container?p.container:
$("#uai").length?$("#uai"):$("body");b.parseTabs();$.each(b.tabs,function(a,c){!b.tabs[1]&&!c.tabtitle?(b.tabtitlecontainer.remove(),b.tabcontainer.append(c)):c.tabtitle&&(b.tabtitlecontainer.append(c.tabtitle),c.tabtitle.click(function(){b.showTab(c)}),b.tabcontainer.append(c.tabdiv))});$.each(b.subtabs,function(a,c){c.tabtitle.click(function(){b.showTab(c)})});$.each(b.subsubtabs,function(a,c){c.tabtitle.click(function(){b.showTab(c)})});b.typeSpecifics();b.events();b.container.append(b.instance);
b.instance.animate({opacity:1},50,"",function(){!b.subdialogue&&typeof $().draggable!="undefined"&&b.instance.draggable({handle:".drag",cursor:"default",scroll:!1})});c.instances.push(b.instance);c.lastinstance=b.instance;b.sizeAndPosition();b.instance.data("dlg",b);return b.instance};Dlg.prototype.parseTabs=function(){var a=noconsole;a.groupCollapsed("dlg.parseTabs");b.p.tabs=$.isArray(b.p.tabs)?b.p.tabs:[b.p.tabs];var c;$.each(b.p.tabs,function(f,h){if(typeof h.conditional!="undefined"&&!h.conditional)a.log("tabtitle",
h.tabtitle),a.log("tab.conditional",h.conditional);else{if(h.tabcontent)if($.isArray(h.tabcontent)){c=$("<div/>",{"class":"tab"}).css({width:h.width||"auto"});var j=$("<div/>",{"class":"subtabtitlecontainer"});c.append(j);$.each(h.tabcontent,function(f,m){if(typeof m.conditional!="undefined"&&!m.conditional)a.log("subtabtitle",m.tabtitle),a.log("subtab.conditional",m.conditional);else{var l=c.children().length-1,l=$("<div/>",{css:{},"class":"input button toggle tab"+(f+1)+(l==h.tabcontent.length-
1?"":"")+(l==0?" first":""),html:m.tabtitle,click:m.tabfnctn});j.append(l);var k=$.isArray(m.tabcontent)?$("<div/>",{"class":"subtab tabgroup"}):m.tabcontent.addClass("subtab").css({width:m.width||"auto"});b.subtabs.push({subtab:!0,tabdiv:k,tabtitle:l});if(m.active){if(h.active)b.activesubtab={tabtitle:l,tabdiv:k};l.addClass("active");k.addClass("active")}c.append(k);if($.isArray(m.tabcontent)){var q=$("<div/>",{"class":"subsubtabtitlecontainer"});k.append(q);$.each(m.tabcontent,function(c,d){if(typeof d.conditional!=
"undefined"&&!d.conditional)a.log("subsubtabtitle",d.tabtitle),a.log("subsubtab.conditional",d.conditional);else{var f=k.children().length-1,f=$("<div/>",{css:{},"class":"input button toggle tab"+(c+1)+(f==0?" first":"")+(f==m.tabcontent.length-1?"":""),html:d.tabtitle,click:m.tabfnctn});q.append(f);var i=$.isArray(d.tabcontent)?$("<div/>",{"class":"subsubtab"}):d.tabcontent.addClass("subsubtab").css({width:d.width||"auto"});b.subsubtabs.push({subsubtab:!0,tabdiv:i,tabtitle:f});if(d.active){if(h.active&&
m.active)b.activesubsubtab={tabtitle:f,tabdiv:i};f.addClass("active");i.addClass("active")}k.append(i);$.isArray(d.hover)&&i.hover(d.hover[0],d.hover[1])}});k.children(":last").addClass("last");q.children(":last").addClass("last");if(!k.children(".active").length&&(k.children(".subsubtab:first").addClass("active"),q.children(".subsubtab:first").addClass("active"),h.active&&m.active))b.activesubsubtab={tabtitle:q.children(":first"),tabdiv:k.children(".subsubtab:first")}}else $.isArray(m.hover)&&k.hover(m.hover[0],
m.hover[1])}});c.children(":last").addClass("last");j.children(":last").addClass("last");if(!c.children(".active").length&&(c.children(".subtab:first").addClass("active"),j.children(":first").addClass("active"),h.active))b.activesubtab={tabtitle:j.children(":first"),tabdiv:c.children(".subtab:first")}}else c=h.tabcontent.addClass("tab").css({width:h.width||"auto"});else if(h.tabgroups)if(h.tabgroups){b.instance.addClass("tabbed");if(!$.isArray(h.tabgroups))h.tabgroups=[h.tabgroups];c=$("<div/>",{"class":"tab"}).css({width:h.width||
"auto"});$.each(h.tabgroups,function(b,a){var e=a.groupcontent?a.groupcontent:a,f=a.grouptitle?$("<div/>",{"class":"grouptitle",text:a.grouptitle}):"";c.append(f,e.addClass("tabgroup"))})}else c=h.addClass("tab").css({width:h.width||"auto"});else c=h.addClass("tab");if(h.tabtitle){var l=h.tabstyle==2?$("<div/>",{css:{},"class":"input button toggle tab"+(f+1)+(f==h.tabcontent.length-1?" last":"")+(f==0?" first":""),html:h.tabtitle,click:h.tabfnctn}):$("<div/>",{css:{},"class":"tabtitle tab"+(f+1),
html:h.tabtitle,click:h.tabfnctn});b.tabs.push({tabdiv:c,tabtitle:l});if(b.p.tabs[1]){if(h.active)b.activetab={tabtitle:l,tabdiv:c},l.addClass("active"),c.addClass("active")}else l.addClass("active"),c.addClass("active")}else b.tabs.push(c.addClass("active"));$.isArray(h.hover)&&c.hover(h.hover[0],h.hover[1])}});a.groupEnd()};Dlg.prototype.typeSpecifics=function(){b.p.supercurtain&&($("#supercurtain").length||$("body").append($("<div/>",{id:"supercurtain",click:function(){c.stopLast();c.instances.length||
$(this).remove()}})));if(b.p.modal){var a=$("<div/>",{id:"dialoguecurtain_"+b.did,"class":"modalcurtain"+(b.p.modal.respond?" respond":""),mousedown:function(){b.p.modal.respond||(uai.dialogue.stopInstance(b.instance),$(this).remove())}});b.instance.prepend(a)}if(b.p.subdialogue){var a=b.p.subdialogue,d=a.clone(!1).attr("id",a.attr("id")+"_dlg");d.unbind("mouseup").unbind("mouseout");var f=a.parents(".dialogue").length?a.parents(".dialogue"):$("#dock"),h=a.parents(".tabcontainer").length?a.parents(".tabcontainer"):
$("#dock"),j=f.data("dlg")||{},l=a.outerHeight(),i=a.outerWidth()+a.children(".dialoguemark").outerWidth();a.children(".dialoguemark").length&&(i+=1);var m=a.offset().top-f.offset().top+h.scrollTop(),f=a.offset().left-f.offset().left-10,n=d.find(".color-mark:last");n.attr({id:n.attr("id")+"_clone"});var n=a.children(".mark"),k=n.width(),n=n.hasClass("dialoguemark")?k+9:10,n=$("<div/>",{"class":"dialogueborder drag buttontab"}).css({paddingRight:n,top:-l});n.append(d.addClass("buttondown buttontab"));
b.instance.addClass("subdialogue").find(".dialogueinner").prepend(n);b.subdialogue={src_element:a,src_tabcontainer:h,src_instance:a.parents(".dialogue"),src_subdialoguecontainer:j.subdialoguecontainer||a.parents(".dialogue").find(".subdialoguecontainer"),src_dlg:j,src_t:m,src_w:i,src_h:l,subdialoguetab:n};b.container=j.subdialoguecontainer||a.parents(".dialogue").find(".subdialoguecontainer");h.data("src_t",m);b.container.css({top:m-h.scrollTop()-10,left:f,height:l,width:i}).empty()}b.p.hover&&b.instance.hover(b.p.hover[0],
b.p.hover[1])};Dlg.prototype.showTab=function(a){if(!a.tabtitle.hasClass("active")&&this.activetab){var c=b.dialogueinner.height(),f=b.dialogueinner.width();b.tabcontainer.css({height:""});a.tabtitle.addClass("active");a.tabtitle.animate({padding:"2px 3px 4px 3px"},130);a.subtab?(this.activesubtab.tabdiv.removeClass("active"),this.activesubtab.tabtitle.removeClass("active"),this.activesubtab=a,$.each(b.subsubtabs,function(a,c){if(c.tabdiv[0]==b.activesubtab.tabdiv.children(".subsubtab.active")[0])b.activesubsubtab=
c})):a.subsubtab?(this.activesubsubtab.tabdiv.removeClass("active"),this.activesubsubtab.tabtitle.removeClass("active"),this.activesubsubtab=a):(this.activetab.tabdiv.removeClass("active"),this.activetab.tabtitle.removeClass("active"),this.activetab.tabdiv=a.tabdiv,this.activetab.tabtitle=a.tabtitle,$.each(b.subtabs,function(a,c){if(c.tabdiv[0]==b.activetab.tabdiv.children(".subtab.active")[0])b.activesubtab=c}),$.each(b.subsubtabs,function(a,c){if(c.tabdiv[0]==b.activesubtab.tabdiv.children(".subsubtab.active")[0])b.activesubsubtab=
c}));a.tabdiv.addClass("active");this.activetab.tabtitle.animate({padding:"2px 9px 4px 9px"},130);b.instance.width();var h=b.dialogueinner.height(),j=b.dialogueinner.width();b.instance.css({width:""});var l=b.instance.hasClass("flip-vert")?b.instance.offset().top+b.instance.outerHeight()-_toolll.scrll.scrollTop():$(window).height()-(b.instance.offset().top-_toolll.scrll.scrollTop());b.instance.find(".tabcontainer").css({height:h-i-20});h=b.dialogueinner.height();if(h>l){h=l;b.dialogueinner.addClass("scroller");
var i=b.instance.find(".tabcontainer").position(!0).top+10;b.instance.find(".tabcontainer").css({height:h-i-20});h=b.dialogueinner.height();b.scroller=!0;b.instance.mouseenter()}else b.scroller=!1;b.dialogueinner.height(c).width(f);a.tabdiv.css("visibility","hidden");b.dialogueinner.animate({height:h,width:j},200,"easeOutQuad",function(){b.dialogueinner.css({height:"auto",width:"auto"});a.tabdiv.css("visibility","visible");b.scroller||(b.dialogueinner.removeClass("scroller"),b.instance.find(".tabcontainer").css({height:""}))})}};
Dlg.prototype.events=function(){$(b.tabtitles).bind("click",function(){b.showTab($(this))});$(".tabbutton").live("click",function(){b.showTab($(this))});$(".dialogue").live("mousedown",function(b){uai.rte&&uai.rte.active&&(b.target.tagName.match(/input|select/i)||b.preventDefault())});b.instance.hover(function(){c.dialoguehover=!0},function(){c.dialoguehover=!1});b.subdialogue||b.tabcontainer.scroll(function(){var a=$(this).scrollTop(),c=$(this).data("src_t");$(this).position();b.subdialoguecontainer.css({top:c-
a})});if(b.subdialogue){var a=b.subdialogue.src_tabcontainer;b.instance.mousewheel(function(b,c){var h=a.scrollTop();a.scrollTop(h-c)});b.subdialogue.subdialoguetab.click(function(){});b.subdialogue.src_instance.mousedown(function(a){$(a.target).parents(".dialogue")[0]!=b.instance[0]&&$(a.target).parents(".dialogue")[1]!=b.instance[0]&&$(a.target).parents(".dialogue")[2]!=b.instance[0]&&$(a.target).parents(".dialogue")[3]!=b.instance[0]&&uai.dialogue.stopSubDialogue(b.instance)})}b.activetab&&$(b.tabtitles).click(function(){b.showTab($)})};
Dlg.prototype.sizeAndPosition=function(){b.instance.css({position:"fixed",width:"",marginLeft:-400});b.instance.find(".tabcontainer").css({height:""});b.current_w=b.instance.width();if(b.subdialogue)b.p.positionTimeout?(clearTimeout(b.dlgtimer),b.dlgtimer=setTimeout(function(){b.flipSubDialogue();b.sizeFix(b.instance,b.p.subdialogue)},b.p.positionTimeout)):(b.flipSubDialogue(),b.sizeFix(b.instance,b.p.subdialogue));else if(b.sizeFix(b.instance,b.p.subdialogue),b.positionInstance(),b.p.positionTimeout)clearTimeout(b.dlgtimer),
b.dlgtimer=setTimeout(function(){b.sizeFix(b.instance,b.p.subdialogue);b.positionInstance()},b.p.positionTimeout)};Dlg.prototype.sizeFix=function(a,c){var f=c||b.instance.hasClass("subdialogue");b.instance.css({position:"fixed",width:"",marginLeft:-400});b.instance.find(".tabcontainer").css({height:""});b.current_w=b.instance.width();b.current_h=b.instance.outerHeight();b.instance.css({position:f?"absolute":"fixed",width:b.current_w,marginLeft:""});f=b.instance.find(".tabcontainer").offset().top-
b.instance.offset().top;f+=10;c&&Math.abs(b.instance.offset().top);b.current_h>$(window).height()?(b.scroller=!0,b.subdialogue?b.instance.offset().top<b.subdialogue.src_subdialoguecontainer.offset().top-_toolll.scrll.scrollTop()?(f=b.instance.find(".tabcontainer").position(!0).top,b.instance.find(".tabcontainer").css({height:b.instance.height()+b.instance.offset().top-f-_toolll.scrll.scrollTop()})):b.instance.find(".tabcontainer").css({height:$(window).height()-b.subdialogue.src_subdialoguecontainer.offset().top-
60}):b.instance.find(".tabcontainer").css({height:$(window).height()-f-20}),b.instance.children(".dialogueinner").addClass("scroller")):(b.scroller=!1,b.instance.children(".dialogueinner").removeClass("scroller"))};Dlg.prototype.positionInstance=function(){if(b.p.position){var a=b.p.position,c,f,h,j,l,i,m,n,k,q,r;h=$(window).width();j=$(window).height();$.isArray(a)?(c=a[0].pageX?a[1]:a[0],f=a[0].pageX?a[0]:a[1]):a.originalEvent?f=a.pageX?a:a.originalEvent:c=a;if(c)a=c.parents("#items").length?_toolll.scrll.scrollTop():
0,l=c.offset().top-a>0?c.offset().top-a:10,i=c.offset().left,m=c.width(),c.height();if(f)n=f.pageX,k=f.pageY-_toolll.scrll.scrollTop();c?(i>h-i-m&&h-i-m<b.current_w+60?(r=i-b.current_w-25,r<20&&(r=20)):(r=i+m+30,r>h-b.source_w-20&&(r=h-b.source_w-20)),l+b.current_h+40<j?q=l:(q=l-(l+b.current_h+40-j),q<10&&(q=10))):f&&(q=k+b.current_h+40<j?k:k-(k+b.current_h+40-j),q<20&&(q=20),r=n+b.current_w+60<h?n:n-(n+b.current_w+60-h),r<40&&(r=40))}else r=($(window).width()-b.current_w)/2,q=b.current_h>$(window).height()?
10:($(window).height()-b.current_h)/2;b.instance.css({top:q,left:r})};Dlg.prototype.flipSubDialogue=function(){b.instance.css({position:"fixed",width:"",marginLeft:-400});b.current_h=b.instance.outerHeight();b.instance.css({position:"absolute",marginLeft:""});var a=b.subdialogue.src_element.offset();b.subdialogue.src_instance.parents(".dialogue").offset();var c=_toolll.scrll.scrollTop(),f="",h,j;a.top-c+b.current_h+20>$(window).height()?(c="auto",h=b.subdialogue.src_h-10,f+=" flip-vert",b.subdialogue.subdialoguetab.css({bottom:-b.subdialogue.src_h-
10,top:"auto"})):(b.subdialogue.subdialoguetab.css({top:-b.subdialogue.src_h-10}),c=b.subdialogue.src_h-10,f+=" noflip-vert");b.subdialogue.subdialoguetab.css({left:-10});if(a.left+b.current_w+20>$(window).width()){var l=b.current_w-b.subdialogue.src_w,i=b.subdialogue.src_element.children(".mark"),m=i.width()-1,a="auto";j=i.hasClass("dialoguemark")?-10:-10;f+=" flip-hor";m=i.hasClass("dialoguemark")?m+10:10;i.hasClass("dialoguemark");b.subdialogue.subdialoguetab.css({left:l-10,paddingRight:m})}else a=
-10;b.instance.addClass("subdialogue"+f).css({top:c,left:a,bottom:h,right:j});var n=$("<div/>",{"class":"blockedtab drag",css:{display:"none"}}).click(function(){uai.dialogue.stopLast();$(this).remove()});b.subdialogue.subdialoguetab.click(function(b){$(b.target).hasClass("dialogueborder")||(uai.dialogue.stopLast(),n.remove())});$("#dialoguebutton").prev(".dialogueinner").mousedown(function(b){console.log("close sub?");$(b.target).parents(".dialogue").eq(0)!=instance[0]&&$(b.target).parents(".dialogue").eq(1)!=
instance[0]&&$(b.target).parents(".dialogue").eq(2)!=instance[0]&&$(b.target).parents(".dialogue").eq(3)!=instance[0]&&uai.dialogue.stopSubDialogue(instance)})};Dlg.prototype.keepInSight=function(a,c){var f=!c?a:c.helper;if(!f)f=b.lastinstance;var h,j,l,i;h=_toolll.scrll.scrollTop();h=f.offset().top-h;j=f.offset().left;l=f.width()+20;i=f.height()+20;var m=$(window),n;n=m.width();var m=m.height(),k,q;h<0&&(k="0");j<0&&(q="0");h+i>m&&(k=m-i);j+l>n&&(q=n-l);(k||q)&&f.animate({top:k,left:q},250)}}
var dlgnr=0;
function Dialogue(){var c=this;c.instances=[];c.subinstances=[];Dialogue.prototype.insert=function(a){dlgnr++;(new Dlg(c,dlgnr)).parse(a)};Dialogue.prototype.lockPageScroll=function(){var a=_toolll.scrll.scrollTop(),b=$("body").height();$("#toolll").width();var c=$("<div/>",{id:"fakescroll"}),b=$("<div/>",{id:"fakescrollheight",css:{height:b}});$("body").css({overflow:"hidden"});$("body").append(c.append(b));c.scrollTop(a)};Dialogue.prototype.ulockPageScroll=function(){};Dialogue.prototype.stopThis=function(a){if(c.dontstop)return!1;
var b=$("#dialogue_"+a),e=$("#dialoguecurtain_"+a);b.remove();e.remove();$.each(this.activedialogueids,function(b,d){d==a&&c.activedialogueids.splice(b,1)});var d=this.instances;$.each(d,function(c,e){console.log(e);console.log(a);console.log(b);e[0]==b[0]&&d.splice(c,1)})};Dialogue.prototype.stopInstance=function(a){if(c.dontstop||a&&a.hasClass("dontstop"))return!1;if(typeof toolll!="undefined"&&typeof toolll.itemzoom!="undefined"&&toolll.itemzoom.holdnav)return!1;if(!c.instances.length||!a)return!1;
$.each(c.instances,function(b,e){$.isArray(e)&&(console.log("Array!"),curtn=e[1],e=e[0]);e&&e[0]==a[0]&&c.instances.splice(b,1)});$.isArray(a)?(a[0].remove(),a[1].remove()):a.remove();this.subinstances=[]};Dialogue.prototype.stopLast=function(){this.stopInstance(this.instances[this.instances.length-1])};Dialogue.prototype.stopSubDialogue=function(a){var b=a.parent().children(".dialogue");a.unbind("mousedown");this.stopInstance(b)};Dialogue.prototype.getLast=function(){if(this.instances.length)return this.instances[this.instances.length-
1]};Dialogue.prototype.stopAll=function(){$.each(this.instances,function(a,b){c.stopInstance(b)})}};$(".input.button").live("mousedown",function(){$(this).addClass("buttondown")}).live("mouseup mouseout",function(){$(this).removeClass("buttondown")});function Styl(){Styl.prototype.title=function(c,a,b){a=a?a:"m";b=" "+b||"";return $("<div/>").addClass("inputtitle").addClass(a+b).html(c)};Styl.prototype.devision=function(c){return $("<div/>").addClass("devision").addClass(c||"m")};Styl.prototype.space=function(c){return $("<div/>").addClass("inputspace").addClass(c||"m")}}
function Input(){var c=this;c.props={dialogueMark:"<div class='dialogue-mark'></div>",selectButtonMark:"<div class='select-mark'><div></div></div>"};Input.prototype.setDefaults=function(a){c.props=$.extend(!0,c.props,a)};Input.prototype.button=function(a){if(a){var b=$.extend(!0,{conditional:a.conditional||!0,id:a.id||"",label:a.label||"",classname:a.classname||"",fnctn:"",submit:a.submit?"submit":"",name:a.name||"",colorpicker:a.colorpicker||!1,icon:a.icon||"",iconclass:a.icon?" icon":"",subdialogue:!1},
a),c="";if(!b.conditional)return $();if(b.dialogue||b.colorpicker)c=b.dialogue=="set"||b.colorpicker?$("<div/>",{"class":"mark dialoguemark"}).append(this.props.dialogueMark):$("<div/>",{"class":"mark"}).append(this.props.dialogueMark);var d=b.dialogue=="set"?" dialoguebutton":"";b.subdialogue&&(c=$("<div/>",{"class":"mark"}).append("<div class='select-mark'><div></div></div>"));if(b.colorpicker){b.colorpicker.width=b.colorpicker.width||204;a=b.colorpicker.element?b.colorpicker.element.css("background-color"):
b.colorpicker.color;if($("#rte_color").length&&$("#rte_color").parents(".tab.active").length&&!b.colorpicker.color)a=$("#rte_color").find(".mark>div").css("background-color"),b.colorpicker.color=a.replace(RegExp("(rgb\\(|rgba\\(|\\))","gi"),"");b.colorpicker.color&&!b.colorpicker.color.match(/rgb/)&&(a=b.colorpicker.color.split(",").length==4?"rgba("+b.colorpicker.color+")":"rgba("+b.colorpicker.color+",1)");var f=Math.floor(Math.random()*1E3),h=b.colorpicker.colormetooid?b.colorpicker.colormetooid:
"colormark"+f,f=a?$("<div/>",{"class":"color-mark transparency"}):$("<div/>",{"class":"color-mark nocolor"}),c=$("<div/>",{"class":"mark dialoguemark"}).append(f,$("<div/>",{"class":"color-mark",id:h,css:{backgroundColor:a}}).hover(function(){$(this).css({backgroundImage:"url(/_u_uai/_style/_image/colorpicker_mark_shortcut_.png)",backgroundPosition:"0 0"})},function(){$(this).css({backgroundImage:""})}));b.fnctn=function(a){var c=$("#"+b.colorpicker.colormetooid).css("background-color");b.colorpicker.color=
c||b.colorpicker.color;if(b.colorpicker.swatches&&!$(a.target).hasClass("color-mark"))b.colorpicker.colormetooid=h,uai.dialogue.insert({subdialogue:$(this),hover:$.isArray(b.colorpicker.hover)?b.colorpicker.hover:!1,tabs:$("<div/>",{"class":"tabgroup"}).append(uai.colorpicker.swatchGrid(b.colorpicker),uai.input.button({label:"More Colors",id:"more_colors",conditional:userdata.account.user_level>1,colorpicker:{hover:$.isArray(b.colorpicker.hover)?b.colorpicker.hover:!1,fnctn:b.colorpicker.fnctn,color:b.colorpicker.color,
colormetooid:h}}))});else{if($("#picker").length)return!1;uai.dialogue.insert({positionTimeout:100,hover:$.isArray(b.colorpicker.hover)?b.colorpicker.hover:!1,tabs:{tabcontent:$("<div/>").append(uai.colorpicker.start({fnctn:b.colorpicker.fnctn,color:b.colorpicker.color,colormetooid:h}),uai.input.button({conditiontal:b.colorpicker.transp,label:"+",fnctn:function(){alert("Comming Soon! (Just drag the color to the swatch pane for now)")}}))}});setTimeout(uai.dialogue.fixInstanceWidth,10)}}}}b.spinner&&
$("<div/>",{"class":"uai-spinner"}).append($("<img/>",{src:"/_p/_style/_image/loading_animated.svg",alt:"Loading ..."}));var d=$("<div/>",{"class":"input-wrap "+b.classname+d}),j=$("<button/>",{"class":"input button "+b.classname+b.iconclass,id:b.id,selectable:!1,click:b.fnctn,html:b.icon?typeof b.icon=="object"?$("<div/>").append($("<div/>",{"class":"icon",css:{backgroundImage:"url("+b.icon.url+")",backgroundPosition:"-"+(b.icon.column-1)*22+"px -"+(b.icon.row-1)*22+"px"},html:""}),$("<span/>",{html:"&nbsp;&nbsp;"+
b.label})):$("<div/>",{"class":""}).append($("<img/>",{src:b.icon}),$("<span/>",{html:"&nbsp;&nbsp;"+b.label})):b.label,value:b.colorpicker.color||"",name:b.name}).append(c),l=$("<div/>",{"class":"uai-spinner running"}).append($("<img/>",{src:"/_p/_style/_image/loading_animated.svg",alt:"Loading ..."}));j.data("uai",{spinner:{on:function(){j.append(l)},off:function(){l.remove()}},name:function(a){a=a?a:b.label;j.html(b.icon?'<img src="'+b.icon+'"/>&nbsp;'+a:a).append(c)}});d.append(j);return d};Input.prototype.togglebutton=
function(a){var b,c;function d(a){f.single&&a.parent().children().not(a).each(function(){$(this).removeClass("active").data("ti").active=!1});a.toggleClass("active");a.hasClass("active")?(a.data("ti").active=!0,b.data("val",a.data("ti").value)):a.data("ti").active=!1}var f=$.extend(!0,{conditional:a.conditional||!0,single:!1,novalue:!1,toggleitems:[],fnctn:"",id:""},a);if(!f.conditional)return $();a=$("<label/>",{css:{"float":""},html:f.label,"for":f.id});c=$("<div/>",{"class":"input-wrap "+f.classname});
b=$("<div/>",{"class":"togglebutton "+f.classname,id:f.id});$(f.toggleitems).each(function(a,c){b.append($("<div/>",{"class":"input button toggle"+(c.active?" active":"")+(a==0?" first":"")+(a==f.toggleitems.length-1?" last":""),html:c.name,mousedown:function(){if(!f.single||f.novalue||!$(this).data("ti").active)d($(this)),f.fnctn($(this))}}).data("ti",c))});b.data("uai",{getValue:function(){var a="";b.children(".toggle").each(function(){if($(this).data("ti").active)a=$(this).data("ti").value});return a},
setValue:function(a){$.isArray(a)||(a=[a]);var c=b.children(".toggle");c.removeClass("active").data("ti").active=!1;$.each(a,function(a,b){$.each(c,function(){if($(this).data("ti").value==b)$(this).addClass("active"),$(this).data("ti").active=!0})})},setTitle:function(a){$.isArray(a)||(a=[a]);var c=b.children(".toggle");c.removeClass("active").data("ti").active=!1;$.each(a,function(a,b){$.each(c,function(){var a=RegExp("^"+b+"$","i");if($(this).text().match(a))$(this).addClass("active"),$(this).data("ti").active=
!0})})}});c.append(a,b);return c};Input.prototype.checkbox=function(a){var b={label:a.label?a.label:function(){cnsl.log("fatal","uai.input.checkbox > no label!")},checked:a.checked?!0:!1,data:a.data||{},width:a.width||90,classname:a.classname||"",fnctn:a.fnctn||"",callback:a.callback||"",column:a.column||!1,name:a.name||"name",id:a.id||"check"+Math.floor(Math.random()*1E6)},c=$.extend(!0,b,a),a={wrap:$("<div/>",{"class":"input-wrap "+c.classname}),label:function(){return $("<label/>",{css:{"float":""},
html:c.label,"for":c.id})},customcheckbox:function(){return $("<span/>",{"class":c.checked?"chckbx checked":"chckbx"})},checkboxinput:function(){return $("<input/>",{type:"checkbox",name:c.name,id:c.id,change:function(){$(this).parent().find(".chckbx").toggleClass("checked");if(c.column){$(this).parents(".innertab:first").data();var a=this.checked.toString(),a=a.replace("false","-").replace("true","1");c.json&&uai.input.support.findInJson(c,a.replace(/-/,0))}c.fnctn&&c.fnctn()}}).attr({checked:c.checked})}};
a.wrap.append(a.label().append(a.customcheckbox()),a.checkboxinput());return a.wrap};Input.prototype.selectbutton=function(a){var b=noconsole;b.groupCollapsed("Input._selectbutton");var e=$.extend(!0,{conditional:a.conditional||!0,width:a.width||"auto",list:a.list||[],fnctn:a.fnctn||function(){},classname:a.classname||"",id:a.id||"",name:a.name||""},a);if(!e.conditional)return $();var d=$("<div/>"),f="\u2013",h,j;$(e.list).each(function(a,b){if(b.active)f=b.title;var c;c=b.active?$('<option value="'+
b.value+'" selected>'+b.title+"</option>"):$("<option/>",{value:b.value,text:b.title});b.group&&b.group!=j?(h=$("<optgroup/>",{label:b.group}),j=b.group,d.append(h.append(c))):b.group&&b.group==j?h.append(c):d.append(c)});$("<div/>",{"class":"mark"}).append(c.props.selectButtonMark);var l={wrap:$("<div/>",{"class":"input-wrap "+e.classname}),label:function(){return e.label?$("<label/>",{css:{"float":""},html:e.label,"for":e.id}):""},select:$("<select/>",{tabindex:99,css:{width:e.width}}).attr({name:e.name}).bind("change",
function(){l.button.data("uai").setButtonText($(this).val());l.button.data("uai").setSelection($(this).val())}).change(e.fnctn),button:$("<div/>",{"class":"input button selectbutton "+e.classname,id:e.id,css:{width:e.width}}),buttontext:$("<div/>",{"class":"labelcontainer",html:f}).append($("<div/>",{"class":"mark"}).append(c.props.selectButtonMark))};l.wrap.append(l.label(),l.button.append(l.buttontext,l.select.append(d.html())));var i=RegExp("\"|'","g");l.button.data("uai",{spinner:{on:function(){l.button.append(l.spinner)},
off:function(){l.spinner.remove()}},setSelection:function(a){if(!a)return l.select.find("option").each(function(){$(this).removeAttr("selected")}),!1;l.select.val(a);var a=a.replace(i,""),b=RegExp("^"+a+"$","gi");a=="~ Multiple"||a=="~"&&e.id=="rte_fontfamily"||l.select.find("option").removeAttr("selected").each(function(){var c=RegExp("^"+$(this).val().replace(/ /g,"\\ ")+"$","gi");($(this).val().match(b)||$(this).text().match(b)||a.match(c))&&$(this).attr({selected:!0})})},setButtonText:function(a){if(!a)return!1;
var a=a.replace(i,""),b;l.select.find("option").each(function(){var d=RegExp($(this).val().replace(/ /g,"\\ "),"gi");if($(this).val()==a||$(this).text()==a||a.match(d))l.buttontext.html($(this).text()).append($("<div/>",{"class":"mark"}).append(c.props.selectButtonMark)),b=!0});b||l.buttontext.html(a).append($("<div/>",{"class":"mark"}).append(c.props.selectButtonMark))},name:function(a){a=a?a:e.current;l.button.html(e.icon?'<img src="'+e.icon+'"/>&nbsp;'+a:a).append($("<div/>",{"class":"mark"}).append(c.props.selectButtonMark),
l.select.append(d))}});b.groupEnd();return l.wrap};Input.prototype.text=function(a){var b,e,d,f,h,j;function l(a,c){if(c.which!=38&&c.which!=40)return!1;c.preventDefault();var i,k=c.metaKey||toolll.shift?b:e;c.which==38?i=a.val()*1+k:c.which==40&&(i=a.val()*1-k);i<d?i=d:i>f&&(i=f);i.toString().match(/\./)&&i.toString().match(/\.[0-9]*/)[0].length-1>=h&&(i=Math.round(i*j)/j);a.val(i)}var i=$.extend(!0,{label:a.label||"",value:a.value||"",allowed:a.allowed||"[A-Za-z0-9_-]",data:a.data||{},width:a.width||
90,classname:"",fnctn:a.fnctn||"",callback:a.callback||"",placeholder:a.placeholder||"",autofocus:a.autofocus||"",column:a.column||!1,select:a.select||"",list:a.list||[],id:a.id||"",name:a.name?a.name:"",type:a.type||"text",enter:a.enter||"",iframed:!1,increment:!1,conditional:a.conditional||!0},a);if(i.classname&&!i.classname.match(/^ /))i.classname=" "+i.classname;if(!i.conditional)return $();b=void 0;e=void 0;d=void 0;f=void 0;h=void 0;j=void 0;$.isArray(i.increment)?(e=i.increment[0],b=i.increment[1]):
(e=i.increment,b=i.increment*5);$.isArray(i.allowed)&&(d=i.allowed[0]*1,f=i.allowed[1]*1,h=i.allowed[2]?i.allowed[2]*1:0,j=Math.pow(10,h));var a=i.select&&i.list?" islist":"",m=i.iframed?" iframed":"",n=i.iframed?"fid_"+Math.round(Math.random()*1E12+1):"",k={};k.wrap=$("<div/>",{"class":"input-wrap "+i.classname+a});k.label=function(){return i.label&&!i.placeholder?$("<label/>",{text:i.label,click:function(){$(this).next(":text").focus().select()}}):""};k.options=function(){if(i.select&&i.list){var a=
"";$(i.list).each(function(b,c){i.value=c.active?c.title:i.value;a+=c.active?'<option selected="selected" value="'+c.title+'">'+c.title+"</option>":'<option value="'+c.title+'">'+c.title+"</option>"});return $("<div/>",{"class":"selecttextbutton",css:{}}).append($("<select/>").attr("tabindex",999).change(i.fnctn).change(function(){var a=$(this).val();k.textinput.val(a).change();k.iframetextinput.val(a).change()}).html(a),c.props.selectButtonMark)}else return""};k.placeholder=$("<label/>",{text:i.placeholder,
"class":"placeholdertext",html:i.placeholder,click:function(){(i.iframed?k.iframetextinput:k.textinput).focus().select()}});k.hidden=$("<input/>",{id:i.id,"class":"input text",width:i.width,type:"text",value:i.value,change:function(){k.textinput.val($(this).val())}});k.iframe=$("<iframe/>",{src:"about:blank",sandbox:"allow-same-origin allow-forms allow-scripts",seamless:!0,width:i.width+9,height:23,id:n,load:function(){var a=k.iframe[0].contentWindow;$(a).blur(function(){selObj=a.getSelection();selObj.removeAllRanges()});
k.iframe.contents().keydown(function(a){if(a.which==16)toolll.shift=!0}).keyup(function(a){if(a.which==16)toolll.shift=!1;k.iframetextinput.addClass("set")}).find("body").css({overflow:"hidden"}).empty().append(k.iframetextinput).prev().append($("<style/>",{type:"text/css",media:"screen"}).text("body{\t\t\t\t\t\t\tmargin: 0;\t\t\t\t\t\t\tpadding:0;\t\t\t\t\t\t\toverflow:hidden;\t\t\t\t\t\t\tbackground: transparent;\t\t\t\t\t\t}\t\t\t\t\t\tinput{\t\t\t\t\t\t\tbackground:transparent;\t\t\t\t\t\t\tborder:none;\t\t\t\t\t\t}\t\t\t\t\t\t.input.text{\t\t\t\t\t\t\tposition: relative;\t\t\t\t\t\t\theight: 100%;\t\t\t\t\t\t\tpadding: 3px 3px 1px 4px;\t\t\t\t\t\t\tfont-weight: bold;\t\t\t\t\t\t\tpadding-top: 5px;\t\t\t\t\t\t\tpadding-bottom: 3px;\t\t\t\t\t\t\tline-height:8px;\t\t\t\t\t\t\tcolor: rgb(40,40,40)\t\t\t\t\t\t}\t\t\t\t\t\t.input.text.large{\t\t\t\t\t\t\tpadding-top: 12px;\t\t\t\t\t\t\tpadding-bottom: 2px;\t\t\t\t\t\t\tline-height:12px;\t\t\t\t\t\t}\t\t\t\t\t\t.input.text:focus{\t\t\t\t\t\t\t-webkit-transition-property: -webkit-box-shadow;\t\t\t\t\t\t\t-webkit-transition-duration: 0.3s;\t\t\t\t\t\t\t-webkit-box-shadow: 0 1px 4px rgba(30,40,130,0.25);\t\t\t\t\t\t\t-webkit-box-shadow: 0 0px 22px rgba(189,231,255,1);\t\t\t\t\t\t\t-webkit-box-shadow: 0 0px 22px rgba(255,255,255,1);\t\t\t\t\t\t\toutline: none;\t\t\t\t\t\t\t}\t\t\t\t\t\t\t@blue_fade: rgb(186, 200, 219);\t\t\t\t\t\t\t@blue_dark: rgb(131, 147, 170);\t\t\t\t\t\t\t@blue_light: rgb(104, 188, 255);\t\t\t\t\t\t.input.classed{\t\t\t\t\t\t\tcolor: rgb(131, 147, 170);\t\t\t\t\t\t\ttext-shadow: 0 0 3px rgb(104, 188, 255);\t\t\t\t\t\t}\t\t\t\t\t\t.input.set.classed{\t\t\t\t\t\t\tcolor: red;\t\t\t\t\t\t}\t\t\t\t\t\t.input.classed, .input.setclassed {\t\t\t\t\t\t  color: #8393aa !important;\t\t\t\t\t\t  text-shadow: 0 0 3px #68bcff !important;\t\t\t\t\t\t  /*    text-shadow: 0 0 3px white !important;*/\t\t\t\t\t\t\t\t\t\t\t\t}\t\t\t\t\t\t.input.setclassed.set{\t\t\t\t\t\t\tcolor: red !important;\t\t\t\t\t\t}\t\t\t\t\t\t.input.classed.set{\t\t\t\t\t\t\tcolor: red !important;\t\t\t\t\t\t}"))}});
k.textinput=$("<input/>",{"class":"input text"+m+i.classname,id:i.id,width:i.width,type:i.type,name:i.name,value:i.value,tabindex:i.iframed?999:"",autofocus:i.autofocus&&!i.iframed?!0:!1,spellcheck:!1,change:i.iframed?function(){var a=$(this).val();k.iframetextinput.val(a);if(i.id=="url_input"&&!k.iframetextinput.hasClass("hacked")){var b=k.textinput.parents(".subsubtab, .subtab, .tab").not(".active");b.css({display:"block",height:0,padding:0,visibility:"hidden",margin:0,border:0});var d=k.iframetextinput.clone(!0);
k.iframetextinput.replaceWith(d);k.iframetextinput=d.addClass("hacked");c.inputtexthack&&clearTimeout(c.inputtexthack);c.inputtexthack=setTimeout(function(){b.css({display:"",height:"",padding:"",visibility:"",margin:"",border:""})},2)}$(this).attr("class").replace(/ ?iframed/gi,"");a?k.placeholder.hide():k.placeholder.removeClass("placeholdertextfocus").show()}:i.fnctn,autocomplete:"on",blur:function(){i.blur&&i.blur()},keyup:function(){i.prevval!=$(this).val()&&(i.iframed&&c.iframecall&&k.textinput.val($(this).val()),
$(this).change())},keydown:function(a){i.prevval=$(this).val();i.increment&&l($(this),a)},selectstart:function(){if(i.iframed)return!1}}).bind("paste",function(){i.iframed&&c.iframecall&&k.textinput.val($(this).val());$(this).change()});k.iframetextinput=$("<input/>",{"class":"input text"+i.classname,id:i.id,css:{width:"300%"},type:i.type,name:i.name,value:i.value,autofocus:!i.autofocus?!1:!0,spellcheck:!1,change:i.fnctn,autocomplete:"on",blur:function(){},keyup:function(){i.iframed&&k.textinput.val($(this).val());
$(this).change()},keydown:function(a){l($(this),a)}}).bind("paste",function(){var a=$(this);setTimeout(function(){i.iframed&&k.textinput.val(a.val());a.change().focus()},10)});i.placeholder&&(a=i.iframed?k.iframetextinput:k.textinput,i.value&&k.placeholder.hide(),a.keydown(function(){k.placeholder.hide()}).keyup(function(){$(this).val()?k.placeholder.hide():k.placeholder.show()}).blur(function(){$(this).val()?k.placeholder.hide():k.placeholder.removeClass("placeholdertextfocus").show()}).focus(function(){if($(this).val()){var a=
$(this).val();console.log("val",a);$(this).val("XXX").val(a);k.placeholder.addClass("placeholdertextfocus").hide()}else $(this).val(" ").val(""),k.placeholder.addClass("placeholdertextfocus").show()}).bind("paste",function(){var a=$(this);setTimeout(function(){a.val()?k.placeholder.hide():k.placeholder.removeClass("placeholdertextfocus").show()},10)}));i.enter&&(a=i.iframed?k.iframetextinput:k.textinput,a.keydown(function(a){a.which==13&&i.enter()}));if(i.iframed){var q=function(){k.textinput.blur()};
k.textinput.focus(function(){k.iframe.parents(".dialogue").bind("mousedown",q)}).blur(function(){k.iframe.parents(".dialogue").unbind("mousedown",q)})}i.iframed?k.wrap.append(k.label(),k.placeholder,k.iframe,k.textinput,k.options()):k.wrap.append(k.label(),k.placeholder,k.textinput,k.options());return k.wrap};Input.prototype.date=function(a){var b=$.extend(!0,{label:a.label||"Label",checked:a.checked?!0:!1,value:a.value||"00-00-00",data:a.data||{},width:a.width||90,format:a.format||"yy-mm-dd",classname:a.classname||
"",fnctn:a.fnctn||"",callback:a.callback||"",column:a.column||"date",name:a.name||"name"},a),a={wrap:$("<div/>",{"class":"input-wrap "+b.classname}),label:function(){return b.label?$("<label/>").text(b.label).click(function(){$(this).next(":text").focus().select()}):""},dateinput:function(){return $("<input/>",{"class":"input text",id:b.id,width:b.width,type:b.type,name:b.name,value:b.value,autofocus:b.autofocus,spellcheck:!1,change:b.fnctn}).datepicker({dateFormat:b.format,showAnim:"fadeIn",duration:100})}};
a.wrap.append(a.label(),a.dateinput());return a.wrap};Input.prototype.textarea=function(a){if(a){var b=$.extend(!0,{conditional:a.conditional||!0,id:a.id||"",label:a.label||"",classname:a.classname||"",fnctn:a.fnctn||"",name:a.name||"",width:a.width,height:a.height,autofocus:a.autofocus},a);if(!b.conditional)return $()}var a=$("<div/>",{"class":"input-wrap "+b.classname}),c=$("<label/>",{css:{"float":""},html:b.label,"for":b.id}),d=$("<textarea/>",{"class":"input textarea "+b.classname,id:b.id,change:b.fnctn,
enter:b.enter,value:b.value,name:b.name,label:b.label,autofocus:b.autofocus,css:{width:b.width,height:b.height}}).keyup(b.fnctn),f=$("<div/>",{"class":"uai-spinner running"}).append($("<img/>",{src:"/_p/_style/_image/loading_animated.svg",alt:"Loading ..."}));d.data("uai",{spinner:{on:function(){c.append(f)},off:function(){c.remove()}},name:function(a){a=a?a:b.label;(void 0).html(a).append(mark)}});a.append(c,d);return a};Input.prototype.richtextarea=function(a){if(a)var b={},b=this.support.combineObjects([{label:a.label||
"",value:a.value||"",data:a.data||{},height:a.height||55,classname:a.classname||"",fnctn:a.fnctn||"",callback:a.callback||"",minHeight:a.minHeight||"65",resizable:a.resizable||!0,position:a.position||"bottom",id:a.id||""},a.column?{sqlid:a.data.sqlid?a.data.sqlid:function(){cnsl.log("fatal","uai.input.text > no sqlid!")},json:a.json?a.json:function(){cnsl.log("fatal","uai.input.text > no json!")}}:"",!a.column?{type:a.type||"text",name:a.name?a.name:function(){cnsl.log("fatal","uai.input.text > no sqlid!")}}:
""]);a={wrap:$("<div/>",{"class":"input-wrap "+b.classname}),handle:function(){return b.resizable?$("<div/>",{"class":"resize-handle "+b.position}).append($("<div/>",{"class":"ui-resizable-handle ui-resizable-s",mouseover:function(){var a=b.target||$(this).parent().parent();$(this).unbind("mouseover").parent().remove();$(a).resizable({handles:"s",minHeight:b.minHeight})}})):""},textbox:function(){return $("<div/>",{"class":"rte_div",css:{height:b.height}}).append($("<div/>",{id:b.id,"class":"rte",
html:b.value}))}};return a.wrap.append(a.textbox().append(a.handle()))};Input.prototype.upLoad=function(){};Input.prototype.uploadArea=function(a){o=$.extend(!0,{single:!1,floating:!1,toggleitems:[],custombuttonid:"",browsebutton:!0,fnctn:"",area_id:"upload_area",list_id:"upload_list",welcometext:"I Am Area",dragovertext:"Drop to upload!",action:"/user_editor/_php/_upload/upload.php",onaddtolist:function(){},onuploadstart:function(){},onuploadready:function(){}},a);var b={wrap:$("<div/>",{"class":"input-wrap "}),
uploadarea:function(){return $("<div/>",{id:o.area_id,"class":"tabgroup"}).append(b.uploadlist().append(b.welcometext),b.browsebutton()).resizable({handles:"se",maxWidth:650,minWidth:200,start:function(){$(this).parents(".dialogue").css({width:""})}})},uploadlist:function(){return $("<ul/>",{id:o.list_id})},welcometext:$("<div/>",{id:"upload_welcome",text:o.welcometext}),browsebutton:function(){if(o.browsebutton)return $("<div/>",{id:"upload_browsebutton",text:"Browse Computer"})}};b.wrap.append(b.uploadarea());
(!o.floating||floating)&&setTimeout(function(){uai.activeuploader=new Uploader;uai.activeuploader.init({single:o.single,element:$("#"+o.area_id)[0],button:$("#upload_browsebutton")[0],droparea:$("#"+o.area_id)[0],welcome:$("#upload_welcome")[0],dragovertext:o.dragovertext,list:$("#"+o.list_id)[0],action:o.action,onComplete:function(a,b,c){o.onuploadready(a,b,c)},onaddtolist:function(a,b){o.onaddtolist(a,b)}})},500);return b.wrap};Input.prototype.support={combineObjects:function(a){var b={};$(a).each(function(a,
c){for(key in c)b[key]=c[key]});return b},findInJson:function(a,b){cnsl.log("update","findInJson(): old:"+a.value+" new:"+b);$(json[a.json[0]]).each(function(c,d){if(a.json[2])$.each(d,function(c,d){if(a.json[3])$.each(d,function(c,d){if(a.json[4])$.each(d,function(c,d){if(a.json[5])$.each(d,function(c,d){if(a.sqlid==d.sqlid)return d[a.json[5]]=b,!1});else if(a.sqlid==d.sqlid)return d[a.json[4]]=b,!1});else if(a.sqlid==d.sqlid)return d[a.json[3]]=b,!1});else if(a.sqlid==d.sqlid)return d[a.json[2]]=
b,!1});else if(a.sqlid==d.sqlid)return d[a.json[1]]=b,!1})}}}var input=new Input,Style=function(){Style.prototype.title=function(c){return $("<div/>").addClass("inputtitle").html(c)};Style.prototype.devision=function(c){return $("<div/>",{"class":"devision t"+c})};Style.prototype.space=function(c){c=c||"m";return $("<div/>").addClass("inputspace "+c)}},Validate=function(){Validate.prototype.chars=function(){}};
function findInJson(c,a){cnsl.log("update","findInJson(): old:"+c.value+" new:"+a);$(json[c.json[0]]).each(function(b,e){if(c.json[2])$.each(e,function(b,e){if(c.json[3])$.each(e,function(b,d){if(c.json[4])$.each(d,function(b,d){if(c.json[5])$.each(d,function(b,d){if(c.sqlid==d.sqlid)return d[c.json[5]]=a,!1});else if(c.sqlid==d.sqlid)return d[c.json[4]]=a,!1});else if(c.sqlid==d.sqlid)return d[c.json[3]]=a,!1});else if(c.sqlid==e.sqlid)return e[c.json[2]]=a,!1});else if(c.sqlid==e.sqlid)return e[c.json[1]]=
a,!1})}g={l:!0};ml={nfinp:function(c,a){switch(c){case "space":return g.l?"The filename "+a+" contains a space. Please remove it and try again.":"De bestandsnaam "+a+" bevat een spatie. Verwijder deze en probeer het opnieuw."}}};function Uai(){Uai.prototype.dialogue=new Dialogue;Uai.prototype.input=new Input;Uai.prototype.styl=new Styl;if(typeof Rte!="undefined")Uai.prototype.rte=new Rte;if(typeof ColorPicker!="undefined")Uai.prototype.colorpicker=new ColorPicker};(function(c){function a(a){var b=a||window.event,f=[].slice.call(arguments,1),h=0,j=0,l=0,a=c.event.fix(b);a.type="mousewheel";a.wheelDelta&&(h=a.wheelDelta/120);a.detail&&(h=-a.detail/3);l=h;b.axis!==void 0&&b.axis===b.HORIZONTAL_AXIS&&(l=0,j=-1*h);b.wheelDeltaY!==void 0&&(l=b.wheelDeltaY/120);b.wheelDeltaX!==void 0&&(j=-1*b.wheelDeltaX/120);f.unshift(a,h,j,l);return c.event.handle.apply(this,f)}var b=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var c=
b.length;c;)this.addEventListener(b[--c],a,!1);else this.onmousewheel=a},teardown:function(){if(this.removeEventListener)for(var c=b.length;c;)this.removeEventListener(b[--c],a,!1);else this.onmousewheel=null}};c.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
// StyleFix 1.0.2 + PrefixFree 1.0.6 / Lea Verou / MIT license
(function(){function h(a,b){return[].slice.call((b||document).querySelectorAll(a))}if(window.addEventListener){var e=window.StyleFix={link:function(a){try{if("stylesheet"!==a.rel||a.hasAttribute("data-noprefix"))return}catch(b){return}var c=a.href||a.getAttribute("data-href"),f=c.replace(/[^\/]+$/,""),i=a.parentNode,d=new XMLHttpRequest,g;d.onreadystatechange=function(){4===d.readyState&&g()};g=function(){var b=d.responseText;if(b&&a.parentNode&&(!d.status||400>d.status||600<d.status)){b=e.fix(b,
!0,a);f&&(b=b.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(b,a,c){return!/^([a-z]{3,10}:|\/|#)/i.test(c)?'url("'+f+c+'")':b}),b=b.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+f,"gi"),"$1"));var c=document.createElement("style");c.textContent=b;c.media=a.media;c.disabled=a.disabled;c.setAttribute("data-href",a.getAttribute("href"));i.insertBefore(c,a);i.removeChild(a)}};try{d.open("GET",c),d.send(null)}catch(k){"undefined"!=typeof XDomainRequest&&(d=new XDomainRequest,d.onerror=d.onprogress=
function(){},d.onload=g,d.open("GET",c),d.send(null))}a.setAttribute("data-inprogress","")},styleElement:function(a){var b=a.disabled;a.textContent=e.fix(a.textContent,!0,a);a.disabled=b},styleAttribute:function(a){var b=a.getAttribute("style"),b=e.fix(b,!1,a);a.setAttribute("style",b)},process:function(){h('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);h("style").forEach(StyleFix.styleElement);h("[style]").forEach(StyleFix.styleAttribute)},register:function(a,b){(e.fixers=
e.fixers||[]).splice(void 0===b?e.fixers.length:b,0,a)},fix:function(a,b){for(var c=0;c<e.fixers.length;c++)a=e.fixers[c](a,b)||a;return a},camelCase:function(a){return a.replace(/-([a-z])/g,function(b,a){return a.toUpperCase()}).replace("-","")},deCamelCase:function(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}};(function(){setTimeout(function(){h('link[rel="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",StyleFix.process,!1)})()}})();
(function(h){function e(b,c,f,i,d){b=a[b];b.length&&(b=RegExp(c+"("+b.join("|")+")"+f,"gi"),d=d.replace(b,i));return d}if(window.StyleFix&&window.getComputedStyle){var a=window.PrefixFree={prefixCSS:function(b,c){var f=a.prefix,b=e("functions","(\\s|:|,)","\\s*\\(","$1"+f+"$2(",b),b=e("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+f+"$2$3",b),b=e("properties","(^|\\{|\\s|;)","\\s*:","$1"+f+"$2:",b);if(a.properties.length)var i=RegExp("\\b("+a.properties.join("|")+")(?!:)","gi"),b=e("valueProperties","\\b",
":(.+?);",function(a){return a.replace(i,f+"$1")},b);c&&(b=e("selectors","","\\b",a.prefixSelector,b),b=e("atrules","@","\\b","@"+f+"$1",b));return b=b.replace(RegExp("-"+f,"g"),"-")},property:function(b){return(a.properties.indexOf(b)?a.prefix:"")+b},value:function(b){b=e("functions","(^|\\s|,)","\\s*\\(","$1"+a.prefix+"$2(",b);return b=e("keywords","(^|\\s)","(\\s|$)","$1"+a.prefix+"$2$3",b)},prefixSelector:function(b){return b.replace(/^:{1,2}/,function(b){return b+a.prefix})},prefixProperty:function(b,
c){var f=a.prefix+b;return c?StyleFix.camelCase(f):f}};(function(){var b={},c=[],f=getComputedStyle(document.documentElement,null),i=document.createElement("div").style,d=function(a){if("-"===a.charAt(0)){c.push(a);var a=a.split("-"),d=a[1];for(b[d]=++b[d]||1;3<a.length;)a.pop(),d=a.join("-"),StyleFix.camelCase(d)in i&&-1===c.indexOf(d)&&c.push(d)}};if(0<f.length)for(var g=0;g<f.length;g++)d(f[g]);else for(var e in f)d(StyleFix.deCamelCase(e));var g=0,j,h;for(h in b)f=b[h],g<f&&(j=h,g=f);a.prefix=
"-"+j+"-";a.Prefix=StyleFix.camelCase(a.prefix);a.properties=[];for(g=0;g<c.length;g++)e=c[g],0===e.indexOf(a.prefix)&&(j=e.slice(a.prefix.length),StyleFix.camelCase(j)in i||a.properties.push(j));"Ms"==a.Prefix&&!("transform"in i)&&!("MsTransform"in i)&&"msTransform"in i&&a.properties.push("transform","transform-origin");a.properties.sort()})();(function(){function b(a,b){e[b]="";e[b]=a;return!!e[b]}var c={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},
element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};c["repeating-linear-gradient"]=c["repeating-radial-gradient"]=c["radial-gradient"]=c["linear-gradient"];var f={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display"};a.functions=[];a.keywords=[];var e=document.createElement("div").style,d;for(d in c){var g=c[d],h=g.property,g=d+"("+g.params+")";!b(g,h)&&b(a.prefix+
g,h)&&a.functions.push(d)}for(var j in f)h=f[j],!b(j,h)&&b(a.prefix+j,h)&&a.keywords.push(j)})();(function(){function b(a){e.textContent=a+"{}";return!!e.sheet.cssRules.length}var c={":read-only":null,":read-write":null,":any-link":null,"::selection":null},f={keyframes:"name",viewport:null,document:'regexp(".")'};a.selectors=[];a.atrules=[];var e=h.appendChild(document.createElement("style")),d;for(d in c){var g=d+(c[d]?"("+c[d]+")":"");!b(g)&&b(a.prefixSelector(g))&&a.selectors.push(d)}for(var k in f)g=
k+" "+(f[k]||""),!b("@"+g)&&b("@"+a.prefix+g)&&a.atrules.push(k);h.removeChild(e)})();a.valueProperties=["transition","transition-property"];h.className+=" "+a.prefix;StyleFix.register(a.prefixCSS)}})(document.documentElement);
// Dynamic DOM plugin
(function(a){if(a)a.events={DOMNodeInserted:function(b){var b=b.target,c=b.nodeName;b.nodeType==1&&(/link/i.test(c)?a.link(b):/style/i.test(c)?a.styleElement(b):b.hasAttribute("style")&&a.styleAttribute(b))},DOMAttrModified:function(b){b.attrName==="style"&&(document.removeEventListener("DOMAttrModified",a.events.DOMAttrModified,false),a.styleAttribute(b.target),document.addEventListener("DOMAttrModified",a.events.DOMAttrModified,false))}},document.addEventListener("DOMContentLoaded",function(){document.addEventListener("DOMNodeInserted",
a.events.DOMNodeInserted,false);document.addEventListener("DOMAttrModified",a.events.DOMAttrModified,false)},false)})(window.StyleFix);
(function(a){if(a&&window.CSSStyleDeclaration)for(var b=0;b<a.properties.length;b++){var c=StyleFix.camelCase(a.properties[b]),d=a.prefixProperty(c),e=CSSStyleDeclaration.prototype,f=function(a){return function(){return this[a]}}(d),d=function(a){return function(b){this[a]=b}}(d);Object.defineProperty?Object.defineProperty(e,c,{get:f,set:d,enumerable:true,configurable:true}):e.__defineGetter__&&(e.__defineGetter__(c,f),e.__defineSetter__(c,d))}})(window.PrefixFree);
// Let jQuery set/get unprefixed CSS
(function($, self){
if(!$ || !self) {
	return;
}
for(var i=0; i<self.properties.length; i++) {
	var property = self.properties[i],
		camelCased = StyleFix.camelCase(property),
		PrefixCamelCased = self.prefixProperty(property, true);
	
	$.cssProps[camelCased] = PrefixCamelCased;
}
})(window.jQuery, window.PrefixFree);
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-csstransitions-prefixed-teststyles-testprop-testallprops-domprefixes
 */
;window.Modernizr=function(a,b,c){function x(a){i.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a)if(i[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+m.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.5.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={},p={},q={},r=[],s=r.slice,t,u=function(a,c,d,e){var h,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),k.appendChild(j);return h=["&#173;","<style>",a,"</style>"].join(""),k.id=g,(l?k:m).innerHTML+=h,m.appendChild(k),l||(m.style.background="",f.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.csstransitions=function(){return D("transition")};for(var E in o)w(o,E)&&(t=E.toLowerCase(),e[t]=o[E](),r.push((e[t]?"":"no-")+t));return x(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.testProp=function(a){return B([a])},e.testAllProps=D,e.testStyles=u,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},e}(this,this.document);/*
 * special event API with Hammer.JS
 * version 0.9
 * author: Damien Antipa
 * https://github.com/dantipa/hammer.js
 */
// (function ($) {
//     var hammerEvents = ['hold','tap','doubletap','transformstart','transform','transformend','dragstart','drag','dragend','swipe','release'];
// 
//     $.each(hammerEvents, function(i, event) {
// 
//         $.event.special[event] = {
// 
//             setup: function(data, namespaces, eventHandle) {
//                 var $target = $(this),
//                     hammer;
// 
//                 if (!$target.hammer) {
//                     $target.data('hammerjs', new Hammer(this, data));
//                 }
// 
//                 hammer = $target.data('hammerjs');
// 
//                 hammer['on'+ event] = function (ev) {
//                     $target.trigger($.Event(event, ev));
//                 };
//             },
// 
//             teardown: function(namespaces) {
//                 var $target = $(this),
//                     hammer = $target.data('hammerjs');
// 
//                 if(hammer && hammer['on'+ event]) {
//                     delete hammer['on'+ event];
//                 }
//             }
//         };
//     });
// }(jQuery));


/*
 * Hammer.JS jQuery plugin
 * version 0.3
 * author: Eight Media
 * https://github.com/EightMedia/hammer.js
 */
jQuery.fn.hammer = function(options)
{
    return this.each(function()
    {
        var hammer = new Hammer(this, options);

        var $el = jQuery(this);
        $el.data("hammer", hammer);

        var events = ['hold','tap','doubletap','transformstart','transform','transformend','dragstart','drag','dragend','swipe','release'];

        for(var e=0; e<events.length; e++) {
            hammer['on'+ events[e]] = (function(el, eventName) {
                return function(ev) {
                    el.trigger(jQuery.Event(eventName, ev));
                };
            })($el, events[e]);
        }
    });
};


/*
 * Hammer.JS
 * version 0.6.1
 * author: Eight Media
 * https://github.com/EightMedia/hammer.js
 */
function Hammer(element, options, undefined)
{
    var self = this;

    var defaults = {
        // prevent the default event or not... might be buggy when false
        prevent_default    : false,
        css_hacks          : true,

        swipe              : true,
        swipe_time         : 200,   // ms
        swipe_min_distance : 20, // pixels

        drag               : true,
        drag_vertical      : true,
        drag_horizontal    : true,
        // minimum distance before the drag event starts
        drag_min_distance  : 20, // pixels

        // pinch zoom and rotation
        transform          : true,
        scale_treshold     : 0.1,
        rotation_treshold  : 15, // degrees

        tap                : true,
        tap_double         : true,
        tap_max_interval   : 300,
        tap_max_distance   : 10,
        tap_double_distance: 20,

        hold               : true,
        hold_timeout       : 500
    };
    options = mergeObject(defaults, options);

    // some css hacks
    (function() {
        if(!options.css_hacks) {
            return false;
        }

        var vendors = ['webkit','moz','ms','o',''];
        var css_props = {
            "userSelect": "none",
            "touchCallout": "none",
            "userDrag": "none",
            "tapHighlightColor": "rgba(0,0,0,0)"
        };

        var prop = '';
        for(var i = 0; i < vendors.length; i++) {
            for(var p in css_props) {
                prop = p;
                if(vendors[i]) {
                    prop = vendors[i] + prop.substring(0, 1).toUpperCase() + prop.substring(1);
                }
                element.style[ prop ] = css_props[p];
            }
        }
    })();

    // holds the distance that has been moved
    var _distance = 0;

    // holds the exact angle that has been moved
    var _angle = 0;

    // holds the diraction that has been moved
    var _direction = 0;

    // holds position movement for sliding
    var _pos = { };

    // how many fingers are on the screen
    var _fingers = 0;

    var _first = false;

    var _gesture = null;
    var _prev_gesture = null;

    var _touch_start_time = null;
    var _prev_tap_pos = {x: 0, y: 0};
    var _prev_tap_end_time = null;

    var _hold_timer = null;

    var _offset = {};

    // keep track of the mouse status
    var _mousedown = false;

    var _event_start;
    var _event_move;
    var _event_end;

    var _has_touch = ('ontouchstart' in window);


    /**
     * option setter/getter
     * @param   string  key
     * @param   mixed   value
     * @return  mixed   value
     */
    this.option = function(key, val) {
        if(val != undefined) {
            options[key] = val;
        }

        return options[key];
    };


    /**
     * angle to direction define
     * @param  float    angle
     * @return string   direction
     */
    this.getDirectionFromAngle = function( angle )
    {
        var directions = {
            down: angle >= 45 && angle < 135, //90
            left: angle >= 135 || angle <= -135, //180
            up: angle < -45 && angle > -135, //270
            right: angle >= -45 && angle <= 45 //0
        };

        var direction, key;
        for(key in directions){
            if(directions[key]){
                direction = key;
                break;
            }
        }
        return direction;
    };


    /**
     * count the number of fingers in the event
     * when no fingers are detected, one finger is returned (mouse pointer)
     * @param  event
     * @return int  fingers
     */
    function countFingers( event )
    {
        // there is a bug on android (until v4?) that touches is always 1,
        // so no multitouch is supported, e.g. no, zoom and rotation...
        return event.touches ? event.touches.length : 1;
    }


    /**
     * get the x and y positions from the event object
     * @param  event
     * @return array  [{ x: int, y: int }]
     */
    function getXYfromEvent( event )
    {
        event = event || window.event;

        // no touches, use the event pageX and pageY
        if(!_has_touch) {
            var doc = document,
                body = doc.body;

            return [{
                x: event.pageX || event.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && doc.clientLeft || 0 ),
                y: event.pageY || event.clientY + ( doc && doc.scrollTop || body && body.scrollTop || 0 ) - ( doc && doc.clientTop || body && doc.clientTop || 0 )
            }];
        }
        // multitouch, return array with positions
        else {
            var pos = [], src;
            for(var t=0, len=event.touches.length; t<len; t++) {
                src = event.touches[t];
                pos.push({ x: src.pageX, y: src.pageY });
            }
            return pos;
        }
    }


    /**
     * calculate the angle between two points
     * @param   object  pos1 { x: int, y: int }
     * @param   object  pos2 { x: int, y: int }
     */
    function getAngle( pos1, pos2 )
    {
        return Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
    }


    /**
     * calculate the scale size between two fingers
     * @param   object  pos_start
     * @param   object  pos_move
     * @return  float   scale
     */
    function calculateScale(pos_start, pos_move)
    {
        if(pos_start.length == 2 && pos_move.length == 2) {
            var x, y;

            x = pos_start[0].x - pos_start[1].x;
            y = pos_start[0].y - pos_start[1].y;
            var start_distance = Math.sqrt((x*x) + (y*y));

            x = pos_move[0].x - pos_move[1].x;
            y = pos_move[0].y - pos_move[1].y;
            var end_distance = Math.sqrt((x*x) + (y*y));

            return end_distance / start_distance;
        }

        return 0;
    }


    /**
     * calculate the rotation degrees between two fingers
     * @param   object  pos_start
     * @param   object  pos_move
     * @return  float   rotation
     */
    function calculateRotation(pos_start, pos_move)
    {
        if(pos_start.length == 2 && pos_move.length == 2) {
            var x, y;

            x = pos_start[0].x - pos_start[1].x;
            y = pos_start[0].y - pos_start[1].y;
            var start_rotation = Math.atan2(y, x) * 180 / Math.PI;

            x = pos_move[0].x - pos_move[1].x;
            y = pos_move[0].y - pos_move[1].y;
            var end_rotation = Math.atan2(y, x) * 180 / Math.PI;

            return end_rotation - start_rotation;
        }

        return 0;
    }


    /**
     * trigger an event/callback by name with params
     * @param string name
     * @param array  params
     */
    function triggerEvent( eventName, params )
    {
        // return touches object
        params.touches = getXYfromEvent(params.originalEvent);
        params.type = eventName;

        // trigger callback
        if(isFunction(self["on"+ eventName])) {
            self["on"+ eventName].call(self, params);
        }
    }


    /**
     * cancel event
     * @param   object  event
     * @return  void
     */

    function cancelEvent(event)
    {
        event = event || window.event;
        if(event.preventDefault){
            event.preventDefault();
            event.stopPropagation();
        }else{
            event.returnValue = false;
            event.cancelBubble = true;
        }
    }


    /**
     * reset the internal vars to the start values
     */
    function reset()
    {
        _pos = {};
        _first = false;
        _fingers = 0;
        _distance = 0;
        _angle = 0;
        _gesture = null;
    }


    var gestures = {
        // hold gesture
        // fired on touchstart
        hold : function(event)
        {
            // only when one finger is on the screen
            if(options.hold) {
                _gesture = 'hold';
                clearTimeout(_hold_timer);

                _hold_timer = setTimeout(function() {
                    if(_gesture == 'hold') {
                        triggerEvent("hold", {
                            originalEvent   : event,
                            position        : _pos.start
                        });
                    }
                }, options.hold_timeout);
            }
        },

        // swipe gesture
        // fired on touchend
        swipe : function(event)
        {
            if(!_pos.move) {
                return;
            }

            // get the distance we moved
            var _distance_x = _pos.move[0].x - _pos.start[0].x;
            var _distance_y = _pos.move[0].y - _pos.start[0].y;
            _distance = Math.sqrt(_distance_x*_distance_x + _distance_y*_distance_y);

            // compare the kind of gesture by time
            var now = new Date().getTime();
            var touch_time = now - _touch_start_time;

            if(options.swipe && (options.swipe_time > touch_time) && (_distance > options.swipe_min_distance)) {
                // calculate the angle
                _angle = getAngle(_pos.start[0], _pos.move[0]);
                _direction = self.getDirectionFromAngle(_angle);

                _gesture = 'swipe';

                var position = { x: _pos.move[0].x - _offset.left,
                    y: _pos.move[0].y - _offset.top };

                var event_obj = {
                    originalEvent   : event,
                    position        : position,
                    direction       : _direction,
                    distance        : _distance,
                    distanceX       : _distance_x,
                    distanceY       : _distance_y,
                    angle           : _angle
                };

                // normal slide event
                triggerEvent("swipe", event_obj);
            }
        },


        // drag gesture
        // fired on mousemove
        drag : function(event)
        {
            // get the distance we moved
            var _distance_x = _pos.move[0].x - _pos.start[0].x;
            var _distance_y = _pos.move[0].y - _pos.start[0].y;
            _distance = Math.sqrt(_distance_x * _distance_x + _distance_y * _distance_y);

            // drag
            // minimal movement required
            if(options.drag && (_distance > options.drag_min_distance) || _gesture == 'drag') {
                // calculate the angle
                _angle = getAngle(_pos.start[0], _pos.move[0]);
                _direction = self.getDirectionFromAngle(_angle);

                // check the movement and stop if we go in the wrong direction
                var is_vertical = (_direction == 'up' || _direction == 'down');
                if(((is_vertical && !options.drag_vertical) || (!is_vertical && !options.drag_horizontal))
                    && (_distance > options.drag_min_distance)) {
                    return;
                }

                _gesture = 'drag';

                var position = { x: _pos.move[0].x - _offset.left,
                    y: _pos.move[0].y - _offset.top };

                var event_obj = {
                    originalEvent   : event,
                    position        : position,
                    direction       : _direction,
                    distance        : _distance,
                    distanceX       : _distance_x,
                    distanceY       : _distance_y,
                    angle           : _angle
                };

                // on the first time trigger the start event
                if(_first) {
                    triggerEvent("dragstart", event_obj);

                    _first = false;
                }

                // normal slide event
                triggerEvent("drag", event_obj);

                cancelEvent(event);
            }
        },


        // transform gesture
        // fired on touchmove
        transform : function(event)
        {
            if(options.transform) {
                if(countFingers(event) != 2) {
                    return false;
                }

                var rotation = calculateRotation(_pos.start, _pos.move);
                var scale = calculateScale(_pos.start, _pos.move);

                if(_gesture != 'drag' &&
                    (_gesture == 'transform' || Math.abs(1-scale) > options.scale_treshold || Math.abs(rotation) > options.rotation_treshold)) {
                    _gesture = 'transform';

                    _pos.center = {  x: ((_pos.move[0].x + _pos.move[1].x) / 2) - _offset.left,
                        y: ((_pos.move[0].y + _pos.move[1].y) / 2) - _offset.top };

                    var event_obj = {
                        originalEvent   : event,
                        position        : _pos.center,
                        scale           : scale,
                        rotation        : rotation
                    };

                    // on the first time trigger the start event
                    if(_first) {
                        triggerEvent("transformstart", event_obj);
                        _first = false;
                    }

                    triggerEvent("transform", event_obj);

                    cancelEvent(event);

                    return true;
                }
            }

            return false;
        },


        // tap and double tap gesture
        // fired on touchend
        tap : function(event)
        {
            // compare the kind of gesture by time
            var now = new Date().getTime();
            var touch_time = now - _touch_start_time;

            // dont fire when hold is fired
            if(options.hold && !(options.hold && options.hold_timeout > touch_time)) {
                return;
            }

            // when previous event was tap and the tap was max_interval ms ago
            var is_double_tap = (function(){
                if (_prev_tap_pos &&
                    options.tap_double &&
                    _prev_gesture == 'tap' &&
                    (_touch_start_time - _prev_tap_end_time) < options.tap_max_interval)
                {
                    var x_distance = Math.abs(_prev_tap_pos[0].x - _pos.start[0].x);
                    var y_distance = Math.abs(_prev_tap_pos[0].y - _pos.start[0].y);
                    return (_prev_tap_pos && _pos.start && Math.max(x_distance, y_distance) < options.tap_double_distance);
                }
                return false;
            })();

            if(is_double_tap) {
                _gesture = 'double_tap';
                _prev_tap_end_time = null;

                triggerEvent("doubletap", {
                    originalEvent   : event,
                    position        : _pos.start
                });
                cancelEvent(event);
            }

            // single tap is single touch
            else {
                var x_distance = (_pos.move) ? Math.abs(_pos.move[0].x - _pos.start[0].x) : 0;
                var y_distance =  (_pos.move) ? Math.abs(_pos.move[0].y - _pos.start[0].y) : 0;
                _distance = Math.max(x_distance, y_distance);

                if(_distance < options.tap_max_distance) {
                    _gesture = 'tap';
                    _prev_tap_end_time = now;
                    _prev_tap_pos = _pos.start;

                    if(options.tap) {
                        triggerEvent("tap", {
                            originalEvent   : event,
                            position        : _pos.start
                        });
                        cancelEvent(event);
                    }
                }
            }

        }

    };


    function handleEvents(event)
    {
        switch(event.type)
        {
            case 'mousedown':
            case 'touchstart':
                _pos.start = getXYfromEvent(event);
                _touch_start_time = new Date().getTime();
                _fingers = countFingers(event);
                _first = true;
                _event_start = event;

                // borrowed from jquery offset https://github.com/jquery/jquery/blob/master/src/offset.js
                var box = element.getBoundingClientRect();
                var clientTop  = element.clientTop  || document.body.clientTop  || 0;
                var clientLeft = element.clientLeft || document.body.clientLeft || 0;
                var scrollTop  = window.pageYOffset || element.scrollTop  || document.body.scrollTop;
                var scrollLeft = window.pageXOffset || element.scrollLeft || document.body.scrollLeft;

                _offset = {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };

                _mousedown = true;

                // hold gesture
                gestures.hold(event);

                if(options.prevent_default) {
                    cancelEvent(event);
                }
                break;

            case 'mousemove':
            case 'touchmove':
                if(!_mousedown) {
                    return false;
                }
                _event_move = event;
                _pos.move = getXYfromEvent(event);

                if(!gestures.transform(event)) {
                    gestures.drag(event);
                }
                break;

            case 'mouseup':
            case 'mouseout':
            case 'touchcancel':
            case 'touchend':
                if(!_mousedown || (_gesture != 'transform' && event.touches && event.touches.length > 0)) {
                    return false;
                }

                _mousedown = false;
                _event_end = event;
                
                var dragging = _gesture == 'drag';

                // swipe gesture
                gestures.swipe(event);


                // drag gesture
                // dragstart is triggered, so dragend is possible
                if(dragging) {
                    triggerEvent("dragend", {
                        originalEvent   : event,
                        direction       : _direction,
                        distance        : _distance,
                        angle           : _angle
                    });
                }

                // transform
                // transformstart is triggered, so transformed is possible
                else if(_gesture == 'transform') {
                    triggerEvent("transformend", {
                        originalEvent   : event,
                        position        : _pos.center,
                        scale           : calculateScale(_pos.start, _pos.move),
                        rotation        : calculateRotation(_pos.start, _pos.move)
                    });
                }
                else {
                    gestures.tap(_event_start);
                }

                _prev_gesture = _gesture;

                // trigger release event
                triggerEvent("release", {
                    originalEvent   : event,
                    gesture         : _gesture
                });

                // reset vars
                reset();
                break;
        }
    }


    // bind events for touch devices
    // except for windows phone 7.5, it doesnt support touch events..!
    if(_has_touch) {
        addEvent(element, "touchstart touchmove touchend touchcancel", handleEvents);
    }
    // for non-touch
    else {
        addEvent(element, "mouseup mousedown mousemove", handleEvents);
        addEvent(element, "mouseout", function(event) {
            if(!isInsideHammer(element, event.relatedTarget)) {
                handleEvents(event);
            }
        });
    }


    /**
     * find if element is (inside) given parent element
     * @param   object  element
     * @param   object  parent
     * @return  bool    inside
     */
    function isInsideHammer(parent, child) {
        // get related target for IE
        if(!child && window.event && window.event.toElement){
            child = window.event.toElement;
        }

        if(parent === child){
            return true;
        }

        // loop over parentNodes of child until we find hammer element
        if(child){
            var node = child.parentNode;
            while(node !== null){
                if(node === parent){
                    return true;
                };
                node = node.parentNode;
            }
        }
        return false;
    }


    /**
     * merge 2 objects into a new object
     * @param   object  obj1
     * @param   object  obj2
     * @return  object  merged object
     */
    function mergeObject(obj1, obj2) {
        var output = {};

        if(!obj2) {
            return obj1;
        }

        for (var prop in obj1) {
            if (prop in obj2) {
                output[prop] = obj2[prop];
            } else {
                output[prop] = obj1[prop];
            }
        }
        return output;
    }


    /**
     * check if object is a function
     * @param   object  obj
     * @return  bool    is function
     */
    function isFunction( obj ){
        return Object.prototype.toString.call( obj ) == "[object Function]";
    }


    /**
     * attach event
     * @param   node    element
     * @param   string  types
     * @param   object  callback
     */
    function addEvent(element, types, callback) {
        types = types.split(" ");
        for(var t= 0,len=types.length; t<len; t++) {
            if(element.addEventListener){
                element.addEventListener(types[t], callback, false);
            }
            else if(document.attachEvent){
                element.attachEvent("on"+ types[t], callback);
            }
        }
    }
}