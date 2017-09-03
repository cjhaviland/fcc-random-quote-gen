// Quote globals
var quoteText = '';
var quoteAuthor = '';

// Get's new quote as JSONP from forsimatic
function newQuote(){
    $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function(data){
      quoteText = data.quoteText;
      quoteAuthor = data.quoteAuthor;
      
      $('#quote-text').html(quoteText);
      $('#quote-author').html(quoteAuthor);
  });
  }

$(function(){
  
  // Get a fresh quote after loading the DOM
  newQuote()
  
  // When button is clicked get a new quote
  $('#new-quote').on('click', function(){
    newQuote();
  });
  
  // When tweeting get new encoded URL to send.
  $('.twitter-share-button').on('click', function(){
    $('.twitter-share-button').attr({
        'href': 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quoteText + '-' + quoteAuthor) + '&amp;via=codepen'
      });
  });
});