
function valueSeparator(){
    
    let typeSeparator; // объявляет переменную для запоминания в дальнешем искомого разделителя
    let CurrentMenuItem = document.querySelector("#top").value.slice(2); // из основного меню выбирает текущее значение и удаляет лишнии символы слева, для использования далее как ключ для получения значений из localStorage (Chrome)
    let CurrentKey;
    let CurrentValue;
    try{ // код для перехвата ошибки связанной  с обращением к LocalStorage по отсутвующему в нем ключю
    CurrentKey = localStorage.getItem("1" + CurrentMenuItem); // из локального хранилища localStorage (Chrome) по ключу (ключ создается сложением "1" + CurrentMenuItem) из предыдущей строки получает строку подменю (точнее второй стандантный пункт подменю, типа: 0, 0, All..), и удаляет лишние пробелы 
    CurrentValue = starSpiceStarDel(CurrentKey);

    typeSeparator = CurrentValue.substr(1).charAt(0); // удаляет лишний символ слева и присваивает переменной typeSeparator значение идущего за этим символом первого разделителя
    
    } catch(error){ // обработка ошибки связанной  с обращением к LocalStorage по отсутвующему в нем ключю
    CurrentKey = localStorage.getItem("1" + CurrentMenuItem);
    CurrentValue = starSpiceStarDel(CurrentKey);
    typeSeparator = CurrentValue.substr(1).charAt(0); // удаляет лишний символ слева и присваивает переменной typeSeparator значение идущего за этим символом первого разделителя
    
    alert(`Остановка программы из-за попытки обращения к LocalStorage по отсутвующему в нем ключю - ${"1" + CurrentMenuItem} `); // предупреждение об остановке 
    window.stop; // прерывает загрузку с целью не допустить развития ошибочного сценария перехваченной ошибки
    }

    return typeSeparator // возвращает извлеченный разделитель для использования там где необходимо в коде всей программы (с целью обеспечить совместимость с  журналами созданными ранее с использование различными разделителей)
};

function starSpiceStarDel(withAstarSp){
    
    let resultDelSpace = ctrlSpace(withAstarSp)
    let resultDelSpaceAndDelStar = ctrlStar(resultDelSpace)
    let resultDelSpaceAndDelStarAndDelSpace
    resultDelSpaceAndDelStarAndDelSpace = ctrlSpace(resultDelSpaceAndDelStar);
    
    return resultDelSpaceAndDelStarAndDelSpace
    }

    function ctrlSpace(entrance){
    let output;
    try{if (entrance.charAt(0) === " "){
    output = removingSpaces(entrance)}
    else{
    output = entrance;   
    }}catch{
    output = entrance;    
    }
    return output;
    }

    function ctrlStar(entrance){
        let output;
        try{if (entrance.charAt(0) === "*"){
        output = removingStar(entrance)}
        else{
        output = entrance;   
        }}catch{
        output = entrance;    
        }
        return output;
        }

        function removingSpaces(incoming) {
            let result = incoming;
        
            while(result.charAt(0) === ' ')
                {
                    result = result.substr(1);
                }
            return result
        }

        function removingStar(incoming) {
            let result = incoming;
        
            while(result.charAt(0) === '*')
                {
                    result = result.substr(1);
                }
            return result
        }