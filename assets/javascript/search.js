$(document).ready(function () {
  $('#search').on('click', function () {
    var apikey = "&api-key=d4b2e86de8f943f8ba96af6ed5da91e4";

    var searchTerm = "?q=" + $('#search-term').val();
    var startYear = "&begin_date=" + $('#start-year').val() + "0101";
    var endYear = "&end_date=" + $('#end-year').val() + "0101";
    var numResults = "&limit=" + $('#num-results').val();
    // TODO: Add numResults to queryURL
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + searchTerm + startYear + endYear + numResults + apikey;

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function (response) {
      //console.log(response);

      var responses = response.response.docs;
      // console.log(responses);

      responses.map(function (responseItem) {
        console.log(responseItem);
        var div = $('<div>');
        var headline = responseItem.headline.main,
            snippet = responseItem.snippet;
        var headlineDiv = $('<h2>');
        headlineDiv.text(headline);
        div.html(headline + "<br>" + snippet);
        $('#results').append(div);
      });
    });
  });
});