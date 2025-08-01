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
//408inScriptHandler_copy.js