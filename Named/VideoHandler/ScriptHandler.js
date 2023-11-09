var p_url = location.search.substring(1);
var parametr = p_url.split("&");
var s = parametr[0];
//alert("var s = parametr[0]; = " + s)
var f = parametr[1];
var e = parametr[2];
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
var pathURL = window.localStorage.getItem('C_7LAT5TG_func1')
if (pathURL === null) {
    pathURL = ""

}
var pathName = window.localStorage.getItem('C_7LAT5TG_func2')
if (pathName === null) {
    pathName = e

}
var pathURLName = (pathURL + pathName)

source.setAttribute('src', pathURLName);
source.setAttribute('type', 'video/mp4');

vid.appendChild(source);
vid.play();
console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
});


vid.addEventListener("timeupdate", getCurTime);


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

function arrPopDel(ar) {
    ar.length === 0 ? alert("Длина массива: 0, - нет элементов для удаления") : alert("элемент: " + ar.pop() + "удален");

}

function inputNow(e) {
    if (checkingConditions(window.localStorage, namePartVCatalog) === 0 || true === confirm(`В хранилище (LocalStorage) уже имеются записи фрагментов с ключом по шаблону - ${namePartVCatalog} для их перезаписи нажмите OK. Для продолжение сессии нажмите что-то другое`)) { handlerInputNow(e, z = 0) } else { handlerInputNow(e, z = checkingConditions(window.localStorage, namePartVCatalog)) };
}


function handlerInputNow(e, z) {
    let arrBodyLocStorage = new Array();
    let y = 0;
    for (let x = 0; x < e.length; x++) {
        let ifKeyLocStorage = e[x];
        if (ifKeyLocStorage !== namePartVCatalog) {
            arrBodyLocStorage.push(e[x]);
        } else {
            window.localStorage.setItem((y + z) + namePartVCatalog, arrBodyLocStorage);
            let arh = (y + z) + namePartVCatalog, arrBodyLocStorage;
            textSave(arh);
            arrBodyLocStorage.length = 0;
            y++;
        }

    }

}


function textSave(e) {
    const data = e; const a = document.createElement('a'); const blob = new Blob([JSON.stringify(data)]); a.href = URL.createObjectURL(blob); a.download = 'fuel'; a.click();
}



// function continuedRecording(e, u) {
//     if (availabilityOfaKeys(e) && keySearch(e, u) === true) {

//     }
// }

function checkingConditions(e, u) {
    if (availabilityOfaKeys(e) > 0 && keySearchAorASimilar(e, u) > 0) {

        var res = keySearchAorASimilar(e, u);

    } else {
        alert("условий нет");
        res = 0;
    }
    alert("услования есть");
    return res;
}


function keySearchAorASimilar(e, u) {
    let i = 0
    for (let z = 0; z < e.length; z++) {
        if (e.key(z).includes(u) === true) {
            i++;
        }
    }
    alert(`Количество записей по шаблону ключа ${u} составляет ${i}`);
    return i;

}



function availabilityOfaKeys(e) {
    alert(`Общее количество элементов LocalStorage ${e.length}`);
    return e.length;
}


document.onkeydown = go_key;
function go_key(event) {
    if (!event) { event = window.event; }
    console.log(event, event.keyCode)
    switch (event.keyCode) {
        //case 32: setPausePlay(); break;
        case 39: setPositionGoo(); break;
        case 37: setPositionBack(); break;
        case 38: setSoundPlus(); break;
        case 40: setSoundMinus(); break;
        case 119: vid.pause(); arr.push((keySave(119))); break;
        case 120: vid.pause(); arr.push((keySave(1201))); arr.push((keySave(1202))); arr.push(namePartVCatalog); confirm("Начать следующий фрагмент") === true ? arr.push((keySave(1203))) : arr; break;
        case 115: inputNow(arr); break;
        case 114: confirm("Удалить последнюю запись") === true ? arrPopDel(arr) : alert("Удаление последней записи отменено"); break;
        case 90: alert

            // ("ИТОГО: " + checkingConditions(window.localStorage, namePartVCatalog)); 

            break;


        case 88:

            //availabilityOfaKeys(window.localStorage);


            //keySearchAorASimilar(window.localStorage, namePartVCatalog);




            if (true === confirm('Очистить LocalStorage ?')) {
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
