const theDefaultValueOfThePlayPosition = 4;
var theMainValueOfThePlayPosition = theDefaultValueOfThePlayPosition;  //1254210625 //1255210625
var theSecondMultiplier = 10;
var theDivider = 2;

document.getElementById("demo4").innerHTML = " /" + theDivider;
document.getElementById("demo3").innerHTML = theSecondMultiplier + " *";
document.getElementById("demo2").innerHTML = theMainValueOfThePlayPosition + " step"; //1249210625

var pos1 = 0;
var pos2 = 0;
var m = 10;
var d = 2;
var MP = 0.1;
var vid = document.getElementById("myVideo");
var source = document.createElement('source');
var p_url = location.search.substring(1);

if (typeof p_url.values === "undefined") {
    p_url = "";
} else {
    var parametr = p_url.split("&");
    var sss = parametr[0];
    var fff = parametr[1];
    var eee = parametr[2];
    var namePartVCatalog = parametr[3];
}
const defaultSepar = defaultSeparator();
const whitespace = " "; // создается переменая пустового символа строки для использования в создании строк далее
listNamberOne();
let valueSepar = valueSeparator();
if (p_url === "") {
    sss = document.getElementById("topic").value.split(valueSepar)[1];
    fff = document.getElementById("topic").value.split(valueSepar)[2];
    namePartVCatalog = removingTheZerosOfTheKeyNumber(document.getElementById("top").value);
    var menyTopItem = document.getElementById("top").value;
    var pathURLName = definingTheHierarchicalLeveloftheDirectory() + getItemFunction(menyTopItem);//1239250625
    startVideo(pathURLName, sss, fff);//12-25_20-06-25-добавили в параметры вызова функции startVideo(pathURLName) дополнительно еще параметры: sss, fff (значания меток начала и конца выбранного фрагмента), для использования в указанной здесь функции ниже (описание для чего добавлены параметры: sss, fff  в указанной функции ниже)
} else {
    startVideo(eee, sss, fff);//12-25_20-06-25-добавили в параметры вызова функции startVideo(eee) дополнительно еще параметры: sss, fff (значания меток начала и конца выбранного фрагмента), для использования в указанной здесь функции ниже (описание для чего добавлены параметры: sss, fff  в указанной функции ниже)
};
function startVideo(path, theMarkOfTheBeginningOfAll, theMarkOfTheEndOfAll) {
    source.setAttribute('src', path);
    source.setAttribute('type', 'video/mp4');
    vid.appendChild(source);
    vid.play();
    console.log({
        src: source.getAttribute('src'),
        type: source.getAttribute('type'),
    });
    vid.addEventListener("timeupdate", getCurTime);
    if (theMarkOfTheBeginningOfAll.trim() !== "0" && theMarkOfTheEndOfAll.trim() === "0") { setPause(); } //если параметр theMarkOfTheBeginningOfAll (в функции локально обозначает начало выбранного фрагмента) не равен "0", а параметр theMarkOfTheEndOfAll(в функции локально обозначает конец фрагмента) одновременно равен "0" описываемый код при запуске видео  ставит его на паузу, иначе текущий фрагмент видео запускается как обычно. (Логика работы основана на изначально введенном правиле при обозначении общего отрезка всего видео - т.е. All, метки начала и конча воспроизведения обозначаются: "0" и обрабатываются далее кодом преобразуя их в значение фактического начала всего видео и в значение фактического конца всего видео. При просмотре видео и переходе от других отрезков указанных в меню к меню All программой предлогается начать воспроизведение видео с точки текущего восроизведения видео, либо оставить стандартное воспроизведение - с начала всей видеозаписи)

}

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
        if (/;;/.test(sess)) { // ;; - разделитель используемый затем для дальнейшей обработки, зарезервированных в программе имен используемых для определения отношения к настойкам, сниппетам, вопросам собеседований или значимой базовой информации. Строка  /;;/.test(sess) - определяет наличие разделителя: ;; (если он был введен в ручную). Если были после разделителя введена зарезервированные имена (Н И С Б на рус., S I SN на англ.) то далее  програмно сформирована комбинация символов для возможности автоматического внесения информации в базу данных по шаблону о соответствующих отношениях фрагмента к перечисленным выше четырем вопросам. Если после разделителя не внести указанные имена, будет присвоена информация о нулевом отношении. Если разделитель не был внесен в ручную при создании врагмента программа перейдет к выполнению кода после else.

            let study = sess.slice(sess.indexOf(";;") + 2); // возвращает количество символов с права (зарезервированные имена (имя), расположенных после: ;; и присваивает их переменной study

            sess = sess.replace(";;" + study, creatingPortionForTheDB(study)); // вызывает функцию обработки символов (или их отсутствие), внесенных вручную при создании фрагмента после ;;. Заменяем с помощью .replace символы зарезервированных имен после ;; или пробел после этого символа на шаблон из 0 и 1 для автомат. внесение в БД 
            return sess + commentCreate(); //возвращает сформированный ( в виде строкии из 0 и 1) шаблон для присваиванию записи фрагмента, которую в дальнейшем возможно использовать для автоматического внесения в базу данных, (14.06.2025) а также вызывает константу commentCreate() функции createComment() для формирования комментария игнорирование которого вставляется в виде символов "~0" в конце строки, что указвает на отсутствие комментария
        } else {
            sess = sess + creatingPortionForTheDB(study = ";;" + prompt('ДЛЯ ОПРЕДЕЛЕНИЯ ОТНОШЕНИЯ ФРАГМЕНТА ВИДЕО К НАСТРОЙКАМ (SETTING), ВВЕДИТЕ: "H"(РУССКАЯ РАСКЛАДКА) ИЛИ "S"(АНГЛИЙСКАЯ РАСКЛАДКА), К ЧАСТЫМ ВОПРОСАМ СОБЕСЕДОВАНИЙ (INTERVIEWS), ВВЕДИТЕ:"И"(РУССКАЯ РАСКЛАДКА) ИЛИ "I"(АНГЛИЙСКАЯ РАСКЛАДКА), К ИСПОЛЬЗОВАНИЮ СНИППЕТОВ (SNIPPETS), ВВЕДИТЕ: "СН"(РУССКАЯ РАСКЛАДКА) ИЛИ "SN"(АНГЛИЙСКАЯ РАСКЛАДКА), К БАЗОВОЙ ИНФОРМАЦИИ ВВЕДИТЕ: "Б"(РУССКАЯ РАСКЛАДКА) ИЛИ "B" (АНГЛИЙСКАЯ РАСКЛАДКА), К СИНТАКСИСУ ВВЕДИТЕ: "З"(РУССКАЯ РАСКЛАДКА) ИЛИ "R" (АНГЛИЙСКАЯ РАСКЛАДКА), К ТЕОРИИ ВВЕДИТЕ: "Т"(РУССКАЯ РАСКЛАДКА) ИЛИ "T" (АНГЛИЙСКАЯ РАСКЛАДКА),ЛИБО ВВЕДИТЕ ИНОЙ ЗНАЧАНИЕ ИЛИ ОТМЕНИТЕ ВВОД ЕСЛИ ФРАГМЕНТ НЕ ИМЕЕТ ТАКОЙ ПРИНАДЛЕЖНОСТИ'));
            return sess + commentCreate(); //возвращает сформированный ( в виде строкии из 0 и 1) шаблон для присваиванию записи фрагмента, которую в дальнейшем возможно использовать для автоматического внесения в базу данных, (14.06.2025) а также вызывает константу commentCreate() функции createComment() для формирования комментария игнорирование которого вставляется в виде символов "~0" в конце строки, что указвает на отсутствие комментария
        }

    } else if (whatKey === 1203) {
        sess = prompt("Стартуем фрагмент видеозаписи ?  Старт от начала(сек):", timePart);

        return sess;
    }
}

