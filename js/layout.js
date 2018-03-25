if(!window.namu){window.namu={};}
$(function(){$(document).keypress(function(event){if($(document.activeElement).is('input')||$(document.activeElement).is('textarea')){return;}
var code=(event.keyCode?event.keyCode:event.which),ch=String.fromCharCode(code);switch(ch){case'a':location.href="/random";break;}});var searchAutocompleteOption={delay:100,source:function(request,response){$.ajax({url:'/complete/'+ encodeURIComponent(request.term),dataType:'json',success:function(data){response(data);},error:function(data){response([]);}});},select:function(event,ui){if(ui.item.value)location.href="/w/"+ docEncode(ui.item.value);}};$("#searchInput").autocomplete(searchAutocompleteOption);$("#smallSearchInput").autocomplete(searchAutocompleteOption);$("#searchInput").keypress(searchInput_keypress);$("#smallSearchInput").keypress(searchInput_keypress);$("#searchBtn").click(function(){var val=$('#searchInput').val();if(val.length>0){location.href="/search/"+ docEncode(val);}});$("#goBtn").click(function(){var val=$('#searchInput').val();if(val.length>0){location.href="/w/"+ docEncode(val);}});$("#other_icon").click(function(event){if($("#smallSearchMenu").attr("data-visible")=="true"){hideSmallSearchMenu();}
if($("#memberMenu").attr("data-visible")=="true"){hideMemberMenu();}else{showMemberMenu();}
return false;});$("#notiIcon").click(function(){});$("#smallSearchBtn").click(function(event){var val=$('#smallSearchInput').val();if(val.length>0){location.href="/search/"+ docEncode(val);}
return false;});$("#smallGoBtn").click(function(event){var val=$('#smallSearchInput').val();if(val.length>0){location.href="/w/"+ docEncode(val);}
return false;});$(".go-top-btn").click(function(event){$("html, body").animate({scrollTop:0},'500','swing');return false;});$(".go-bottom-btn").click(function(event){$("html, body").animate({scrollTop:$(document).height()},'500','swing');return false;});if(window.localStorage){$("#settingsLink").show();}});function docEncode(title){return encodeURIComponent(title).replace(/%2F/g,'/');}
function searchInput_keypress(event){if((event.keyCode?event.keyCode:event.which)!=13){return;}
var val=$(this).val();if(val.length>0){location.href="/search/"+ docEncode(val);}}
function showMemberMenu(){$("#other_icon").parent().addClass("on");$(".nav_top").addClass("type_sub");$("#memberMenu").css("display","block");$("#memberMenu").attr("data-visible","true");}
function hideMemberMenu(){$("#other_icon").parent().removeClass("on");$(".nav_top").removeClass("type_sub");$(".nav_top").css("margin-bottom","0");$("#memberMenu").css("display","none");$("#memberMenu").attr("data-visible","false");}
/*
     FILE ARCHIVED ON 01:51:13 Jul 29, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:32:18 Mar 25, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/