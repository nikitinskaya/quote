$(document).ready(function() {
  newQuote();
  bindClick();
});

function bindClick() {
  $('#getQuote').on("click", newQuote);
  //if not in function, won't work outside document.ready cause 
  //.ready handler is async, it gets passed a callback and first
  //logs the fact that DOM is ready, so if we place a click event inside,
  //it will be executed right after the ready handler,
  //and not when the callback is executed.
  //TODO: get an idea of how this actually works
};

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