function creatingPortionForTheDB(implementationStudy) {

    let study_basics = "0", study_interviews = "0", study_settings = "0", study_snippets = "0", study_record = "0", study_theory = "0", study_full = "0";
    if (implementationStudy.toLowerCase().includes("б")) { study_basics = "1" };
    if (implementationStudy.toLowerCase().includes("b")) { study_basics = "1" };
    if (implementationStudy.toLowerCase().includes("и")) { study_interviews = "1" };
    if (implementationStudy.toLowerCase().includes("i")) { study_interviews = "1" };
    if (implementationStudy.toLowerCase().includes("с" && 'н')) { study_snippets = "1" };
    if (implementationStudy.toLowerCase().includes("s" && "n")) { study_snippets = "1"; implementationStudy = implementationStudy.toLowerCase().replace(/sn/g, "") };
    if (implementationStudy.toLowerCase().includes("н")) { study_settings = "1" };
    if (implementationStudy.toLowerCase().includes("s") && (implementationStudy.toLowerCase().includes("n")) === false) { study_settings = "1" };
    if (implementationStudy.toLowerCase().includes("r")) { study_record = "1" };
    if (implementationStudy.toLowerCase().includes("з")) { study_record = "1" };
    if (implementationStudy.toLowerCase().includes("t")) { study_theory = "1" };
    if (implementationStudy.toLowerCase().includes("т")) { study_theory = "1" };


    study_full = valueSepar + study_settings + valueSepar + study_interviews + valueSepar + study_snippets + valueSepar + study_basics + valueSepar + study_record + valueSepar + study_theory;

    return study_full
}

