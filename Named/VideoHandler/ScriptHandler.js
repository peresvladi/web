var p_url = location.search.substring(1);
var parametr = p_url.split("&");
var s = parametr[0];
//alert("var s = parametr[0]; = " + s)
var f = parametr[1];
var ee = parametr[2];
const namePartVCatalog = parametr[3];
// alert("namePartVCatalog...:" + namePartVCatalog);
//alert(s + "||" + f + "||" + e + "||" + nameVCatalog);
var g = 1;
var b = 1;
var pos1 = 0;
var pos2 = 0;
var m = 10;
var d = 2;
var MP = 0.1;
var vid = document.getElementById("myVideo");
var source = document.createElement('source');
let startDir = "../"
let startDirectory = ""
//var loc = window.location.pathname;    
// let directoryPath = loc.substring(0, loc.lastIndexOf("/")+1);




let directoryPath = window.location.pathname;
//alert(directoryPath);
ar = [];
ar = directoryPath.split("/");
//alert(ar);
let i = 2;
while (ar[ar.length - i] !== "EDUCATION") {
    //alert(ar[ar.length - i]);
    startDirectory = startDirectory + startDir;
    //alert(startDirectory);
    i++;
}

listNamberOne();




if (typeof s.values === "undefined") {
    s = document.getElementById("topic").value.split(",")[1];
    f = document.getElementById("topic").value.split(",")[2];
};

var menyTopItem = document.getElementById("top").value
///alert("Значение выбранного пункта меню:      "+menyTopItem);
var pathURL = startDirectory + window.localStorage.getItem(menyTopItem);
//////////alert(pathURL);
if (pathURL === null) {
    pathURL = "";

}

if (ee !== "undefined") {
    var pathName = "";

}
var pathURLName = (pathURL + pathName)

if (pathURLName !== "undefined") {
    source.setAttribute('src', pathURLName);
    source.setAttribute('type', 'video/mp4');

    vid.appendChild(source);
    vid.play();
    console.log({
        src: source.getAttribute('src'),
        type: source.getAttribute('type'),
    });

    vid.addEventListener("timeupdate", getCurTime);

}
// listNamberOne();



let arr = new Array();
var sess = "";
function keySave(whatKey) {
    let timePart = Math.floor(vid.currentTime);

    if (whatKey === 119) {
        sess = prompt("Стартуем фрагмент видеозаписи ?  Старт от начала(сек):", timePart);
        return sess;
    } else if (whatKey === 1201) {
        sess = prompt("Финиш от начала(сек):", timePart);
        return sess;
    } else if (whatKey === 1202) {
        sess = prompt("", "Введите тему созданного фрагмента");
        return sess;
    } else if (whatKey === 1203) {
        sess = prompt("Стартуем фрагмент видеозаписи ?  Старт от начала(сек):", timePart);
        return sess;
    }
}
//  (arr, window.localStorage, namePartVCatalog);
function arrPopDel(a) {
    a.length === 0 ? alert("Длина массива: 0, - нет элементов для удаления") : alert("элемент: " + a.pop() + "удален");

}

// (arr, window.localStorage, namePartVCatalog);
function inputNow(a, e, u) {
    let vvalue = "";
    if (checkingConditions(e, u) === 0) {handlerInputNow(a, e, u, z = 0) } else {
        switch (vvalue = prompt(`В хранилище (LocalStorage) уже имеются записи фрагментов с ключом по шаблону - ${u} в количестве - ${keySearchAorASimilar(e, u)} для продолжение  предыдущей сессии (выполненой по шаблону ключа - ${u}) нажмите 1, для перезаписи указанной сессии нажмите 2, для перезаписи с определенного фрагмента нажмите 3, для вставки перед определенным фрагментов нажмите 4`)) {
            case "1": handlerInputNow(a, e, u, z = (keySearchAorASimilar(e, u))); break;
            case "2": handlerInputNow(a, e, u, z = 0); break;
            case "3": handlerInputNow(a, e, u, z = parseInt(inputMsg("Введите номер фрагмента с которого начнется перезапись"))); break;
            // (arr, window.localStorage, namePartVCatalog);
            case "4": handlerInputNow(a, e, u, z = parseInt(nameOftheСontrFragm(a, e, u))); break;
        }

    }

}


