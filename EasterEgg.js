// a - 65
// b - 66
// up - 38
// left - 37
// right - 39
// down - 40
var konamiSeq = 0;
var konamiArray = Array(38,38,40,40,37,39,37,39,66,65);
// Poor mans code checker
function checkCodes(keycode) {
  if (konamiArray[konamiSeq]==keycode) {
    konamiSeq++;
  } else {
    konamiSeq = 0;
  }
  if (konamiSeq == konamiArray.length) {
    showBlock("konamicomic");
  }
}