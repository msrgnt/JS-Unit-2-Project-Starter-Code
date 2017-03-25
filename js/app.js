/*
  GA SF JSD6
  Michael Lombardo
  Please add all Javascript code to this file.
  Got data working
*/

$(document).on({
    ajaxStart: function() {
      console.log("fuckfuckfuck");

      $('#popUp').show().removeClass('hidden');
      $('#popUp').show().addClass('loader');
    },
     ajaxStop: function() { $('#popUp').hide(); }
});

$(window).load(function() {
  //console.log("loading")

  //$('#popUp').show().removeClass('hidden');

  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
    var titleDigg = results.data.feed[0].content.title;
    var contentDigg = results.data.feed[0].content.description;
    var tagDigg = results.data.feed[0].content.tags[0].display_name;
    var URLDigg = results.data.feed[0].content.original_url;
    var imgDigg = results.data.feed[0].content.media.images[0].original_url;
    var diggEng = results.data.feed[0].digg_score;
    $(".impressions-1").text(diggEng);


    $(".first-h").text(titleDigg);
    $(".lifea").text(tagDigg);
    //console.log(results);
    $(".uno").attr("src", imgDigg);

    $(".uno").css("max-width", "100%");

    $(".uno").css("border-radius", 50);
    $(".first-link").click(function(){

    //  console.log("yo");
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
    var engWtf = resultsB.CachedCommentCount;
    $(".impressions-2").text(engWtf);
  //  console.log(resultsB.CachedCommentCount);
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
    //console.log(resultsC);

    var randNum = Math.floor(Math.random() * 1000);
    $(".impressions-3").text(randNum);
    $(".third-h").text(newsTitle);
    $(".tres").attr("src", newsImg);
    $(".tres").css("max-width", "100%");
    $(".tres").css("border-radius", 50);

    $(".third-link").click(function(){

      console.log(resultsC);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(newsTitle);
      $(".popped-link").attr("href", newsURL);
      $(".popped-description").text(newsDescription);

    });
  });

  $.get("https://accesscontrolalloworiginall.herokuapp.com/https://content.guardianapis.com/search?q=atlantafrom-date=2017-01-01&api-key=9be4a5cd-ef5e-4299-b2be-20427c6ca171", function(resultsD){
    var randNum = Math.floor(Math.random() * 10);
    var randNumB = Math.floor(Math.random() * 1000);

    var gTitle = resultsD.response.results[randNum].webTitle;
    var gDescription = "The title says it all, doesn't it?";;
    var gURL = resultsD.response.results[randNum].webUrl;
    var gImg = "images/g.jpg";
    $(".impressions-4").text(randNumB);

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
    var rEng = resultsE.data.children[0].data.ups;
    console.log(resultsE);
    $(".impressions-5").text(rEng);

    if (rImage === "self") {
      console.log("hooya");
      var rImage = "images/reddit.png"
    }

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



$(".li-a").click(function(){
  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
    var titleDigg = results.data.feed[0].content.title;
    var contentDigg = results.data.feed[0].content.description;
    var tagDigg = results.data.feed[0].content.tags[0].display_name;
    var URLDigg = results.data.feed[0].content.original_url;
    var imgDigg = results.data.feed[0].content.media.images[0].original_url;
    var diggEng = results.data.feed[0].digg_score;
    $(".impressions-1").text(diggEng);
    $(".first-h").text(titleDigg);
    $(".lifea").text(tagDigg);
    $(".uno").attr("src", imgDigg);
    $(".uno").css("max-width", "100%");
    $(".uno").css("border-radius", 50);

    $(".first-link").click(function(){
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(titleDigg);
      $(".popped-link").attr("href", URLDigg);
      $(".popped-description").text(contentDigg);
    });

    var titleDigg1 = results.data.feed[1].content.title;
    var contentDigg1 = results.data.feed[1].content.description;
    var tagDigg1 = results.data.feed[1].content.tags[0].display_name;
    var URLDigg1 = results.data.feed[1].content.original_url;
    var imgDigg1 = results.data.feed[1].content.media.images[0].original_url;
    var diggEng1 = results.data.feed[1].digg_score;
    $(".impressions-2").text(diggEng1);
    $(".second-h").text(titleDigg1);
    $(".lifeb").text(tagDigg1);
    $(".dos").attr("src", imgDigg1);
    $(".dos").css("max-width", "100%");
    $(".dos").css("border-radius", 50);

    $(".second-link").click(function(){
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(titleDigg1);
      $(".popped-link").attr("href", URLDigg1);
      $(".popped-description").text(contentDigg1);
    });

    var titleDigg2 = results.data.feed[2].content.title;
    var contentDigg2 = results.data.feed[2].content.description;
    var tagDigg2 = results.data.feed[2].content.tags[0].display_name;
    var URLDigg2 = results.data.feed[2].content.original_url;
    var imgDigg2 = results.data.feed[2].content.media.images[0].original_url;
    var diggEng2 = results.data.feed[2].digg_score;
    $(".impressions-3").text(diggEng2);
    $(".third-h").text(titleDigg2);
    $(".lifec").text(tagDigg2);
    $(".tres").attr("src", imgDigg2);
    $(".tres").css("max-width", "100%");
    $(".tres").css("border-radius", 50);

    $(".third-link").click(function(){
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(titleDigg2);
      $(".popped-link").attr("href", URLDigg2);
      $(".popped-description").text(contentDigg2);
    });

    var titleDigg3 = results.data.feed[3].content.title;
    var contentDigg3 = results.data.feed[3].content.description;
    var tagDigg3 = results.data.feed[3].content.tags[0].display_name;
    var URLDigg3 = results.data.feed[3].content.original_url;
    var imgDigg3 = results.data.feed[3].content.media.images[0].original_url;
    var diggEng3 = results.data.feed[3].digg_score;
    $(".impressions-4").text(diggEng3);
    $(".fourth-h").text(titleDigg3);
    $(".lifed").text(tagDigg3);
    $(".quatro").attr("src", imgDigg3);
    $(".quatro").css("max-width", "100%");
    $(".quatro").css("border-radius", 50);

    $(".fourth-link").click(function(){
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(titleDigg3);
      $(".popped-link").attr("href", URLDigg3);
      $(".popped-description").text(contentDigg3);

    });

    var titleDigg4 = results.data.feed[4].content.title;
    var contentDigg4 = results.data.feed[4].content.description;
    var tagDigg4 = results.data.feed[4].content.tags[0].display_name;
    var URLDigg4 = results.data.feed[4].content.original_url;
    var imgDigg4 = results.data.feed[4].content.media.images[0].original_url;
    var diggEng4 = results.data.feed[4].digg_score;
    $(".impressions-5").text(diggEng4);
    $(".fifth-h").text(titleDigg4);
    $(".lifee").text(tagDigg4);
    $(".cinco").attr("src", imgDigg4);
    $(".cinco").css("max-width", "100%");
    $(".cinco").css("border-radius", 50);

    $(".fifth-link").click(function(){
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(titleDigg4);
      $(".popped-link").attr("href", URLDigg4);
      $(".popped-description").text(contentDigg4);
    });
  });
});
/*

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


});
*/
$(".li-b").click(function(){
  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://thedailywtf.com/api/articles/recent", function(resultsB){
    console.log(resultsB[2]);

    var titleWTF = resultsB[0].Title
    $(".first-h").text(titleWTF);
    var wtfImg = "images/wtf.png";
    var engWtf = resultsB[0].CachedCommentCount;
    $(".impressions-1").text(engWtf);

  //  console.log(resultsB.CachedCommentCount);
    var contentWTF = resultsB[0].Series.Description;
    var tagWTF = resultsB[0].Series.Title;
    var URLWtf = resultsB[0].Url;
    $(".uno").attr("src", wtfImg);
    $(".uno").css("max-width", "100%");
    $(".uno").css("border-radius", 50);
  //  $(".second-h").text(titleWTF);
   $(".lifea").text(tagWTF);
    $(".first-link").click(function(){

      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(titleWTF);
      $(".popped-link").attr("href", URLWtf);
      $(".popped-description").text(contentWTF);

    });

    var titleWTF1 = resultsB[1].Title
    $(".second-h").text(titleWTF1);
    var wtfImg1 = "images/wtf.png";
    var engWtf1 = resultsB[1].CachedCommentCount;
    $(".impressions-2").text(engWtf1);

    //  console.log(resultsB.CachedCommentCount);
    var contentWTF1 = resultsB[1].Series.Description;
    var tagWTF1 = resultsB[1].Series.Title;
    var URLWtf1 = resultsB[1].Url;
    $(".dos").attr("src", wtfImg);

    $(".dos").css("max-width", "100%");

    $(".dos").css("border-radius", 50);
    //  $(".second-h").text(titleWTF);
    $(".lifeb").text(tagWTF1);
    $(".second-link").click(function(){

      console.log("yo");
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(titleWTF1);
      $(".popped-link").attr("href", URLWtf1);
      $(".popped-description").text(contentWTF1);

    });

  var titleWTF2 = resultsB[2].Title;
  $(".third-h").text(titleWTF2);
  var wtfImg2 = "images/wtf.png";
  var engWtf2 = resultsB[2].CachedCommentCount;
  $(".impressions-3").text(engWtf2);

  //  console.log(resultsB.CachedCommentCount);
  var contentWTF2 = resultsB[2].Series.Description;
  var tagWTF2 = resultsB[2].Series.Title;
  var URLWtf2 = resultsB[2].Url;
  $(".tres").attr("src", wtfImg2);

  $(".tres").css("max-width", "100%");

  $(".tres").css("border-radius", 50);
  //  $(".second-h").text(titleWTF);
  $(".lifec").text(tagWTF2);
  $(".third-link").click(function(){

    console.log("yo");
    $('#popUp').show();
    $(".loader").toggleClass();
    $(".container").css("display", "visible");
    $(".popped-title").text(titleWTF2);
    $(".popped-link").attr("href", URLWtf2);
    $(".popped-description").text(contentWTF2);

  });

  var titleWTF3 = resultsB[3].Title;
  $(".fourth-h").text(titleWTF3);
  var wtfImg3 = "images/wtf.png";
  var engWtf3 = resultsB[3].CachedCommentCount;
  $(".impressions-4").text(engWtf3);

  //  console.log(resultsB.CachedCommentCount);
  var contentWTF3 = resultsB[3].Series.Description;
  var tagWTF3 = resultsB[3].Series.Title;
  var URLWtf3 = resultsB[3].Url;
  $(".quatro").attr("src", wtfImg3);

  $(".quatro").css("max-width", "100%");

  $(".quatro").css("border-radius", 50);
  //  $(".second-h").text(titleWTF);
  $(".lifed").text(tagWTF3);
  $(".fourth-link").click(function(){

    console.log("yo");
    $('#popUp').show();
    $(".loader").toggleClass();
    $(".container").css("display", "visible");
    $(".popped-title").text(titleWTF3);
    $(".popped-link").attr("href", URLWtf3);
    $(".popped-description").text(contentWTF3);

  });

  var titleWTF4 = resultsB[4].Title;
  $(".fourth-h").text(titleWTF4);
  var wtfImg4 = "images/wtf.png";
  var engWtf4 = resultsB[4].CachedCommentCount;
  $(".impressions-5").text(engWtf4);

  //  console.log(resultsB.CachedCommentCount);
  var contentWTF4 = resultsB[4].Series.Description;
  var tagWTF4 = resultsB[4].Series.Title;
  var URLWtf4 = resultsB[4].Url;
  $(".cinco").attr("src", wtfImg4);

  $(".cinco").css("max-width", "100%");

  $(".cinco").css("border-radius", 50);
  //  $(".second-h").text(titleWTF);
  $(".lifee").text(tagWTF4);
  $(".fifth-link").click(function(){

    console.log("yo");
    $('#popUp').show();
    $(".loader").toggleClass();
    $(".container").css("display", "visible");
    $(".popped-title").text(titleWTF4);
    $(".popped-link").attr("href", URLWtf4);
    $(".popped-description").text(contentWTF4);
  });
});
});

