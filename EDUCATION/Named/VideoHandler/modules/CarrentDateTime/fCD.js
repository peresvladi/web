const fCD  = (separator, input) =>{
const separ = separator;
let compositionAndFormat = input;
let tempformatCarrentDate = "";
let formatCarrentDate = "";
let element = '';
let composition = compositionAndFormat.split("c");    
const testVar = compositionAndFormat;
if (typeof testVar === 'string') {
for (let index = 0; index < composition.length; index++) {
    element = composition[index];
    switch (element) {
        case "Y":
        tempformatCarrentDate = tempformatCarrentDate + cY() + separ;    
            break;
        case "M":
        tempformatCarrentDate = tempformatCarrentDate + cM()  + separ; 
            break;
        case "D":
        tempformatCarrentDate = tempformatCarrentDate + cD() + separ; 
            break;
        default:
             break;
    }
}
} else {
alert ("Текущая функции tempformatCarrentDate в качестве аргумента может принять только строку, а с поступившим значением код может быть выполнен с ошибкой !")
}
formatCarrentDate = tempformatCarrentDate.slice(0,-1);
return formatCarrentDate;
} // fCD  - функция (format Carrent Date) которая возвращает текущую дату. Принимает следующие аргументы. Первый: separator (разделитель). Второй: набор установленных буквосочетаний (cY - текущий год, cM - текущий месяц, cD - текущий день, которые вводятся во втором аргументе вызвова без какоего либо разделителя). Возвращает формат даты  в виде строки, исходя из указанных во втором аргументе установленных буквосочетаний, их состава и порядка. Возращаемые значения даты разделяются между значением разделителя указанным в первом аргументе.