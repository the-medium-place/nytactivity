var searchTerms = $("#search-term");
var numberRec = $("#number-records");
var startYear = $("#start-year");
var endYear = $("#end-year");
var search = $("#src-btn");
var clear = $("#clear-btn");
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=AexBs82F271plW5NYllpAgocdxd0Q2Dw"

// $(search).click(function(){

// });



// $(clear).click(function() {
//      $("input").empty();

//   });
function searchFunc() { 
    console.log("HI");
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});};

searchFunc();