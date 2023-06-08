let x = 0;
function myImg() {
  if (x == 0) {
    document.getElementById("first").src = "images/img2.jpg";
    x++;
  } else if (x == 1) {
    document.getElementById("first").src = "images/img3.jpg";
    x++;
  } else if (x == 2) {
    document.getElementById("first").src = "images/img4.jpg";
    x++;
  } else if (x == 3) {
    document.getElementById("first").src = "images/img5.jpg";
    x = 0;
  }
}
