$(document).ready(function(){
  $(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times")
    $("nav").toggleClass("active")
  })
});