$(".li-c").click(function(){

  $.get("https://accesscontrolalloworiginall.herokuapp.com/https://newsapi.org/v1/articles?source=techcrunch&apiKey=a95641f41d1343b6b44c9c7f0e8aef2e", function(resultsC){
    var newsTitle = resultsC.articles[0].title;
    var newsDescription = resultsC.articles[0].description;
    var newsURL = resultsC.articles[0].url;
    var newsImg = resultsC.articles[0].urlToImage;
    //console.log(resultsC);

    var randNum = Math.floor(Math.random() * 1000);
    $(".impressions-1").text(randNum);
    $(".first-h").text(newsTitle);
    $(".uno").attr("src", newsImg);
    $(".uno").css("max-width", "100%");
    $(".uno").css("border-radius", 50);

    $(".first-link").click(function(){

      console.log(resultsC);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(newsTitle);
      $(".popped-link").attr("href", newsURL);
      $(".popped-description").text(newsDescription);

    });

    var newsTitle1 = resultsC.articles[1].title;
    var newsDescription1 = resultsC.articles[1].description;
    var newsURL1 = resultsC.articles[1].url;
    var newsImg1 = resultsC.articles[1].urlToImage;
    //console.log(resultsC);

    var randNum1 = Math.floor(Math.random() * 1000);
    $(".impressions-2").text(randNum1);
    $(".second-h").text(newsTitle1);
    $(".dos").attr("src", newsImg1);
    $(".dos").css("max-width", "100%");
    $(".dos").css("border-radius", 50);

    $(".second-link").click(function(){

      console.log(resultsC);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(newsTitle1);
      $(".popped-link").attr("href", newsURL1);
      $(".popped-description").text(newsDescription1);

    });

    var newsTitle2 = resultsC.articles[2].title;
    var newsDescription2 = resultsC.articles[2].description;
    var newsURL2 = resultsC.articles[2].url;
    var newsImg2 = resultsC.articles[2].urlToImage;
    //console.log(resultsC);

    var randNum2 = Math.floor(Math.random() * 1000);
    $(".impressions-3").text(randNum2);
    $(".third-h").text(newsTitle2);
    $(".tres").attr("src", newsImg2);
    $(".tres").css("max-width", "100%");
    $(".tres").css("border-radius", 50);

    $(".third-link").click(function(){

      console.log(resultsC);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(newsTitle2);
      $(".popped-link").attr("href", newsURL2);
      $(".popped-description").text(newsDescription2);

    });

    var newsTitle3 = resultsC.articles[3].title;
    var newsDescription3 = resultsC.articles[3].description;
    var newsURL3 = resultsC.articles[3].url;
    var newsImg3 = resultsC.articles[3].urlToImage;
    //console.log(resultsC);

    var randNum3 = Math.floor(Math.random() * 1000);
    $(".impressions-4").text(randNum3);
    $(".fourth-h").text(newsTitle3);
    $(".quatro").attr("src", newsImg3);
    $(".quatro").css("max-width", "100%");
    $(".quatro").css("border-radius", 50);

    $(".fourth-link").click(function(){

      console.log(resultsC);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(newsTitle3);
      $(".popped-link").attr("href", newsURL3);
      $(".popped-description").text(newsDescription3);
    });

    var newsTitle4 = resultsC.articles[4].title;
    var newsDescription4 = resultsC.articles[4].description;
    var newsURL4 = resultsC.articles[4].url;
    var newsImg4 = resultsC.articles[4].urlToImage;
    //console.log(resultsC);

    var randNum4 = Math.floor(Math.random() * 1000);
    $(".impressions-5").text(randNum4);
    $(".fifth-h").text(newsTitle4);
    $(".cinco").attr("src", newsImg4);
    $(".cinco").css("max-width", "100%");
    $(".cinco").css("border-radius", 50);

    $(".fifth-link").click(function(){

      console.log(resultsC);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(newsTitle4);
      $(".popped-link").attr("href", newsURL4);
      $(".popped-description").text(newsDescription4);

    });
  });
});