//(arr, window.localStorage, namePartVCatalog);
function arrPopDel(a) {
    a.length === 0 ? alert("Длина массива: 0, - нет элементов для удаления") : alert("элемент: " + a.pop() + "удален");
}

// (arr, window.localStorage, namePartVCatalog);
function inputNow(a, e, u) {
    let vvalue = "";
    if (checkingConditions(e, u) === 0) { handlerInputNow(a, e, u, z = 0) } else {
        switch (vvalue = prompt(`В хранилище (LocalStorage) уже имеются записи фрагментов с ключом по шаблону - ${u} в количестве - ${keySearchAorASimilar(e, u)} для продолжение  предыдущей сессии (выполненой по шаблону ключа - ${u}) нажмите 1, для перезаписи указанной сессии нажмите 2, для перезаписи с определенного фрагмента нажмите 3, для вставки перед определенным фрагментов нажмите 4, ДЛЯ ОТМЕНЫ НАЖИМИТЕ ИНОЙ СИМВОЛ КРОМЕ УКАЗАННЫХ ВЫШЕ, НАПРИМЕР - 0`)) {
            case "1": handlerInputNow(a, e, u, z = (keySearchAorASimilar(e, u))); break;
            case "2": handlerInputNow(a, e, u, z = 0); break;
            case "3": handlerInputNow(a, e, u, z = parseInt(inputMsg("Введите номер фрагмента с которого начнется перезапись"))); break;
            // (arr, window.localStorage, namePartVCatalog);
            case "4": handlerInputNow(a, e, u, z = parseInt(nameOftheСontrFragm(a, e, u))); break;
            default: alert("выбран символ не предусматриивающий какое-либо действие, вставка отменена, что обозначает откат на позиции перед нажатием - f4"); break;
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
        outputLocStorage = getItemFunction((keySearchForS - s) + u);//1239250625
        setItemFunction(((keySearchForS + (a.length / 4) - s) + u), outputLocStorage); //1209250625
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
        // alert(a[x] + " !== " + u);
        if (a[x] !== u) {
            BodyLocStorage = BodyLocStorage + a[x];
            // alert(a[x + 1] + " !== " + u);
            if (a[x + 1] !== u) {
                try { BodyLocStorage = BodyLocStorage + valueSepar } catch { // 03.04.25 добавил блок try, что бы обходить ошибку отсутствия инициализации переменной valueSepar, в случае когда у функции которая ей присваивает значение, еще несоздан источник данных (инфа в locakStorage или в меню, надо посмотреть где именно, т.к. сейчас не помню)
                    BodyLocStorage = BodyLocStorage + defaultSeparator()
                }

            };
        } else {
            setItemFunction((y + z) + u, BodyLocStorage); //1209250625
            //document.getElementById("topic").value = BodyLocStorage; (не стабилизирует пункт All меню 2 надо протестировать и разобраться почему)
            BodyLocStorage = "";
            y++;
        }
    }
    try {
        arr.length = 0;
        textSave(addInputLocStorage(e, u), u);
    }
    catch {
        textSave(addInputLocStorage(e, u), u);
    }

}

function textSave(e, u) {
    const data = e; const a = document.createElement('a'); const blob = new Blob([JSON.stringify(data)]); a.href = URL.createObjectURL(blob); a.download = 'fuel' + u; a.click();
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
function availabilityOfaKeys(e) {
    // alert(`Общее количество элементов LocalStorage ${e.length}`);
    return e.length;
}



function addInputLocStorage(e, u) {
    let element = "";
    let iSt = 2;
    while ((getItemFunction(iSt + u) !== null)) {
        element = element + getItemFunction(iSt + u) + "," + u + ",";//1239250625
        iSt++;
    };
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
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = function (selectedFile) {
            let buffer = selectedFile.target.result;
            let tempDateBlob = new Blob([new Uint8Array(buffer)], { type: 'video/mp4' });
            let url = window.URL.createObjectURL(tempDateBlob);
            let path = prompt("вставьте скопированный путь к файлу");
            let correctedPath = path.replace(/\\/g, '/') + '/';
            let generalPath = correctedPath + nameResulte;
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
                }

                const correctName = correctedName();

                function correctedName() {
                    return nameResulte.split(".")[0];
                }

                if (getItemFunction("0" + correctName) === null && getItemFunction("00" + correctName) === null) {//1239250625



                    setItemFunction("00" + correctName, relative.slice(1));//1209250625


                    let arrForMenyTwo = ["*0", "0", "All~0~0~0~0~0~0~0", correctName];
                    // (arr, window.localStorage, namePartVCatalog, инфа_пользователя);
                    handlerInputNow(arrForMenyTwo, window.localStorage, correctName, 1);// улучшить код ? есть ли необходимость передавать в аргументе - window.localStorage ? Может он и без того глобально доступен в любой части кода ? Вопрос ?
                    window.location.reload();
                } else {
                    if (getItemFunction("0" + correctName) !== null) {//1239250625
                        document.getElementById("top").value = ReplacingItWithAsingleOneInThelocalStorage(document.getElementById("top").value);
                        ReplacementWithAdoubleOfLocalStorage("0" + correctName);
                        window.location.reload();
                    }
                    if (getItemFunction("00" + correctName) !== null) {//1239250625
                        document.getElementById("top").value = ReplacingItWithAsingleOneInThelocalStorage(document.getElementById("top").value);
                        window.location.reload();
                    }
                }

                return relative.slice(1);
            };
            let nameDir = nameResulte.split(".");
            if (getItemFunction("00" + nameDir[0]) === null) {//1239250625
                setItemFunction("0" + nameDir[0], relativePath);//1209250625
            }
            vid.src = url;
            document.getElementById('inputfile1').value = "";
            return url;
        };

        reader.onerror = function (selectedFile) {

            selectedFile.error(
                "Файл не может быть прочитан! код " + selectedFile.target.error.code);
        };
    }
}

