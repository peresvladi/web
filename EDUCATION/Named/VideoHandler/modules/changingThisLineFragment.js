const changingThisLineFragment = (line, separator, fragmentNumberInОrder, changedСontent) => {
    let anArrayFromTheCurrentRow = line.split(separator);
    alert(anArrayFromTheCurrentRow + " В первой строке тела функции строка (line) преобразуется в массив разделяя строку по разделютелю (separator) и полученный массив присваивается переменной anArrayFromTheCurrentRow Дополнение: будет меняться фрагмент под номером - " + fragmentNumberInОrder + " на контент: " + changedСontent);
    if (fragmentNumberInОrder < 0) {
        fragmentNumberInОrder = convertMinus(fragmentNumberInОrder, anArrayFromTheCurrentRow);
    }
    let pull = "";
    let replaceableContent = anArrayFromTheCurrentRow[fragmentNumberInОrder];
    for (let leng = 0; leng < anArrayFromTheCurrentRow.length; leng++) {
        let element = anArrayFromTheCurrentRow[leng];
        if (element == replaceableContent) {
            element = changedСontent;
        }
        pull = pull + element + separator;
    }
    let changingTheArray = pull;
    alert(changingTheArray + " Во второй строке, элементу, выбранному по номеру порядка его расположения в массиве (имеет тот же номер что и фрагмент строки разделенный по разделютелю) присваевается новое значение (новый контент из changedСontent), после чего  массив с измененым элементом присваивается переменной changingTheArray.")
    let modifiedString = changingTheArray.toString();
    alert(modifiedString + " В третье строке изменный массив  (changingTheArray), преобразуется в измененую строку, которая присваивается переменной modifiedString.")
    return modifiedString; //changingThisLineFragment - функция, которая принимает строку в переменную line, разделитель в переменную separator, номер по порядку фрагмента строки (фрагмента которые требуется изменить) разбиваемой по разделителю (в том числе и с отрицательным знаком, при вычислении порядка расположения фрагмента начиная с конца строки) в переменную fragmentNumberInОrder, новый контент (который заменит старый расположенный в соотвествующем фрагменте строки) в переменную changedСontent. В первой строке тела функции строка (line) преобразуется в массив разделяя строку по разделютелю (separator) и полученный массив присваивается переменной anArrayFromTheCurrentRow. Во второй строке, элементу, выбранному по номеру порядка его расположения в массиве (имеет тот же номер что и фрагмент строки разделенный по разделютелю) присваевается новое значение (новый контент из changedСontent), после чего  массив с измененым элементом присваивается переменной changingTheArray. В третье строке изменный массив  (changingTheArray), преобразуется в измененую строку, которая присваивается переменной modifiedString. В четвертой строке тела функции полученная измененная строка (modifiedString) возвращается вызвавшему настоящую функцию ( т.е. функцию changingThisLineFragment()) элементу кода программы. 


}