$(".li-d").click(function(){
  $.get("https://accesscontrolalloworiginall.herokuapp.com/https://content.guardianapis.com/search?q=atlantafrom-date=2017-01-01&api-key=9be4a5cd-ef5e-4299-b2be-20427c6ca171", function(resultsD){
    var randNum = Math.floor(Math.random() * 10);
    var randNumB = Math.floor(Math.random() * 1000);

    var gTitle = resultsD.response.results[0].webTitle;
    var gDescription = "The title says it all, doesn't it?";;
    var gURL = resultsD.response.results[0].webUrl;
    var gImg = "images/g.jpg";
    $(".impressions-1").text(randNumB);

    $(".first-h").text(gTitle);
    $(".uno").attr("src", gImg);

    $(".uno").css("max-width", "100%");

    $(".uno").css("border-radius", 50);
    //console.log(resultsD);

    $(".first-link").click(function(){

      //console.log(resultsD);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(gTitle);
      $(".popped-link").attr("href", gURL);
      $(".popped-description").text(gDescription);

    });

    var randNum = Math.floor(Math.random() * 10);
    var randNumC = Math.floor(Math.random() * 1000);

    var gTitle1 = resultsD.response.results[1].webTitle;
    var gDescription1 = "The title says it all, doesn't it?";;
    var gURL1 = resultsD.response.results[1].webUrl;
    var gImg1 = "images/g.jpg";
    $(".impressions-2").text(randNumC);

    $(".second-h").text(gTitle1);
    $(".dos").attr("src", gImg1);

    $(".dos").css("max-width", "100%");

    $(".dos").css("border-radius", 50);
    //console.log(resultsD);

    $(".second-link").click(function(){

      //console.log(resultsD);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(gTitle1);
      $(".popped-link").attr("href", gURL1);
      $(".popped-description").text(gDescription1);

    });
    var randNumD = Math.floor(Math.random() * 1000);

    var gTitle2 = resultsD.response.results[2].webTitle;
    var gDescription2 = "The title says it all, doesn't it?";;
    var gURL2 = resultsD.response.results[2].webUrl;
    var gImg2 = "images/g.jpg";
    $(".impressions-3").text(randNumD);

    $(".third-h").text(gTitle2);
    $(".tres").attr("src", gImg2);

    $(".tres").css("max-width", "100%");

    $(".tres").css("border-radius", 50);
    //console.log(resultsD);

    $(".third-link").click(function(){

      //console.log(resultsD);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(gTitle2);
      $(".popped-link").attr("href", gURL2);
      $(".popped-description").text(gDescription2);

    });

    var randNumE = Math.floor(Math.random() * 1000);

    var gTitle3 = resultsD.response.results[3].webTitle;
    var gDescription3 = "The title says it all, doesn't it?";;
    var gURL3 = resultsD.response.results[3].webUrl;
    var gImg3 = "images/g.jpg";
    $(".impressions-4").text(randNumE);

    $(".fourth-h").text(gTitle3);
    $(".quatro").attr("src", gImg3);

    $(".quatro").css("max-width", "100%");

    $(".quatro").css("border-radius", 50);
    //console.log(resultsD);

    $(".fourth-link").click(function(){

      //console.log(resultsD);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(gTitle3);
      $(".popped-link").attr("href", gURL3);
      $(".popped-description").text(gDescription3);

    });

    var randNumF = Math.floor(Math.random() * 1000);

    var gTitle4 = resultsD.response.results[4].webTitle;
    var gDescription4 = "The title says it all, doesn't it?";;
    var gURL4 = resultsD.response.results[4].webUrl;
    var gImg4 = "images/g.jpg";
    $(".impressions-5").text(randNumF);

    $(".fifth-h").text(gTitle4);
    $(".cinco").attr("src", gImg4);

    $(".cinco").css("max-width", "100%");

    $(".cinco").css("border-radius", 50);
    //console.log(resultsD);

    $(".fifth-link").click(function(){

      //console.log(resultsD);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(gTitle4);
      $(".popped-link").attr("href", gURL4);
      $(".popped-description").text(gDescription4);

    });
  });
});
//9be4a5cd-ef5e-4299-b2be-20427c6ca171