function listNamberOne(a = meny1()) {

    let nameSelectedMeny1 = a; // присваивается значение ключа возвращенного вызовом функции meny1() выше
    let selectedNameMeny1 = nameSelectedMeny1.substr(1); // убирает лишний символ ключа с левой стороны для использования ниже
    document.write(`<select name='${nameSelectedMeny1}' id="topic">`); // записывает тег в подменю веб документа
    let i = 1; // создает переменную со значением для использование ниже
    //alert(window.localStorage.getItem(selectedNameMeny1.replace("0", i)));
    while (getItemFunction(selectedNameMeny1.replace("0", i)) !== null) {//1239250625

        let nameВutton = selectedNameMeny1.replace("0", i);
        //alert(window.localStorage.getItem(nameВutton));        
        if (getItemFunction(nameВutton).charAt(0) !== "*") {//1239250625
            var nameValueВut = i + valueSeparator() + whitespace + getItemFunction(nameВutton);//1239250625
        } else {
            nameValueВut = "*" + i + valueSeparator() + whitespace + window.localStorage.getItem(nameВutton).slice(1); // Присваиваем значение пункта меню имеющего звезвдочку
            var nameValueВuty = nameValueВut;// Присваиваем значение пункта меню имеющего звезвдочку переменной nameValueВuty (nameValueВuty затем будет использована для вывода в первую строку меню пункта со звездочкой, а также для присовоения текстовому полю комментария - текста комментария из текстового значения пункта меню со звездочкой)
        }
        i++;
        document.write(`<option value='${nameValueВut}'>'${nameValueВut.split(valueSeparator())[0].replace("*", "  *  ") + ") " + nameValueВut.split(valueSeparator())[3]}'</option>`);
    }
    document.write(`</select>`);
    document.getElementById("topic").value = nameValueВuty;


    // document.write(`<button id="hideButton">.   .   .</button><div id="myElement" style = "display:none";><textarea name = "comment" rows="5" cols=90% minlength="2" maxlength="255" wrap="physical">'${nameValueВuty.split(valueSeparator()).slice(-1)}'</textarea></div>`); // (14.06.2025) эти строки кода вставляют текстовый комментарий либо символы "~0" указывающие на его отсутсвие из строки значения localStorage (комментарий расположен последним в строке и извлекается поэтому: nameValueВuty.split(valueSeparator()).slice(-1))
    // const hideButton = document.getElementById('hideButton');
    // const myElement = document.getElementById('myElement');



    document.write(`<button id="hideButton">.   .   .</button><div id="myElement" style = "display:none";><textarea id ="valueTextarea" name = "comment" rows="5" cols=90% minlength="2" maxlength="255" wrap="physical">'${nameValueВuty.split(valueSeparator()).slice(-1)}'</textarea><button id="saveButtonTextarea">сохранить</button><div id="myElement2";></div> `); // (14.06.2025) эти строки кода вставляют текстовый комментарий либо символы "~0" указывающие на его отсутсвие из строки значения localStorage (комментарий расположен последним в строке и извлекается поэтому: nameValueВuty.split(valueSeparator()).slice(-1))
    const hideButton = document.getElementById('hideButton');
    const myElement = document.getElementById('myElement');
    const saveButtonTextarea = document.getElementById('saveButtonTextarea');
    // const valueTextarea = document.getElementById('valueTextarea');


    hideButton.addEventListener('click', () => {
        if (myElement.style.display === 'block') {
            myElement.style.display = 'none';
        }
        else { myElement.style.display = 'block'; }

    });

    saveButtonTextarea.addEventListener('click', saveButtonTextareaFunction);
}

