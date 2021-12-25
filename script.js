$(document).ready(function () {
  $("#color-paspartu").change(function () {
    var clr = $(this).val();
    $("#container").css("background-color", clr);
  });
});

$(document).ready(function () {
  $("#color-frame").change(function () {
    var clr = $(this).val();
    $("#frame").css("background-color", clr);
  });
});
