numOrText = (input) => {
    let userInput = input;
    let isNumber = /^\d+$/.test(userInput);
    return isNumber;
}
//numOrText - функция проверки. Возвращает true если входящий аргумент является целым положительным числом. В остальных случаях (в том числе и в случае строк) false.