function meny1() {
    if (window.localStorage.length === 0) {
        alert('В ТЕКУЩЕМ АККАУНТЕ в localStorage (локальном хранилище гуглхром используемом данной программой) ОТСУТСТВУЮТ ДАНННЫЕ О ПУТИ К КАКОМУ-ЛИБО ВИДЕОФАЙЛУ И КАКИЕ-ЛИБО ТЕКСТЫ ДЛЯ ФОРМИРОВАНИЯ МЕНЮ, В СВЯЗИ С ЧЕМ МЕНЮ НЕ БУДЕТ ЗАГРУЖЕНО. ДЛЯ ПРОДОЛЖЕНИЯ РАБОТЫ ВОЙДИТЕ В НЕОБХОДИМЫЙ ВАМ АККАУНТ И ЗАПУСТИТЕ ПРОГРАММУ СНОВА, ЛИБО ДЛЯ ПРОДОЛЖЕНИЯ РАБОТЫ В ТЕКУЩЕМ АККУАНТЕ И СОЗДАНИЯ НОВОГО МЕНЮ ВОСПОЛЬЗУЙТЕ ССЫЛКОЙ ОКНА ПРОГРАММЫ: "Click to upload FILE" (для указания пути к виофайлу и создания начального меню для продолжения работы по создания нового меню )');
        throw new Error;

    }
    document.write(`<select name="top" id="top">`);
    for (let i = 0; i < window.localStorage.length; i++) {
        if (window.localStorage.key(i).charAt(0) === "0") {
            let nameValueВutton = window.localStorage.key(i);
            document.write(`<option value='${nameValueВutton}'>'${nameValueВutton.slice(1).replace("0", " * ")}'</option>`);
            if (nameValueВutton.charAt(1) === "0") {
                document.getElementById("top").value = nameValueВutton;
            }
        }
    }
    let theSelectedLine = document.getElementById("top").value; // 16-03-25_17-34
    const theBeginningOftheName = theSelectedLine.charAt(1);
    document.write(`</select>`);


    if (theBeginningOftheName !== '0') {
        ReplacementWithAdoubleOfLocalStorage(theSelectedLine);
        ReplacementWithAdoubleOfMeny(theSelectedLine);
    }

    return document.querySelector("#top").value;
}

