$(document).ready(function () {
  $.getJSON("data.json", function (array) {
    var $ul = $("<ul></ul>");

    array.forEach(function (item, index) {

      var $li = $("<li>" + (index + 1) + "</li>");




      $ul.append($li);
      /*$("div").html("<img src=" + array[0].src + ">");*/





    });
    var $div = $("<div></div>");
      var $h1 = $("<h1> Welcome </h1>");
      $div.append($h1);

      $("body").append($ul, $div);


      $("li").on("click", function () {
        var rami = parseInt($(this).text())-1;

        $h1.text(array[rami].title);
        $("body").css("background-image", "url('" + array[rami].src +"')")
              });


  });
});