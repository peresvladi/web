function meny2(a = meny1()) {

    let nameSelectedMeny1 = a; // присваивается значение ключа возвращенного вызовом функции meny1() выше
    let selectedNameMeny1 = nameSelectedMeny1.substr(1); // убирает лишний символ ключа с левой стороны для использования ниже
    document.write(`<select name='${nameSelectedMeny1}' id="topic">`); // записывает тег в подменю веб документа
    let i = 1; // создает переменную со значением для использование ниже
    //alert(window.localStorage.getItem(selectedNameMeny1.replace("0", i)));

    let nameValueВuty = "1~ 0~0~All~0~0~0~0~0~0~0"; //020925

    while (getItemFunction(selectedNameMeny1.replace("0", i)) !== null) {

        let nameВutton = selectedNameMeny1.replace("0", i);
        //alert(window.localStorage.getItem(nameВutton));        
        if (getItemFunction(nameВutton).charAt(0) !== "*") {
            var nameValueВut = i + valueSeparator() + whitespace + getItemFunction(nameВutton);
        } else {
            nameValueВut = "*" + i + valueSeparator() + whitespace + window.localStorage.getItem(nameВutton).slice(1); // Присваиваем значение пункта меню имеющего звезвдочку
            nameValueВuty = nameValueВut;// Присваиваем значение пункта меню имеющего звезвдочку переменной nameValueВuty (nameValueВuty затем будет использована для вывода в первую строку меню пункта со звездочкой, а также для присовоения текстовому полю комментария - текста комментария из текстового значения пункта меню со звездочкой)
        }
        i++;
        document.write(`<option value='${nameValueВut}'>'${nameValueВut.split(valueSeparator())[0].replace("*", "  *  ") + ") " + nameValueВut.split(valueSeparator())[3]}'</option>`);
    }
    document.write(`</select>`);
    if (nameValueВuty === '1~ 0~0~All~0~0~0~0~0~0~0') { setItemFunction('1' + selectedNameMeny1, '*0~0~All~0~0~0~0~0~0~0') };//020925
    document.getElementById("topic").value = nameValueВuty;
    //let createValTextarea = nameValueВuty.split(valueSeparator()).slice(-1);
    let createValTextarea = createValueTextarea(nameValueВuty, valueSeparator(), -1);
    // alert("пришло в meny2.js >>> " + createValTextarea);


    // <button id="testCode" style="display:block">Пли..Тест</button>
    document.write(`<button id="hideButton">.   .   .</button><div id="myElements" style = "display:none";><textarea id ="valueTextarea" name = "comment" rows="5" cols=90% minlength="2" maxlength="255" wrap="physical">'${createValTextarea}'</textarea><div class="groupOfControlButtons"><button id="saveButtonTextarea" style = "display:block";>сохранить комментарий</button><button id="editMenuItem">редактировать меню</button><button id="saveMenuItem" style = "display:none";>сохранить меню</button></div></div> <a href="#" onclick="keyByDeleting(event)" style = "display: none" id = "myLink">удалить запись меню с..по..</a>`);

    // (14.06.2025) эти строки кода вставляют текстовый комментарий либо символы "~0" указывающие на его отсутсвие из строки значения localStorage (комментарий расположен последним в строке и извлекается поэтому: nameValueВuty.split(valueSeparator()).slice(-1))

    //28.08.25 к вышезаписаной загрузке эелементов ( т.е. к document.write....) дописал в конце (<a href="#" onclick="keyByDeleting(event)" style = "display: none" id = "myLink">удалить запись меню с..по..</a>). Это невидимая ссылка которую делает видимой ниже расположенный код (hideButton.addEventListener('click', () => {.......), который одновременно дописал (так, в конце if добавил: myLink.style.display = 'none' ; в конце else добавил: myLink.style.display = 'block';). Теперь после нажатия кнопки 'hideButton' ссылка становиться видимой, после чего при нажатии на нее своим кодом (onclick="keyByDeleting(event)") запускает функцию keyByDeleting(event), которая выполняет алгоритм удаления записей из localStorage хранилища браузера хром.

    // const testCode = document.getElementById('testCode');
    // testCode.addEventListener('click', keyByDeleting);

    const hideButton = document.getElementById('hideButton');
    const myElements = document.getElementById('myElements');
    const saveButtonTextarea = document.getElementById('saveButtonTextarea');
    const valueTextarea = document.getElementById('valueTextarea');
    const saveMenuItem = document.getElementById('saveMenuItem');
    const editMenuItem = document.getElementById('editMenuItem');

    hideButton.addEventListener('click', () => {
        if (myElements.style.display === 'block') {
            myElements.style.display = 'none';
            myLink.style.display = 'none';

        }
        else {
            myElements.style.display = 'block';
            myLink.style.display = 'block';
        }

    });
    saveButtonTextarea.addEventListener('click', saveButtonTextareaFunction);
    editMenuItem.addEventListener('click', replaceTheContent);
    saveMenuItem.addEventListener('click', saveMenuItemFunction);

    editMenuItem.addEventListener('click', () => {
        if (saveButtonTextarea.style.display === 'block') {
            saveButtonTextarea.style.display = 'none';
        }

        if (saveMenuItem.style.display === 'none') {
            saveMenuItem.style.display = 'block';
        }

    })

    saveMenuItem.addEventListener('click', () => {
        if (saveButtonTextarea.style.display === 'none') {
            saveButtonTextarea.style.display = 'block';
        }
        if (saveMenuItem.style.display === 'block') {
            saveMenuItem.style.display = 'none';

        }

    })

}

//020925 - изменен код для борьбы с ошибкой - "потеря звездочки (*)" При потере звездочки (например при удалении записей меню (в том числе и записи со звездочкой) из localStorag для их перезаписи (например с целью обновления) ранее переменная nameValueВuty оставалась без инициализации (в состоянии - undefind), что влекло ошибки, например при попытки использовать в дальнейшем коде nameValueВuty(которая осталась без инициализации - undefind). Поэтому для исправления ошибки переменной nameValueВuty сразу при ее объявлении было присвоено значение (Вот-так: let nameValueВuty = "1~ 0~0~All~0~0~0~0~0~0~0";) А в случае обнаружения оператором if (Вот этим: if (nameValueВuty === '1~ 0~0~All~0~0~0~0~0~0~0') { setItemFunction('1' + selectedNameMeny1, '*0~0~All~0~0~0~0~0~0~0') })что значение переменной осталось без изменениий (либо было заменено в коде на аналогичное значение без взездочки), тогда указанный код после if вносит шаблонное значение со звездочкой в localStorage ('*0~0~All~0~0~0~0~0~0~0') для дальнейшего его использования как выбранного после перезагрузки в обычном режиме. И, что-бы обойти ошибку в данный момент предварительно вызывает в меню записанный пункт ('1~ 0~0~All~0~0~0~0~0~0~0' т.е. без звездочки), который в дальнейшем при перезакрузке скачивается из localStorage в пункт меню со звездочкой, исправляя таким образом ошибку "потери звездочки" после чего код должен быть исправлен и работать штатно.