function ReplacementWithAdoubleOfLocalStorage(a) {
    let tempValueItemLocalStorage = getItemFunction(a);//1239250625
    if (a.charAt(1) === "0") {
        setItemFunction('0' + ReplacingItWithAsingleOneInThelocalStorage(a), tempValueItemLocalStorage);//1209250625
        removeItemFunction(a); //1430260625
    } else {
        removeItemFunction(a); //1430260625
        setItemFunction('0' + a, tempValueItemLocalStorage);//1209250625
    }
}

function ReplacingItWithAsingleOneInThelocalStorage(a) {
    let tempValueItemLocalStorage = window.localStorage.getItem(a);
    while (a.charAt(1) === "0") {
        removeItemFunction(a); //1430260625
        a = a.slice(1);
        setItemFunction(a, tempValueItemLocalStorage);//1209250625
    }
    return a;
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
        if (getItemFunction(i + a.slice(1)).charAt(0) === "*") {//1239250625
            delStar(i + a.slice(1));
        };
    }
}

function delStar(a) {
    let tempValueItemLocalStorage = getItemFunction(a);//1239250625
    removeItemFunction(a); //1430260625
    setItemFunction(a, tempValueItemLocalStorage.slice(1));//1209250625

}

function addStarlocalStorage(a, e) { // функция добавляет звезду строке меню, что-бы она была оформлена как выбранная
    let tempValueItemLocalStorage = a.split(valueSepar); // разбивает строку (по разделителю - значению содержащемуся в переменной valueSepar) формируя массив, которые присваевается переменной tempValueItemLocalStorage
    let tempValuePartEndItemLocalStorage = addStarEnd(valueSepar, tempValueItemLocalStorage); // передает значение разделителя из переменной - valueSepar, и переменную tempValueItemLocalStorage содержащуя массив созданный в предыдущей строке, в качестве аргументов функции addStarEnd, которая возвращает значение из последних элементов переданного массива обратно и присваивает его переменной - tempValuePartEndItemLocalStorage
    // alert("tempValueItemLocalStorage[0] + e.slice(1) : " + tempValueItemLocalStorage[0] + e.slice(1));
    removeItemFunction(tempValueItemLocalStorage[0] + e.slice(1));// удаляет в локальном хранилище запись без звездочки //1430260625
    setItemFunction(tempValueItemLocalStorage[0] + e.slice(1), "*" + defaultStart_or_currentStart(tempValueItemLocalStorage) + valueSepar + tempValueItemLocalStorage[2] + tempValuePartEndItemLocalStorage);//вставляет аналогичную запись но с добавлением звездочки //1209250625
    return a = "*" + tempValueItemLocalStorage[0] + tempValueItemLocalStorage[1] + valueSepar + tempValueItemLocalStorage[2] + tempValuePartEndItemLocalStorage; // возвращает вызвавшей функции запись с добавлением взездочки
}

document.getElementById("topic").onchange = function () { //функция запускается при изменении (выборе другого пункта меню) меню "topic"
    scrollThroughTheOldKey(document.getElementById("topic").name); //строка кода вызывает функцию scrollThroughTheOldKey
    addStarlocalStorage(document.getElementById("topic").value, document.getElementById("topic").name.slice(1)); //строка кода вызывает функцию addStarlocalStorage
    window.location.reload(); // строка кода перезагружает окно браузера
};

function definingTheHierarchicalLeveloftheDirectory() {
    let startDirectory = ""
    let startDir = "../"
    let directoryPath = window.location.pathname;
    ar = [];
    ar = directoryPath.split("/");
    let i = 2;
    while (ar[ar.length - i] !== "EDUCATION") {
        startDirectory = startDirectory + startDir;
        i++;
    }
    return startDirectory;
}

