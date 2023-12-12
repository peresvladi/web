

var locat = loc();
function loc() {
  return window.location.href;
}
let fileName = locat.split('VCatalog').pop();
fileName = fileName.substring(0, fileName.lastIndexOf(".") + 0);
//document.write(`<select name="listOne" id = "listOne-select">Choose a listOne:</labelOne>`);

document.getElementById("listOne-select").onchange = function () {
  let sheet = document.getElementById("listOne-select").value;

  if (sheet == "ДобавитьOne") {
    //callsTheInputfile2(e = "v");
    callsTheInputfile2();
  }
};
document.write(`<option onclick= 'inputFile()' value='ПустоOne'>'ПустоOne'</option>`);
document.write(`<option onclick= 'inputFile()' value='ДобавитьOne'>'ДобавитьOne'</option>`);
if (window.localStorage.getItem("0" + fileName) !== null) {
  document.write(`<option value=''>'Кликните'</option>`);
  for (let i = 0; i < window.localStorage.length; i++) {
    let keyFragment = i + fileName;
    let fragment = (window.localStorage.getItem(keyFragment)).split(",");
    let nameInputButton = fragment[0] + "&" + fragment[1];
    let meFragment = fragment[2];
    let nameFragment = i + "-" + meFragment.replace(/\s/g, "&nbsp");
    document.write(`<option value='${nameFragment}'>'${nameFragment}'</option>`);
  }
  //document.write(`</select>`);
}


// function callsTheInputfile2(e) {
//   return document.getElementById('inputfile1').click(e);
function callsTheInputfile2() {
  return document.getElementById('inputfile1').click();
}