// (arr, window.localStorage, namePartVCatalog);
function nameOftheСontrFragm(a, e, u) {
    let keySearchForS = (keySearchAorASimilar(e, u) - 1)
    var nameOftheСontrolFragment1 = "";
    var nameOftheСontrolFragment2 = "";
    let keyNumber = inputMsg("Введите номер ключа фрагмента перед которым необходимо сделать вставку новой записи");
    nameOftheСontrolFragment1 = keyNumber + u;
    let outputLocStorage = "";
    let s = 0;
    do {
        outputLocStorage = e.getItem((keySearchForS - s) + u);
        e.setItem(((keySearchForS + (a.length / 4) - s) + u), outputLocStorage);
        nameOftheСontrolFragment2 = (keySearchForS - s) + u;
        s++
    } while (nameOftheСontrolFragment1 !== nameOftheСontrolFragment2);

    return keyNumber;

}

// (arr, window.localStorage, namePartVCatalog, инфа_пользователя);
function handlerInputNow(a, e, u, z) {
    let BodyLocStorage = "";
    let y = 0;
    for (let x = 0; x < a.length; x++) {
        let ifKeyLocStorage = a[x];
        if (ifKeyLocStorage !== u) {
            BodyLocStorage = BodyLocStorage + ifKeyLocStorage + ",";
        } else {
            e.setItem((y + z) + u, BodyLocStorage);
            BodyLocStorage = "";
            y++;
        }
    }

    textSave(inputLocStorage(e, u),u);
}


function textSave(e,u) {
    const data = e; const a = document.createElement('a'); const blob = new Blob([JSON.stringify(data)]); a.href = URL.createObjectURL(blob); a.download = 'fuel'+u; a.click();
}

// (arr, window.localStorage, namePartVCatalog);
function checkingConditions(e, u) {
    if (availabilityOfaKeys(e) > 0 && keySearchAorASimilar(e, u) > 0) {

        var res = keySearchAorASimilar(e, u);

    } else {
        alert("с аналогичным ключем в хранилице данных нет, результат - 0");
        res = 0;
    }
    alert(`в хранилище имеются данные с шаблоном ключа - ${namePartVCatalog} ,в количестве - ${res}`);
    return res;
}

function keySearchAorASimilar(e, u) {
    let i = 0
    for (let z = 0; z < e.length; z++) {
        if (e.key(z).includes(u) === true) {
            i++;
        }
    }
    // alert(`Количество записей по шаблону ключа ${namePartVCatalog} составляет ${i}`);
    return i;

}

function inputMsg(msg) {
    return prompt(msg);
}

// (arr, window.localStorage, namePartVCatalog);
function availabilityOfaKeys(e, u) {
    // alert(`Общее количество элементов LocalStorage ${e.length}`);
    return e.length;
}

function inputLocStorage(e, u) {
    let element = "";
    for (let iSt = 0; iSt < e.length; iSt++) {
        element = element + e.getItem(iSt + u) + u + ",";
    }
    // alert(element);
    return element;
}

function inputFile() {
    const elemInput = document.querySelector('[type="file"]');
    const typeResulte = elemInput.files[0].type;
    // alert(typeResulte);
    switch (typeResulte) {
        case "video/mp4":
            alert("Выбрана загрузка видеофайла")
            inputVideo()
            break;
        case "text/plain":
            alert("Выбрана загрузка текстового файла")
            inputText();
            break;
        default:
            alert('Формат файла неприемлем для загрузки программой "TimeCode For TheVideo"');
            break;
    }

}