function removingTheZerosOfTheKeyNumber(a) {
    let new_value = a;
    while (new_value.charAt(0) === "0") {
        new_value = new_value.slice(1);
    }
    return new_value;
}

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
        case 115: inputNow(arr, window.localStorage, namePartVCatalog); window.location.reload(); break; // улучшить код ? зачем нам в аргумента передавать - window.localStorage ? (есть подозрение что оно и так доступно из любой части кода, т.е. является глобальным значением или, что-то в этом духе похоже наверно)
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
    document.getElementById("demo1").innerHTML = Math.floor(vid.currentTime / 3600) + "." + Math.floor((vid.currentTime % 3600) / 60) + "." + Math.floor(vid.currentTime % 60) + " (" + Math.floor(vid.currentTime) + " sec)";
}
function setBeginningSoundOn() {
    if (vid.muted === true) {
        vid.currentTime = sss
        vid.play()
        vid.muted = false;
    }
    else {
        var result = confirm("В  Е  Р  Н  У  Т  Ь  С  Я       К       Н  А  Ч  А  Л  У       ?")
        if (result === true) {
            vid.currentTime = sss
        }
    }
}

function setCurTime() {
    if (fff === "0") { fff = vid.duration; };
    if (vid.currentTime < sss || vid.currentTime > fff) {
        vid.currentTime = sss;
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

function setReset() {
    theMainValueOfThePlayPosition = reset(theMainValueOfThePlayPosition, theDefaultValueOfThePlayPosition)
    document.getElementById("demo2").innerHTML = theMainValueOfThePlayPosition + " step";
}

function MathRound() {
    theMainValueOfThePlayPosition = Math.floor(theMainValueOfThePlayPosition);
    document.getElementById("demo2").innerHTML = theMainValueOfThePlayPosition + ' step';
}

function setPositionBack() {
    pos1 = vid.currentTime;
    pos2 = pos1 - theMainValueOfThePlayPosition; //1255210625
    //alert(s);
    //alert(pos2);
    if (sss > pos2) {
        vid.currentTime = sss
    } else { vid.currentTime = pos2; };
    document.getElementById("demo2").innerHTML = theMainValueOfThePlayPosition + ' step'; //1255210625
}

function setPositionGoo() {
    //if (bbb != 4) { bbb = 4; } //1254210625 //1255210625
    pos1 = vid.currentTime;
    pos2 = pos1 + theMainValueOfThePlayPosition;
    if (pos2 > fff) {
        vid.currentTime = fff; setPausePlay()
    } else { vid.currentTime = pos2 };
    document.getElementById("demo2").innerHTML = theMainValueOfThePlayPosition + " step"; //1255210625

}




function setShiftPowerPlus() {
    theMainValueOfThePlayPosition = magnificationСalculator(theMainValueOfThePlayPosition, theSecondMultiplier); //1255210625
    document.getElementById("demo2").innerHTML = theMainValueOfThePlayPosition + " step"; //1255210625

}

function setShiftPowerMinus() {
    theMainValueOfThePlayPosition = reductionCalculator(theMainValueOfThePlayPosition, theDivider); //1255210625
    document.getElementById("demo2").innerHTML = theMainValueOfThePlayPosition + " step"; //1255210625
}




function setShowTime() {
    if (vid.paused === false) { vid.pause(); } else { vid.play(); vid.muted = false; }

}



//ВВЕДЕНИЕ С 21-06-25 НОВОГО ВИДА ЗАМЕТОК О ПОРЯДКЕ ИЗМЕНЕНИИ КОДА:
//1254210625 -поменяли шаг изменения позиции с 1 на 4
//1255210625 -увеличили в 3 раза количество символов переменной для большей читабельности
//1249210625 - добавили строку для демонстрации  на кнопке управления размера шага изменения позиции видео
//1209250625 провел замену кода обращения e.setItem(или - window.localStorage.setItem) на setItemFunction, т.е. замена настоящего когда на обращение к функции - setItemFunction (функции с аналогичным функционалом)
//1239250625 заменил в строке код: window.localStorage.getItem на вызов функции: getItemFunction (с аналогичным функционалом)
//1430260625 removeItemFunction - функция удаляет значение  window.localStorage (хранилища браузера) по входящему значению ключу - key, в соответствии с синтаксисом - localStorage;