const fSM =(separator, input)=>{
const separ = separator;
let compositionAndFormat = input;
let tempformatCarrentSecMillisec = "";
let formatCarrentSecMillisec = "";
let element = '';
let composition = compositionAndFormat.split("c");    
const testVar = compositionAndFormat;
if (typeof testVar === 'string') {
for (let index = 0; index < composition.length; index++) {
    element = composition[index];
      switch (element) {

           case "Se":
        tempformatCarrentSecMillisec = tempformatCarrentSecMillisec + cSe() + separ; 
            break;
        case "Ml":
        tempformatCarrentSecMillisec = tempformatCarrentSecMillisec + cMl() + separ; 
            break;
        default:
            break;
    }
}

} else {
alert ("Текущая функции formatCarrentSecMillisec в качестве аргумента может принять только строку, а с поступившим значением код может быть выполнен с ошибкой !")
}
formatCarrentSecMillisec = tempformatCarrentSecMillisec.slice(0,-1);
return formatCarrentSecMillisec;
} // fSM  - функция (format Carrent Time) которая возвращает текущие секунды и миллисекунды. Принимает следующие аргументы. Первый: separator (разделитель). Второй: набор установленных буквосочетаний (cSe - текущая секунда, cMl - текущая милисекунда, которые вводятся во втором аргументе вызвова без какоего либо разделителя). Возвращает формат времени (текущих секунд, миллисекунд)  в виде строки, исходя из указанных во втором аргументе установленных буквосочетаний, их состава и порядка. Возращаемые значения даты разделяются между значением разделителя указанным в первом аргументе.