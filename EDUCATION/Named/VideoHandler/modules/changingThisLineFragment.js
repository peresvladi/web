const changingThisLineFragment = (line, separator, fragmentNumberInОrder, changedСontent) => {
    // alert(line + " <= входящие данные")
    const separatorCurrent = separator;
    let anArrayFromTheCurrentRow = theDismembermentFunction(line,separatorCurrent);
    let pull = "";
    let fragmentNumberInОrderPlus = fragmentNumberInОrder;
    if (fragmentNumberInОrderPlus < 0) {
        fragmentNumberInОrderPlus = convertMinus(fragmentNumberInОrder, anArrayFromTheCurrentRow);
    }
          
    for (let leng = 0; leng < anArrayFromTheCurrentRow.length; leng++) {
        let element = anArrayFromTheCurrentRow[leng];
        if (leng == fragmentNumberInОrderPlus) {
            element = theKillerOfOuterQuotes(changedСontent);
        }
        
        if(leng < (anArrayFromTheCurrentRow.length - 1)){
         pull = pull + element + separatorCurrent;
        }else{
        pull = pull + element;    
        }
    }
    // alert(pull + " Вот такая строка получилась. Ли ?")
    
    
    return pull; //changingThisLineFragment - функция, которая принимает в качестве параметров строку - 1) line(содержит строку активного пункта меню "topic"), 2) Разделитель в значение separator (содержит значение возвращаемое функцией valueSeparator(), т.е. значение текущего разделителя используемого во всей программе). 3) Номер по порядку фрагмента строки (фрагмента который требуется заменить). 4) Значение комментария которым в программе будет заменен старый комментарий. В первой строке тела функции, значение разделителя separator присваивается константе separatorCurrent. Во-второй,  строка пораметра line преобразуется в массив по разделителю - separator (константа separatorCurrent) и присваивается переменной - anArrayFromTheCurrentRow. Для работы с элементами созданного массива создается переменная pull. Создается переменная  fragmentNumberInОrderPlus которой присваивает значение параметра - fragmentNumberInОrder. Логический оператор if в случае если параметр fragmentNumberInОrder имеет отрицательное значение вызывает функцию convertMinus, которая возрвращает оператор преобразованный в положительное и соответствующее относительно порядку элементов созданного массива anArrayFromTheCurrentRow значение и присваивает его переменной fragmentNumberInОrderPlus. Цикл for повторяет содержащий код количество раз равное количеству элементов массива  anArrayFromTheCurrentRow.   Первый логический оператор if внутри цикла проверяет сравнялось ли значение счетчика leng c значением переменной fragmentNumberInОrderPlus и если да, то элементу element (производному от элемента массива имеющего тот же порядковый номер, что и строка line разделенная по разеделителю separator) присваивается строковое значение нового комментария. Перед присвоением комментария  функцией theKillerOfOuterQuotes, он очищается от кавычек. Во втором логическом операторе if внутри цикла проверяется является ли размер счетчика leng меньше длины массива минус 1 (меньше вот такого значения: anArrayFromTheCurrentRow.length - 1), если да то на этом витке цикла, значение element вместе с строковым значением разделителя separator (переменная separatorCurrent) складывается с значением переменной pull. Если нет то складывается с значением переменной pull без прибавления разделителя следом (как это было при условии счетчика меньше) после чего цикл заканчивается и значение pull содержащие строку с замещеным комментарием, функцией changingThisLineFragment возвращается, вызвавшему ее оператору.


}