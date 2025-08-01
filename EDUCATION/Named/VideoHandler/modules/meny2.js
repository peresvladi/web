function meny2(a = meny1()) {

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
    //let createValTextarea = nameValueВuty.split(valueSeparator()).slice(-1);
    let createValTextarea = createValueTextarea(nameValueВuty, valueSeparator(), -1);
    //alert("пришло в meny2.js >>> " + createValTextarea);
    //<button id="testCode" style = "display:block">Пли..Тест</button>
    document.write(`<button id="hideButton">.   .   .</button><div id="myElements" style = "display:none";><textarea id ="valueTextarea" name = "comment" rows="5" cols=90% minlength="2" maxlength="255" wrap="physical">'${createValTextarea}'</textarea><div class="groupOfControlButtons"><button id="saveButtonTextarea" style = "display:block";>сохранить комментарий</button><button id="editMenuItem">редактировать меню</button><button id="saveMenuItem" style = "display:none";>сохранить меню</button></div></div> `); // (14.06.2025) эти строки кода вставляют текстовый комментарий либо символы "~0" указывающие на его отсутсвие из строки значения localStorage (комментарий расположен последним в строке и извлекается поэтому: nameValueВuty.split(valueSeparator()).slice(-1))

    // const testCode = document.getElementById('testCode');
    // testCode.addEventListener('click', fCDT);

    const hideButton = document.getElementById('hideButton');
    const myElements = document.getElementById('myElements');
    const saveButtonTextarea = document.getElementById('saveButtonTextarea');
    const valueTextarea = document.getElementById('valueTextarea');
    const saveMenuItem = document.getElementById('saveMenuItem');
    const editMenuItem = document.getElementById('editMenuItem');

    hideButton.addEventListener('click', () => {
        if (myElements.style.display === 'block') {
            myElements.style.display = 'none';
        }
        else { myElements.style.display = 'block'; }

    });
    saveButtonTextarea.addEventListener('click', saveButtonTextareaFunction);
    editMenuItem.addEventListener('click', replaceTheContent);
    saveMenuItem.addEventListener('click', saveMenuItemFunction);

    editMenuItem.addEventListener('click', () =>{
       if (saveButtonTextarea.style.display === 'block') {
            saveButtonTextarea.style.display = 'none';
       }
           
       if (saveMenuItem.style.display === 'none') {
            saveMenuItem.style.display = 'block';
       }
    
    })

    saveMenuItem.addEventListener('click', () =>{
       if (saveButtonTextarea.style.display === 'none') {
            saveButtonTextarea.style.display = 'block';
       }
        if (saveMenuItem.style.display === 'block') {
            saveMenuItem.style.display = 'none';
           
       }
     
    })
    
}