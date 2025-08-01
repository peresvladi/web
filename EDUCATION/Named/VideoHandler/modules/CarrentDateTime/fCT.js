const fCT =(separator, input)=>{
const separ = separator
let compositionAndFormat = input;
let tempformatCarrentTime = "";
let formatCarrentTime = "";
let element = '';
let composition = compositionAndFormat.split("c");    
const testVar = compositionAndFormat;
if (typeof testVar === 'string') {
for (let index = 0; index < composition.length; index++) {
    element = composition[index];
      switch (element) {
        
        case "Hr":
        tempformatCarrentTime = tempformatCarrentTime + cHr() + separ ; 
             break;
        case "Mi":
        tempformatCarrentTime = tempformatCarrentTime + cMi() + separ; 
             break;
        
        default:
            break;
    }
}

} else {
alert ("Текущая функции formatCarrentTime в качестве аргумента может принять только строку, а с поступившим значением код может быть выполнен с ошибкой !")
}
formatCarrentTime = tempformatCarrentTime.slice(0,-1);
return formatCarrentTime;
} // fCD  - функция (format Carrent Time) которая возвращает текущее время. Принимает следующие аргументы. Первый: separator (разделитель). Второй: набор установленных буквосочетаний (cHr - текущий час, cMi - текущая минута, которые вводятся во втором аргументе вызвова без какоего либо разделителя). Возвращает формат времени  в виде строки, исходя из указанных во втором аргументе установленных буквосочетаний, их состава и порядка. Возращаемые значения даты разделяются между значением разделителя указанным в первом аргументе.