function inputText() {
    // получим элемент, используя селектор [type="file"]
    const elemInput = document.querySelector('[type="file"]');
    // сохраним в переменную files значение свойства files
    const files = elemInput.files;
    // files = e.target.files;
    // сохраним количество элементов в files в переменную countFiles
    const countFiles = files.length;
    if (!countFiles) {
        alert('Не выбран файл!');
        return;
    } else {

        // присваиваем переменной selectedFile ссылку на выбранный файл
        const selectedFile = files[0];
        const reader = new FileReader();
        reader.onload = function (selectedFile) {
            var contents = selectedFile.target.result;
            alert("Содержимое файла: " + contents);
            Array.prototype.push.apply(arr, contents.split(","));
            //alert(arr);
            inputNow(arr, window.localStorage, namePartVCatalog);
            arr.length = 0;
            document.getElementById('inputfile1').value = "";
            //document.getElementById('inputfile2').value="";
            //document.getElementById('example').value=''
        };

        reader.onerror = function (selectedFile) {

            selectedFile.error(
                "Файл не может быть прочитан! код " + selectedFile.target.error.code);
        };

        reader.readAsText(selectedFile);

    }

}


function inputVideo() {
    // получим элемент, используя селектор [type="file"]
    const elemInput = document.querySelector('[type="file"]');
    // сохраним в переменную files значение свойства files
    const files = elemInput.files;
    // files = e.target.files;
    // сохраним количество элементов в files в переменную countFiles
    const countFiles = files.length;
    if (!countFiles) {
        alert('Не выбран файл!');
    } else {

        //-//присваиваем переменной selectedFile ссылку на выбранный файл
        const selectedFile = files[0];
        const nameResulte = selectedFile.name;
        //-// const reader = new FileReader();
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);

        reader.onload = function (selectedFile) {
            let buffer = selectedFile.target.result;
            let tempDateBlob = new Blob([new Uint8Array(buffer)], { type: 'video/mp4' });
            let url = window.URL.createObjectURL(tempDateBlob);
            let path = prompt("вставьте скопированный путь к файлу");
            let correctedPath = path.replace(/\\/g, '/') + '/';

            let generalPath = correctedPath + nameResulte;
            // alert(generalPath);
            const relativePath = CreateArelativePath(generalPath);
            function CreateArelativePath(gP) {
                const divided = gP.split('/');
                let section = "";
                let i = 1;
                let relative = "";
                while (section !== "Named") {
                    section = divided[divided.length - i];
                    relative = '/' + section + relative;
                    i++;

                    //alert(relative);
                }

                const correctName = correctedName();

                function correctedName() {
                    return nameResulte.split(".")[0];
                    //return nameResulte[1];
                }

                //alert(correctName);

                if (window.localStorage.getItem("0" + correctName) === null && window.localStorage.getItem("00" + correctName) === null) {
                    let theDesiredValue = ReplacingItWithAsingleOneInThelocalStorage(document.getElementById("top").value);

                    alert("theDesiredValue = "+theDesiredValue);

                    document.getElementById("top").value = theDesiredValue;
                    window.localStorage.setItem("00" + correctName, relative.slice(1));

                    let vidDuration = vid.duration;
                    let arrForMenyTwo = ["0", vidDuration, "All", correctName] 
                    // (arr, window.localStorage, namePartVCatalog, инфа_пользователя);
                    handlerInputNow(arrForMenyTwo, window.localStorage, correctName, 1);
                    window.location.reload();
                } else {
                    if (window.localStorage.getItem("0" + correctName) !== null) {
                        document.getElementById("top").value = ReplacingItWithAsingleOneInThelocalStorage(document.getElementById("top").value);
                        ReplacementWithAdoubleOfLocalStorage("0" + correctName);
                        window.location.reload();
                    }
                    if (window.localStorage.getItem("00" + correctName) !== null) {
                        document.getElementById("top").value = ReplacingItWithAsingleOneInThelocalStorage(document.getElementById("top").value);
                        window.location.reload();
                    }
                }

                return relative.slice(1);
            };

            let nameDir = nameResulte.split(".");
            if (window.localStorage.getItem("00" + nameDir[0]) === null) {
                window.localStorage.setItem("0" + nameDir[0], relativePath);
            }

            vid.src = url;
            document.getElementById('inputfile1').value = "";
            return url;

        };

        reader.onerror = function (selectedFile) {

            selectedFile.error(
                "Файл не может быть прочитан! код " + selectedFile.target.error.code);
        };

        //reader.readAsText(selectedFile);

    }

}

