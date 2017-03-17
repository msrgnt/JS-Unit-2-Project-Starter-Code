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
    var contentDigg = results.data.feed[0].content.description;
    var tagDigg = results.data.feed[0].content.tags[0].display_name;
    var URLDigg = results.data.feed[0].content.original_url;
    var imgDigg = results.data.feed[0].content.media.images[0].original_url;

    $(".first-h").text(titleDigg);
    $(".lifea").text(tagDigg);
    console.log(results);
    $(".uno").attr("src", imgDigg);

    $(".uno").css("max-width", "100%");

    $(".uno").css("border-radius", 50);
    $(".first-link").click(function(){

      console.log("yo");
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(titleDigg);
      $(".popped-link").attr("href", URLDigg);
      $(".popped-description").text(contentDigg);

    });
  });

  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://thedailywtf.com/api/articles/random", function(resultsB){
    var titleWTF = resultsB.Title
    $(".second-h").text(titleWTF);
    var wtfImg = "images/wtf.png";

    //console.log(resultsB);
    var contentWTF = resultsB.Series.Description;
    var tagWTF = resultsB.Series.Title;
    var URLWtf = resultsB.Url;
    $(".dos").attr("src", wtfImg);

    $(".dos").css("max-width", "100%");

    $(".dos").css("border-radius", 50);
  //  $(".second-h").text(titleWTF);
   $(".lifeb").text(tagWTF);
    $(".second-link").click(function(){

      console.log("yo");
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(titleWTF);
      $(".popped-link").attr("href", URLWtf);
      $(".popped-description").text(contentWTF);

    });
  });

  $.get("https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=techcrunch&apiKey=a95641f41d1343b6b44c9c7f0e8aef2e", function(resultsC){
    var newsTitle = resultsC.articles[0].title;
    var newsDescription = resultsC.articles[0].description;
    var newsURL = resultsC.articles[0].url;
    var newsImg = resultsC.articles[0].urlToImage;


    $(".third-h").text(newsTitle);
    $(".tres").attr("src", newsImg);

    $(".tres").css("max-width", "100%");

    $(".tres").css("border-radius", 50);
    $(".third-link").click(function(){

      //console.log(resultsC);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(newsTitle);
      $(".popped-link").attr("href", newsURL);
      $(".popped-description").text(newsDescription);

    });
  });

  $.get("https://accesscontrolalloworiginall.herokuapp.com/https://content.guardianapis.com/search?q=atlanta%20OR%20poop%20bacon&from-date=2017-01-01&api-key=9be4a5cd-ef5e-4299-b2be-20427c6ca171", function(resultsD){
    var gTitle = resultsD.response.results[0].webTitle;
    var gDescription = "The title says it all, doesn't it?";;
    var gURL = resultsD.response.results[0].webUrl;
    var gImg = "images/g.jpg";

    $(".fourth-h").text(gTitle);
    $(".quatro").attr("src", gImg);

    $(".quatro").css("max-width", "100%");

    $(".quatro").css("border-radius", 50);
    //console.log(resultsD);

    $(".fourth-link").click(function(){

      //console.log(resultsD);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(gTitle);
      $(".popped-link").attr("href", gURL);
      $(".popped-description").text(gDescription);



    });
  });

  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://www.reddit.com/r/all.json", function(resultsE){
    //$(".fourth-h").text(resultsD.response.results[0].webTitle);

    var rTitle = resultsE.data.children[0].data.title;
    var rDescription = "The title says it all, doesn't it?";;
    var rURL = "https://www.reddit.com" + resultsE.data.children[0].data.permalink;
    var rImage = resultsE.data.children[0].data.thumbnail;
    //console.log(rImage);

    $(".fifth-h").text(rTitle);
    $(".cinco").attr("src", rImage);
    $(".cinco").css("max-width", "100%");

    $(".cinco").css("border-radius", 50);

    $(".fifth-link").click(function(){

      //console.log(resultsD);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(rTitle);
      $(".popped-link").attr("href", rURL);

      $(".popped-description").text(rDescription);
    console.log(resultsE);

    });
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
