/*
  GA SF JSD6
  Michael Lombardo
  Please add all Javascript code to this file.
  Got data working
*/

$(document).on({
    ajaxStart: function() { $('#popUp').show().removeClass('hidden');    },
     ajaxStop: function() { $('#popUp').hide(); }
});

$(window).load(function() {
  console.log("loading")




  //$('#popUp').show().removeClass('hidden');

  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
    var titleDigg = results.data.feed[0].content.title;
    $(".first-h").text(titleDigg);
    //console.log(results);
  });

  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://thedailywtf.com/api/articles/random", function(resultsB){
    $(".second-h").text(resultsB.Title);
    //console.log(resultsB);
  });

  $.get("https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=techcrunch&apiKey=a95641f41d1343b6b44c9c7f0e8aef2e", function(resultsC){
    $(".third-h").text(resultsC.articles[0].title);
    //console.log(resultsC);
  });

  $.get("https://accesscontrolalloworiginall.herokuapp.com/https://content.guardianapis.com/search?q=atlanta%20OR%20poop%20bacon&from-date=2017-01-01&api-key=9be4a5cd-ef5e-4299-b2be-20427c6ca171", function(resultsD){
    $(".fourth-h").text(resultsD.response.results[0].webTitle);
    //console.log(resultsD);
  });

  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://www.reddit.com/r/all.json", function(resultsE){
    //$(".fourth-h").text(resultsD.response.results[0].webTitle);
    $(".fifth-h").text(resultsE.data.children[0].data.title);
  });
});


/*
  $.getJSON(
        "http://www.reddit.com/r/all.json?jsonp=?",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 10),
            function (i, post) {
            //  console.log(post.data.title );
              //console.log(post.data.url );
              //console.log(post.data.permalink );
              //console.log(post.data.ups );
              //console.log(post.data.downs );

            }
          )
        }
      )

          //.success(function() { alert("second success"); })
        //  .error(function() { alert("error"); })
          //.complete(function() { alert("complete"); });
});
*/



/*
$(".first-link").click(function(){
  console.log("hello");

});

$(".second-link").click(function(){
  console.log("hello");

});

$(".third-link").click(function(){
  console.log("hello");

});

$(".fourth-link").click(function(){

console.log("hello");
});

$(".fifth-link").click(function(){
  console.log("hello");
});

//9be4a5cd-ef5e-4299-b2be-20427c6ca171

//a95641f41d1343b6b44c9c7f0e8aef2e
*/

$("#search").click(function(event){
  event.preventDefault();
  $("#search").toggleClass("active");
  console.log("s#searchearch");
});


$("container").click(function(event){
  event.preventDefault();
  $("container").toggleClass("hidden");
  console.log("s#searchearch");
});

$(".closePopUp").click(function(){
console.log('close');
  $('#popUp').hide();
});

$(".logo").click(function(event){
  event.preventDefault();
  $("#main").toggleClass("hidden");
});