function listNamberOne(a = meny1()) {
    let nameSelectedMeny1 = a;
    let selectedNameMeny1 = nameSelectedMeny1.substr(1);
    document.write(`<select name='${nameSelectedMeny1}' id="topic">`);
    // alert(window.localStorage.length);
    let i = 1;
    while (window.localStorage.getItem(selectedNameMeny1.replace("0", i)) !== null) {
        let nameВutton = selectedNameMeny1.replace("0", i);
        if (window.localStorage.getItem(nameВutton).charAt(0) !== "*") {
            var nameValueВut = i + ",  " + window.localStorage.getItem(nameВutton);
        } else {
            nameValueВut = "*" + i + ",  " + window.localStorage.getItem(nameВutton).slice(1);
            var nameValueВuty = nameValueВut;
        }
        
        i++;
        document.write(`<option value='${nameValueВut}'>'${nameValueВut}'</option>`);

        // alert(" key:    " + nameВutton + "   value:   " + nameValueВutton);
    }
    document.write(`</select>`);
    document.getElementById("topic").value = nameValueВuty;
}

function meny1() {
    document.write(`<select name="top" id="top">`);
    for (let i = 0; i < window.localStorage.length; i++) {
        if (window.localStorage.key(i).charAt(0) === "0") {
            let nameValueВutton = window.localStorage.key(i);
            document.write(`<option value='${nameValueВutton}'>'${nameValueВutton}'</option>`);
            if (nameValueВutton.charAt(1) === "0") {
                document.getElementById("top").value = nameValueВutton;
            }
        }
    }
    document.write(`</select>`);
    let theSelectedLine = document.getElementById("top").value;
    const theBeginningOftheName = theSelectedLine.charAt(1);
    // alert(theBeginningOftheName);
    if (theBeginningOftheName !== '0') {
        ReplacementWithAdoubleOfLocalStorage(theSelectedLine);
        ReplacementWithAdoubleOfMeny(theSelectedLine);
    }

    return document.querySelector("#top").value;
}


function ReplacementWithAdoubleOfLocalStorage(a) {
    let tempValueItemLocalStorage = window.localStorage.getItem(a);
    if (a.charAt(1) === "0") {
        window.localStorage.setItem('0' + ReplacingItWithAsingleOneInThelocalStorage(a), tempValueItemLocalStorage);
    } else {
        window.localStorage.removeItem(a);
        window.localStorage.setItem('0' + a, tempValueItemLocalStorage);
    }
}

function ReplacingItWithAsingleOneInThelocalStorage(a) {
    let tempValueItemLocalStorage = window.localStorage.getItem(a);
    while (a.charAt(1) === "0") {
        window.localStorage.removeItem(a);
        a = a.slice(1);
        window.localStorage.setItem(a, tempValueItemLocalStorage);
    }

}

function ReplacementWithAdoubleOfMeny(a) {
    a = '0' + a;
}

document.getElementById("top").onchange = function () {
    ReplacingItWithAsingleOneInThelocalStorage(document.getElementById("topic").name);
    ReplacementWithAdoubleOfLocalStorage(document.getElementById("top").value);
    window.location.reload();
};

function scrollThroughTheOldKey(a) {
    a = a.slice(1);
    let i = 0;
    while (null !== window.localStorage.getItem(++i + a.slice(1))) {
        if (window.localStorage.getItem(i + a.slice(1)).charAt(0) === "*") {
            delStar(i + a.slice(1));
        };
    }
}

function delStar(a) {
    let tempValueItemLocalStorage = window.localStorage.getItem(a);
    window.localStorage.removeItem(a);
    window.localStorage.setItem(a, tempValueItemLocalStorage.slice(1));
}

function addStarlocalStorage(a, e) {
    let tempValueItemLocalStorage = a.split(",");
    //////////alert(tempValueItemLocalStorage[0] + e.slice(1));
    window.localStorage.removeItem(tempValueItemLocalStorage[0] + e.slice(1));
    window.localStorage.setItem(tempValueItemLocalStorage[0] + e.slice(1), "*" + tempValueItemLocalStorage[1] + "," + tempValueItemLocalStorage[2] + "," + tempValueItemLocalStorage[3]);
    return a = "*" + tempValueItemLocalStorage[0] + tempValueItemLocalStorage[1] + "," + tempValueItemLocalStorage[2] + "," + tempValueItemLocalStorage[3];
}

