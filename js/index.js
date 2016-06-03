var qingchu=function(){
  $(".weixin").removeClass("cengji")
  $(".lianxiren").removeClass("cengji")
  $(".faxian").removeClass("cengji")
  $(".wo").removeClass("cengji")
  $(".icon").removeClass("bianse")
}

$(".yi").on("click",function(){
  qingchu()
  $(".weixin").addClass("cengji")
  $(".yi span").addClass("bianse")
})
$(".er").on("click",function(){
  qingchu()
  $(".lianxiren").addClass("cengji")
  $(".er span").addClass("bianse")
})
$(".san").on("click",function(){
  qingchu()
  $(".faxian").addClass("cengji")
  $(".san span").addClass("bianse")
})
$(".si").on("click",function(){
  qingchu()
  $(".wo").addClass("cengji")
  $(".si span").addClass("bianse")
})
