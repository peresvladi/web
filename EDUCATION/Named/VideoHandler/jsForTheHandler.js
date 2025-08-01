let startDir = "../"
let startDirectory = ""
var startURLendName = 'VideoHandler/Handler.html'
var nameFile = "VCatalogMYSQL_S1"
var nameFileSlide1 = "Презентация"
var filExtension = ".mp4"
var SlidefilExtension = ".pdf"

function sendForm(obj) {
    const location = loc();
    //alert(location);
    const directoryPath = location.substring(0, location.lastIndexOf("/") + 1);
    //alert(directoryPath);
    let fileName = location.split('VCatalog').pop();
    fileName = fileName.substring(0, fileName.lastIndexOf(".") + 0);
    //alert(fileName);


    arr = [];
    arr = directoryPath.split("/")
    //alert(arr);
    let i = 3;
    do {
        startDirectory = startDirectory + startDir;
        //alert(startDirectory);
        i++;
    }
    while (arr[arr.length - i] !== "EDUCATION");

    window.open(startDirectory + startURLendName + "?" + obj.name + "&" + directoryPath + nameFile + filExtension + "&" + fileName, '_blank')
    startDirectory="";
};
function sendFormSlide(j) {
    var location = window.location.href;
    var directoryPath = location.substring(0, location.lastIndexOf("/") + 1);
    window.open(directoryPath + "/" + nameFileSlide1 + SlidefilExtension + "#page=" + j, '_blank')


};

function loc() {
    return window.location.href;
}

document.onkeydown = go_key;
function go_key(event) {
    if (!event) { event = window.event; }
    console.log(event, event.keyCode)
    switch (event.keyCode) {
    // case 88: document.getElementsByClassName('myInp')[0].value = 'Здесь новые данные для загрузки value input!'; break;

        case 88: alert(document.getElementsByClassName("1" + fileName)[0].classList); alert(document.getElementsByClassName("1"+ fileName)[0].name); break;

    }

}
// ФУНКЦИЯ ПРИ ЗАГРУЗКЕ МЕНЯЕТ ЗНАЧЕНИЕ И ИМЯ ЭЛЕМЕНТА - input button, ДОКУМЕНТА HTML (работает)
// document.addEventListener("DOMContentLoaded", {handleEvent: inputNewName(0) && inputNewValue(0)});

// function inputNewValue(e){
// return document.getElementsByClassName('myInp')[e].value = 'Здесь новые данные для загрузки value input!'
// };

// function inputNewName(e){
// return document.getElementsByClassName('myInp')[e].Name = '111&111'
// };


// document.createTextNode

//alert(document.getAttribute('example'));

//работает
//document.addEventListener("DOMContentLoaded", alert("Страница загрузилась"));

// работает
// var script = document.createElement('script');
// script.src = 'VCatalogLayout_L4_test.js';
// script.onload = function () { document.getElementsByClassName('example')[0].value = 'Здесь новые данные для value input!'; }; document.head.appendChild(script);

// window.addEventListener('DOMContentLoaded', function () {
//     this.alert('DOMContentLoaded in ' + (performance.now() - startTime) + 'ms');
// });

// window.addEventListener('DOMContentLoaded', function () {
//     console.log('DOMContentLoaded in ' + (performance.now() - startTime) + 'ms');
// });


// var script = document.createElement('script');
// script.src = 'VCatalogLayout_L4_test.js';
// script.onload = function () { console.log('Script loaded in ' + (performance.now() - startTime) + 'ms'); }; document.head.appendChild(script);



// function init() {
//     console.log('страница загрузилась');
// }
// window.onload = init();









// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Страница загрузилась")
// })



//




//  alert(elem.getAttribute('About') ); // (1) 'Elephant', чтение

//   elem.setAttribute('Test', 123); // (2), запись

//   alert(elem.outerHTML ); // (3), посмотрим, есть ли атрибут в HTML (да)

// for (let attr of elem.attributes) { // (4) весь список
//     alert(`${attr.name} = ${attr.value}`);
// }

// // // // // // //     document.getElementById.obj.input#1.btn

//[object HTMLInputElement]

// box
// :
// input#1.btn

// defaultValue
// :
// "Введение"

// defaultChecked
// :
// false







