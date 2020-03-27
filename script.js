var searchTerms = $("#search-term");
var numberRec = $("#number-records")
var startYear = $("#start-year")
var endYear = $("#end-year");
var search = $("#src-btn");
var clear = $("#clear-btn");
var searchQuery
var queryTerm
var beginYear
var endYear
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=AexBs82F271plW5NYllpAgocdxd0Q2Dw"

search.on("click", searchFunc);

clear.on("click", function () {
    $("input", "select", ".searchRow").empty();
});

// &begin_date=
// &end_date=

function searchFunc() {
    event.preventDefault();
    searchQuery = "&q=" + ($("#search-term").val().trim());
    queryURL = queryURL + searchQuery;
    console.log("serchQuery:" + searchQuery);
    console.log("start" + startYear)
    startYear = startYear.val().trim();

    endYear = endYear.val().trim();
    console.log("end" + endYear);
    // if (startYear != "") {
    queryURL = queryURL + "&begin_date=" + startYear + "0101"
    // };
    // if (endYear != ""){
    queryURL = queryURL + "&end_date=" + endYear + "1231"
    // };
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);
        console.log(response.response.docs);
        result = response.response.docs
        console.log(numberRec);
        numberRec = numberRec.val().trim();
        for (var i = 0; i < numberRec; i++) {
            var searchDiv = $(".searchRow");
            var newDiv = $("<div>");
            var searchH3 = $("<h3>");
            var searchP = $("<p>");
            console.log("hello")
            console.log(result[i].headline.main)
            searchH3.text(result[i].headline.main);
            searchP.text(result[i].abstract);
            newDiv.append(searchH3);
            newDiv.append(searchP);
            searchDiv.prepend(newDiv);
        };
    })
};


