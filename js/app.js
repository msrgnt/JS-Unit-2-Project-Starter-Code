/*
  GA SF JSD6
  Michael Lombardo
  Please add all Javascript code to this file.
  Got data working
*/
$(document).ready(function(){

$('h3').on('click', function() {
    console.log("testing");
    $('#popUp').show().removeClass('hidden');

});

$('.closePopUp').on('click', function(){
    $('#popUp').hide();
});


});


$(".first-link").click(function(){
  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
    console.log(results);
  });
console.log("hello");
});

$(".second-link").click(function(){
  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://thedailywtf.com/api/articles/random", function(resultsB){
    console.log(resultsB);
  });
console.log("hello");
});

$(".third-link").click(function(){
  $.get("https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=techcrunch&apiKey=a95641f41d1343b6b44c9c7f0e8aef2e", function(resultsC){
    console.log(resultsC);
  });
console.log("hello");
});

$(".fourth-link").click(function(){
  $.get("https://accesscontrolalloworiginall.herokuapp.com/https://content.guardianapis.com/search?q=atlanta%20OR%20poop%20bacon&from-date=2017-01-01&api-key=9be4a5cd-ef5e-4299-b2be-20427c6ca171", function(resultsD){
    console.log(resultsD);
  });
console.log("hello");
});

$(".fifth-link").click(function(){
  $.getJSON(
        "http://www.reddit.com/r/all.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 10),
            function (i, post) {
              console.log(post.data.title );
              console.log(post.data.url );
              console.log(post.data.permalink );
              console.log(post.data.ups );
              console.log(post.data.downs );

            }
          )
        }
      )
      .success(function() { alert("second success"); })
      .error(function() { alert("error"); })
      .complete(function() { alert("complete"); });
});

//9be4a5cd-ef5e-4299-b2be-20427c6ca171

//a95641f41d1343b6b44c9c7f0e8aef2e

$("#search").click(function(event){
  event.preventDefault();
  $("#search").toggleClass("active");
  console.log("s#searchearch");
});

$(document).ready(function(){
  $("#popup").addClass(".loader");
  console.log("poop");
});

$("container").click(function(event){
  event.preventDefault();
  $("container").toggleClass("hidden");
  console.log("s#searchearch");
});

$(".closePopUp").click(function(event){
  event.preventDefault();
  $("#popup").toggleClass("hidden");
});

$(".logo").click(function(event){
  event.preventDefault();
  $("#main").toggleClass("hidden");
});