//a95641f41d1343b6b44c9c7f0e8aef2e
$(".li-e").click(function(){

$.get("https://accesscontrolalloworiginall.herokuapp.com/http://www.reddit.com/r/all.json", function(resultsE){


var rTitle = resultsE.data.children[0].data.title;
var rDescription = "The title says it all, doesn't it?";;
var rURL = "https://www.reddit.com" + resultsE.data.children[0].data.permalink;
var rImage = resultsE.data.children[0].data.thumbnail;
var rEng = resultsE.data.children[0].data.ups;
console.log(resultsE);
$(".impressions-1").text(rEng);

if (rImage === "self") {
  console.log("hooya");
  var rImage = "images/reddit.png"
}

$(".first-h").text(rTitle);
$(".uno").attr("src", rImage);
$(".uno").css("max-width", "100%");

$(".uno").css("border-radius", 50);

$(".first-link").click(function(){

  //console.log(resultsD);
  $('#popUp').show();
  $(".loader").toggleClass();
  $(".container").css("display", "visible");
  $(".popped-title").text(rTitle);
  $(".popped-link").attr("href", rURL);
  $(".popped-description").text(rDescription);
});

  var rTitle1 = resultsE.data.children[1].data.title;
  var rDescription1 = "The title says it all, doesn't it?";;
  var rURL1 = "https://www.reddit.com" + resultsE.data.children[1].data.permalink;
  var rImage1 = resultsE.data.children[1].data.thumbnail;
  var rEng1 = resultsE.data.children[1].data.ups;
  console.log("poop" + resultsE.data.children);
  $(".impressions-2").text(rEng1);

  if (rImage1 === "self") {
    //console.log("hooya");
    var rImage1 = "images/reddit.png"
  }

  $(".second-h").text(rTitle1);
  $(".dos").attr("src", rImage1);
  $(".dos").css("max-width", "100%");

  $(".dos").css("border-radius", 50);

  $(".second-link").click(function(){

    //console.log(resultsD);
    $('#popUp').show();
    $(".loader").toggleClass();
    $(".container").css("display", "visible");
    $(".popped-title").text(rTitle1);
    $(".popped-link").attr("href", rURL1);

    $(".popped-description").text(rDescription1);
    });

    var rTitle2 = resultsE.data.children[2].data.title;
    var rDescription2 = "The title says it all, doesn't it?";;
    var rURL2 = "https://www.reddit.com" + resultsE.data.children[2].data.permalink;
    var rImage2 = resultsE.data.children[2].data.thumbnail;
    var rEng2 = resultsE.data.children[2].data.ups;
    console.log("poop" + resultsE.data.children);
    $(".impressions-3").text(rEng2);

    if (rImage2 === "self") {
      //console.log("hooya");
      var rImage2 = "images/reddit.png"
    }

    $(".third-h").text(rTitle2);
    $(".tres").attr("src", rImage2);
    $(".tres").css("max-width", "100%");

    $(".tres").css("border-radius", 50);

    $(".third-link").click(function(){

      //console.log(resultsD);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(rTitle2);
      $(".popped-link").attr("href", rURL2);

      $(".popped-description").text(rDescription2);

      });
      var rTitle3 = resultsE.data.children[3].data.title;
      var rDescription3 = "The title says it all, doesn't it?";;
      var rURL3 = "https://www.reddit.com" + resultsE.data.children[3].data.permalink;
      var rImage3 = resultsE.data.children[3].data.thumbnail;
      var rEng3 = resultsE.data.children[3].data.ups;
      console.log("poop" + resultsE.data.children);
      $(".impressions-4").text(rEng3);

      if (rImage3 === "self") {
        //console.log("hooya");
        var rImage3 = "images/reddit.png"
      }

      $(".fourth-h").text(rTitle3);
      $(".quatro").attr("src", rImage3);
      $(".quatro").css("max-width", "100%");

      $(".quatro").css("border-radius", 50);

      $(".fourth-link").click(function(){

        //console.log(resultsD);
        $('#popUp').show();
        $(".loader").toggleClass();
        $(".container").css("display", "visible");
        $(".popped-title").text(rTitle3);
        $(".popped-link").attr("href", rURL3);

        $(".popped-description").text(rDescription3);

        });

        var rTitle4 = resultsE.data.children[4].data.title;
        var rDescription4 = "The title says it all, doesn't it?";;
        var rURL4 = "https://www.reddit.com" + resultsE.data.children[4].data.permalink;
        var rImage4 = resultsE.data.children[4].data.thumbnail;
        var rEng4 = resultsE.data.children[4].data.ups;
        console.log("poop" + resultsE.data.children);
        $(".impressions-5").text(rEng4);

        if (rImage4 === "self") {
          //console.log("hooya");
          var rImage4 = "images/reddit.png"
        }

        $(".fifth-h").text(rTitle4);
        $(".cinco").attr("src", rImage4);
        $(".cinco").css("max-width", "100%");

        $(".cinco").css("border-radius", 50);

        $(".fifth-link").click(function(){

          //console.log(resultsD);
          $('#popUp').show();
          $(".loader").toggleClass();
          $(".container").css("display", "visible");
          $(".popped-title").text(rTitle4);
          $(".popped-link").attr("href", rURL4);

          $(".popped-description").text(rDescription4);

          });

  });
});


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
$('#popUp').addClass('.loader');

  $('#popUp').hide();


});

