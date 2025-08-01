const fCDT =(input)=>{
const separ = "_"
let compositionAndFormat = input;
let tempformatCarrentDateTime = "_";
let formatCarrentDateTime = "";
let element = '';
let composition = compositionAndFormat.split("c");    
const testVar = compositionAndFormat;
if (typeof testVar === 'string') {
for (let index = 0; index < composition.length; index++) {
    element = composition[index];
    //tempformatCarrentDateTime = tempformatCarrentDateTime + element;

    switch (element) {
        case "Y":
            // alert("cY")
        tempformatCarrentDateTime = tempformatCarrentDateTime + separ + cY();    
            
            break;

        case "M":
            // alert("cM")
        tempformatCarrentDateTime = tempformatCarrentDateTime + separ + cM(); 
            
            break;

        case "D":
            // alert("cD")
        tempformatCarrentDateTime = tempformatCarrentDateTime + separ + cD(); 
           
            break;

        case "Hr":
            // alert("cHr")
        tempformatCarrentDateTime = tempformatCarrentDateTime + separ + cHr(); 
        
            break;
        case "Mi":
            // alert("cMi")
        tempformatCarrentDateTime = tempformatCarrentDateTime + separ + cMi(); 

             break;

        case "Se":
            // alert("cSe")
        tempformatCarrentDateTime = tempformatCarrentDateTime + separ + cSe(); 

            break;
        case "Ml":

            // alert("cMl")
        tempformatCarrentDateTime = tempformatCarrentDateTime + separ + cMl(); 
            break;

        default:
            // alert('Формат файла неприемлем');
            break;
    }

    
    
}
    

  
} else {
alert ("Текущая функции tempformatCarrentDateTime в качестве аргумента может принять только строку, а с поступившим значением код может быть выполнен с ошибкой !")
}
formatCarrentDateTime = tempformatCarrentDateTime;
return formatCarrentDateTime;
}