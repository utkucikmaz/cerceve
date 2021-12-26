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
var loadFile = function (event) {
  var image = document.getElementById("has-image");
  image.src = URL.createObjectURL(event.target.files[0]);
};