// function updateMeny2(a) {
//     a = "*" + a;

// }


document.getElementById("topic").onchange = function () {
    scrollThroughTheOldKey(document.getElementById("topic").name);
    addStarlocalStorage(document.getElementById("topic").value, document.getElementById("topic").name.slice(1));
    // ReplacementWithAdoubleOfLocalStorage(document.getElementById("top").value);
    window.location.reload();
    //updateMeny2(document.getElementById("topic").value);

};


document.onkeydown = go_key;
function go_key(event) {
    if (!event) { event = window.event; }
    console.log(event, event.keyCode)
    switch (event.keyCode) {
        case 32:
            break;

        case 39: setPositionGoo(); break;
        case 37: setPositionBack(); break;
        case 38: setSoundPlus(); break;
        case 40: setSoundMinus(); break;
        case 119: vid.pause(); arr.push((keySave(119))); break;
        case 120: vid.pause(); arr.push((keySave(1201))); arr.push((keySave(1202))); arr.push(namePartVCatalog); confirm("Начать следующий фрагмент") === true ? arr.push((keySave(1203))) : arr; break;
        case 115: inputNow(arr, window.localStorage, namePartVCatalog); arr.length = 0; break;
        case 114: confirm(`Удалить последнюю запись сессии: ${arr} `) === true ? arrPopDel(arr) : alert("Удаление последней записи отменено"); break;
        case 90: httpGetAsync();


            //         var videoTags = document.getElementsByTagName('video')
            //         for( var i = 0; i < videoTags.length; i++){
            //         alert( videoTags.item(i).currentSrc);
            // }


            ///confirm("Очистить arr ?") ? arr.length = 0 : alert(arr); 
            break;


        case 88: if (true === confirm('Очистить LocalStorage ?')) {
            if (true === confirm('Вы действительно желаете удалить данные LocalStorage, без возможности их востановления ?')) {
                window.localStorage.clear(); alert("очищено " + window.localStorage.length);
            };
        };


            break;
    }

}

function getCurTime() {
    document.getElementById("demo").innerHTML = Math.floor(vid.currentTime / 3600) + "." + Math.floor((vid.currentTime % 3600) / 60) + "." + Math.floor(vid.currentTime % 60) + " (" + Math.floor(vid.currentTime) + " sec)";
}
function setBeginningSoundOn() {
    if (vid.muted === true) {
        vid.currentTime = s
        vid.play()
        vid.muted = false;
    }
    else {
        var result = confirm("В  Е  Р  Н  У  Т  Ь  С  Я       К       Н  А  Ч  А  Л  У       ?")
        if (result === true) {
            vid.currentTime = s
        }
    }
}

function setCurTime() {
    if (vid.currentTime < s || vid.currentTime > f) {
        vid.currentTime = s;
    }
}

function setSoundPlus() {
    if ((vid.volume + MP) < 1.0) {
        vid.volume = vid.volume + MP;
    }
    else { vid.value = 1.0; }
}

function setSoundMinus() {
    if ((vid.volume - MP) > 0.0) {
        vid.volume = vid.volume - MP;
    }
    else { vid.volume = 0.0; }
}

function setPausePlay() {
    if (vid.paused === false) { vid.pause(); } else { vid.play(); vid.muted = false; }
}

function setPositionBack() {
    if (g != 1) { g = 1; }
    pos1 = vid.currentTime;
    pos2 = pos1 - b;
    //alert(s);
    //alert(pos2);
    if (s > pos2) {
        vid.currentTime = s
    } else { vid.currentTime = pos2; };
}

function setPositionGoo() {
    if (b != 1) { b = 1; }
    pos1 = vid.currentTime;
    pos2 = pos1 + g;
    if (pos2 > f) {
        vid.currentTime = f; setPausePlay()
    } else { vid.currentTime = pos2 };
}

function setShiftPowerPlus() {
    g = g * 10;
    b = b * 10;
}

function setShiftPowerMinus() {
    g = g / 2;
    b = b / 2;
}

function setShowTime() {
    if (vid.paused === false) { vid.pause(); } else { vid.play(); vid.muted = false; }

}
