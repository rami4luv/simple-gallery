$(document).ready(function () {
  var $body = $('body');

  $.getJSON('data.json', function(array) {
    // we create a jQuery h1 element for the title
    var $h1 = $('<h1>Welcome</h1>');
    var $link = $('<a target="_blank" id="author-link"></a>');

    // we create a jQuery list element for the page
    var $ul = $('<ul id="pager"></ul>');

    // for each items in the array
    // for (var index = 0; index < array.length; index++) {}
    array.forEach(function(item, index) {
      // we create a jQuery list item
      var $li = $('<li>' + (index + 1) + '</li>');

      $li.on('click', function() {
        $h1.text(item.title);
        $body.css('background-image', 'url('+item.src+')');
        $link
          .text('Photos by ' + item.author)
          .attr('href', item.link);

        $('li').removeClass('active');
        $(this).addClass('active');
      });

      // that we add to the list ($ul)
      $ul.append($li);

      if (index === 0) $li.trigger('click');
    });

    $('.next').on('click',function() {
      var $liactive = $('li.active');
      var $linext = $liactive.next();
      $linext.trigger('click');
    });

    $('.prev').on('click',function() {
      var $liactive = $('li.active');
      var $liprev = $liactive.prev();
      $liprev.trigger('click');
    });

    $('body').append($h1, $ul, $link);

  });

});