$(document).ready(function() {
  getQuote();
  changeColor();

  $("#getQuote").on("click", function() {
    getQuote();
    changeColor();
  });

  function getQuote() {
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      cache: false,
      success: function(data) {
        $("#quoteText").html(data.quoteText);
        if (data.quoteAuthor) {
          $("#quoteAuthor").html("– " + data.quoteAuthor);
        } else {
          $("#quoteAuthor").html("");
        }
        $("#tweetQuote").attr(
          "href",
          "https://twitter.com/intent/tweet?text=" +
            data.quoteText +
            "(Quote by " +
            data.quoteAuthor +
            ")"
        );
      }
    });
  }
});

var colors = [
  "#c5d5c5", //green
  "#9fa9a3", //grey
  "#e3e0cc", //beige
  "#c0ded9", //mint
  "#e4d1d1", //pink
  "#d9ecd0", //pink2
  "#c2d4dd", //blue
  "#b0aac0" //purple
];

function changeColor() {
  var color = Math.floor(Math.random() * colors.length);
  $(".decorate").css("color", colors[color]);
  $(".decorate").css("border-color", colors[color]);
}

