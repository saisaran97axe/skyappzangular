$(function(){$('#jqcheck').remove();(function(e){e.fn.outside=function(t,n){return this.each(function(){var r=e(this),i=this;e(document).bind(t,function s(r){if(r.target!==i&&!e.contains(i,r.target)){n.apply(i,[r]);if(!i.parentNode)e(document.body).unbind(t,s)}})})}})(jQuery)});var getid;function gotoscroll(getid){jQuery('html,body').animate({scrollTop:jQuery(getid).offset().top},'slow');}
var launched=false;var blurred=false;jQuery(document).ready(function($){$('#copy').append('Copyright © '+new Date().getFullYear()+'<br>All rights reserved.')
if(jQuery().slider){var tpj=jQuery;tpj.noConflict();tpj(document).ready(function(){if(tpj.fn.cssOriginal!=undefined)
tpj.fn.css=tpj.fn.cssOriginal;tpj('.fullwidthbanner').revolution({delay:9000,startwidth:940,startheight:480,onHoverStop:"on",thumbWidth:100,thumbHeight:50,thumbAmount:3,hideThumbs:0,navigationType:"none",navigationArrows:"solo",navigationStyle:"round",navigationHAlign:"left",navigationVAlign:"bottom",navigationHOffset:30,navigationVOffset:30,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:-12,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:-12,soloArrowRightVOffset:0,touchenabled:"on",stopAtSlide:-1,stopAfterLoops:-1,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,hideSliderAtLimit:0,fullWidth:"on",shadow:0});});}
$('.sec .apart').hover(function(){$('.part-top-inner',this).slideDown(200);$('.part-bottom-inner',this).slideDown(200);},function(){$('.part-top-inner',this).stop().slideUp(200);$('.part-bottom-inner',this).stop().slideUp(200);});$('.startbutton').click(function(){if($('.startform').css('height')=='0px'){$('.startform').animate({'height':'300px'},800,'easeOutBounce');}
    else { $('.startform').animate({ 'height': '0px' }, 800, 'easeOutBounce'); } 
});

/*if($('body').hasClass('appdevel')||$('body').hasClass('gamesdev')||$('body').hasClass('google-glass')){$('.startbutton').text('GET FREE PROTOTYPE');}
else{$('.startbutton').text('START YOUR PROJECT');}*/
$('select.countrylist[name="pc"]').bind('change',function(){var cval=$(this).children('option:selected').attr('value');$(this).parent().children('span').attr('class','fg'+cval);});if(jQuery().slider){$(function(){var scrollPane=$(".scroll-pane"),scrollContent=$(".scroll-content");var scrollbar=$(".scroll-bar").slider({slide:function(event,ui){if(scrollContent.width()>scrollPane.width()){scrollContent.css("margin-left",Math.round(ui.value/100*(scrollPane.width()-scrollContent.width()))+"px");}else{scrollContent.css("margin-left",0);}}});var handleHelper=scrollbar.find(".ui-slider-handle").mousedown(function(){scrollbar.width(handleHelper.width());}).mouseup(function(){scrollbar.width("100%");}).append("<span class='ui-icon ui-icon-grip-dotted-vertical'></span>").wrap("<div class='ui-handle-helper-parent'></div>").parent();scrollPane.css("overflow","hidden");function sizeScrollbar(){var remainder=scrollContent.width()-scrollPane.width();var proportion=remainder/scrollContent.width();var handleSize=scrollPane.width()-(proportion*scrollPane.width());scrollbar.find(".ui-slider-handle").css({width:handleSize,"margin-left":-handleSize/2});handleHelper.width("").width(scrollbar.width()-handleSize);}
function resetValue(){var remainder=scrollPane.width()-scrollContent.width();var leftVal=scrollContent.css("margin-left")==="auto"?0:parseInt(scrollContent.css("margin-left"));var percentage=Math.round(leftVal/remainder*100);scrollbar.slider("value",percentage);}
function reflowContent(){var showing=scrollContent.width()+parseInt(scrollContent.css("margin-left"),10);var gap=scrollPane.width()-showing;if(gap>0){scrollContent.css("margin-left",parseInt(scrollContent.css("margin-left"),10)+gap);}}
$(window).resize(function(){resetValue();sizeScrollbar();reflowContent();});setTimeout(sizeScrollbar,10);});}
if (jQuery().knob) { $('.knob').knob({ 'readOnly': true, 'draw': function () { } }); }
function launch(){$(function(){$({value:0}).animate({value:40},{duration:2000,easing:'swing',step:function(){return $('.knob.first').val(Math.ceil(this.value)).after('<div class="sp">%</div>').trigger('change');}});$({value:0}).stop().animate({value:80},{duration:2000,easing:'swing',step:function(){return $('.knob.second').val(Math.ceil(this.value)).after('<div class="sp">%</div>').trigger('change');}});$({value:0}).stop().animate({value:87},{duration:2000,easing:'swing',step:function(){return $('.knob.third').val(Math.ceil(this.value)).after('<div class="sp">%</div>').trigger('change');}});$({value:0}).stop().animate({value:83},{duration:2000,easing:'swing',step:function(){return $('.knob.fourth').val(Math.ceil(this.value)).after('<div class="sp">%</div>').trigger('change');}});$({value:0}).stop().animate({value:90},{duration:2000,easing:'swing',step:function(){return $('.knob.fifth').val(Math.ceil(this.value)).after('<div class="sp">%</div>').trigger('change');}});});};$(window).scroll(function(){var topPlusWindowSize=$(window).scrollTop()+$(window).height();if($('.circle-wrap')[0]){var circlesBegin=$('.circle-wrap').offset().top
if((topPlusWindowSize>=circlesBegin)){if(window.launched==false){launch();window.launched=true;}}}
if($('.floating-form-wrap')[0]&&$('.side-bars')[0]&&$('.figures')[0]){var horzForm=$('.figures').offset().top;if(($(window).scrollTop()>=horzForm)){$('.floating-form-wrap, .side-bars').show(100);}
else{$('.floating-form-wrap, .side-bars').hide(100);}}
else if($('.masthead-case')[0]){var masthead=$('.masthead-case').offset().top+200;if(($(window).scrollTop()>=masthead)){$('.floating-form-wrap').show(100);}
else{$('.floating-form-wrap').hide(100);}}
else if($('.floating-form-wrap')[0]&&$('.side-bars')[0]){if(($(window).scrollTop()>=200)){$('.floating-form-wrap, .side-bars').show(100);}
else{$('.floating-form-wrap, .side-bars').hide(100);}}
var headerHeight = $('header').height(); var headerBottom = $('header').offset().top - $(window).scrollTop() + headerHeight; $('.mdd').css({ top: headerBottom });
})

$pagers=$("#pager a");_onBefore=function(){$(this).find("img").stop().fadeTo(300,1);$pagers.removeClass("selected");};if(jQuery().carouFredSel){$("#carousel").carouFredSel({items:5,width:"100%",auto:{timeoutDuration:2000},scroll:{duration:650,items:1},prev:{button:"#prev",items:1,onBefore:_onBefore},next:{button:"#next",items:1,onBefore:_onBefore},visible:{min:1,max:5}});}
$('.social-links a').hover(function(){$(this).filter(':not(:animated)').animate({'background-position-y':'-38px'},100)},function(){$(this).animate({'background-position-y':'0px'},200)})
$('.btt').click(function(){$('html, body').animate({'scrollTop':0},1000)})
$('.form-handle').click(function(){if($('.floating-form-wrap').css('margin-right')=='-577px'){$('.floating-form-wrap').css('z-index',99999)
$('.floating-form-wrap').animate({right:'0px','margin-right':'0px'});$('.cus-overlay').show();}
else{$('.floating-form-wrap').css('z-index',999)
$('.floating-form-wrap').animate({right:'0px','margin-right':'-577px'});$('.cus-overlay').hide();}});$('.cus-overlay').click(function(){$('.cus-overlay').css({'z-index':998,'display':'none'});$('.signup-form').css({'z-index':999999,'position':'static'});$('.floating-form-wrap').css('z-index',999);$('.floating-form-wrap').animate({right:'0px','margin-right':'-577px'});})
$('.s-bar').hover(function(){$(this).stop(true,true).animate({right:'215px'},500,'easeOutExpo');$('.side-bars').css('z-index','1004');},function(){$(this).animate({right:'0px'},500,'easeOutBounce');$('.side-bars').css('z-index','999');});$('.nav-tabs a').click(function(e){e.preventDefault();$(this).tab('show');})
$('.req').click(function(){$(function(){$('.form-handle').trigger('click');});if(!$(this).hasClass('media'))
$(function(){gotoscroll('.figures')});})
$('.requestquote').click(function(e){e.preventDefault();$(function(){$('.form-handle').trigger('click');});})
$('.case-nav.prevcase').hover(function(){$(this).animate({'margin-left':0})},function(){$(this).stop().filter(':not(:animated)').animate({'margin-left':'-216px'})})
$('.case-nav.nextcase').hover(function(){$(this).animate({'margin-right':0})},function(){$(this).stop().filter(':not(:animated)').animate({'margin-right':'-216px'})})
$(".scrollspy .nav>li>a[href^='#']").on('click',function(e){e.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(this.hash).offset().top},500,function(){window.location.hash=hash;});});if(jQuery().lazyload){$(".tab-pane img.lazy, .img-div img.lazy, .casesec img.lazy, .appicon img.lazy, .google-glass img.lazy").lazyload({effect:"fadeIn",skip_invisible:false});$(window).load(function(){var timeout=setTimeout(function(){$(".process img.lazy, .fullwidthbanner li img.lazy").lazyload({effect:"fadeIn",skip_invisible:false});},2000);});}
function setNextActive(){var activeItem=$(".carou-item").find(".active");$(activeItem).removeClass('active');var currentIndex=$('.category-slider a').index(activeItem);var nextEl=$('.category-slider a').get(currentIndex+1);$(nextEl).addClass("active");var elemCount=$('.category-slider a').length;var targetSlide=(currentIndex/2)-1;if(targetSlide<=elemCount)
$('.cat-slider-wrap .cycle-slideshow').cycle('goto',(currentIndex/2)-1);}
window.setInterval(setNextActive,3000);$('.category-slider a').click(function(){$('.category-slider a').removeClass('active');$(this).addClass('active');})
function sendReq(){$.ajax({url:'http://j.maxmind.com/app/geoip.js',type:'GET',success:function(data){var ctrycode1=geoip_country_code(),tgtctry=$('.jform select.countrylist option[data-abbr="'+ctrycode1+'"]');tgtctry.attr('selected','selected');$('.jform input[name="code"]').val('+'+tgtctry.attr('value'));$('.jform input[name="ctry"]').val($('.jform select.countrylist option:selected').html());$('.jform select.countrylist[name="pc"]').each(function(){var cval=$(this).children('option:selected').attr('value');$('form .pc span').attr('class','fg'+cval);})},error:function(e){console.log('Error:',e);},contentType:'application/javascript; charset=ISO-8859-1',dataType:'script'});}
$('input').on('focus',function(){if(window.blurred==false){window.blurred=true;sendReq();}});$('.fullw a').click(function(){$(window).scrollTop($(window).scrollTop()+1).scrollTop($(window).scrollTop()-1);})
$('.navbar .nav>li').hover(function(){$('.mdd',this).stop(1).fadeOut(0).stop(1).delay(520).slideDown(300);},function(){$('.mdd',this).stop(1).slideUp(200);});$('.banner-quote').on('click',(function(){$('.startproject .startbutton').trigger('click');}));});WebFontConfig={google:{families:['Open+Sans:400,300,600,700:latin']}};(function(){var wf=document.createElement('script');wf.src=('https:'==document.location.protocol?'https':'http')+'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';wf.type='text/javascript';wf.async='true';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(wf,s);})();




