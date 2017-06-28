$(document).ready(function() {
  newQuote();
  $('#getQuote').on("click", newQuote);
});

function newQuote() {
  getQuote();
  changeColor();
};

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
  };

var colors = [
  "#997777",
  "#838a85",
  "#8c7884",
  "#779970",
  "#9fb1a2",
  "#748f8b",
  "#6d9cb3"
];

function changeColor() {
  var color = Math.floor(Math.random() * colors.length);
  $(".decorate").css("color", colors[color]);
  $(".decorate").css("border-color", colors[color]);
};