$(".logo").click(function (event){


  $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
    var titleDigg = results.data.feed[0].content.title;
    var contentDigg = results.data.feed[0].content.description;
    var tagDigg = results.data.feed[0].content.tags[0].display_name;
    var URLDigg = results.data.feed[0].content.original_url;
    var imgDigg = results.data.feed[0].content.media.images[0].original_url;
    var diggEng = results.data.feed[0].digg_score;
    $(".impressions-1").text(diggEng);

    $(".first-h").text(titleDigg);
    $(".lifea").text(tagDigg);
    //console.log(results);
    $(".uno").attr("src", imgDigg);

    $(".uno").css("max-width", "100%");

    $(".uno").css("border-radius", 50);
    $(".first-link").click(function(){

    //  console.log("yo");
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
    var engWtf = resultsB.CachedCommentCount;
    $(".impressions-2").text(engWtf);

  //  console.log(resultsB.CachedCommentCount);
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
    //console.log(resultsC);

    var randNum = Math.floor(Math.random() * 1000);
    $(".impressions-3").text(randNum);
    $(".third-h").text(newsTitle);
    $(".tres").attr("src", newsImg);
    $(".tres").css("max-width", "100%");
    $(".tres").css("border-radius", 50);

    $(".third-link").click(function(){

      console.log(resultsC);
      $('#popUp').show();
      $(".loader").toggleClass();
      $(".container").css("display", "visible");
      $(".popped-title").text(newsTitle);
      $(".popped-link").attr("href", newsURL);
      $(".popped-description").text(newsDescription);

    });
  });

  $.get("https://accesscontrolalloworiginall.herokuapp.com/https://content.guardianapis.com/search?q=atlantafrom-date=2017-01-01&api-key=9be4a5cd-ef5e-4299-b2be-20427c6ca171", function(resultsD){
    var randNum = Math.floor(Math.random() * 10);
    var randNumB = Math.floor(Math.random() * 1000);

    var gTitle = resultsD.response.results[randNum].webTitle;
    var gDescription = "The title says it all, doesn't it?";;
    var gURL = resultsD.response.results[randNum].webUrl;
    var gImg = "images/g.jpg";
    $(".impressions-4").text(randNumB);

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
    var rEng = resultsE.data.children[0].data.ups;
    console.log(resultsE);
    $(".impressions-5").text(rEng);

    if (rImage === "self") {
      console.log("hooya");
      var rImage = "images/reddit.png"
    }

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
