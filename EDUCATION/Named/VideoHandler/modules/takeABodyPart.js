const takeABodyPart = (incomingDismemberment, partNumber) =>{
const theSelectedPiece = incomingDismemberment[partNumber];
return theSelectedPiece;
} // takeABodyPart - функция принимает первым параметром (incomingDismemberment) массив элементов, вторым параметром принимает номер по порядку элемента значение которого необходимо выбрать (partNumber). В первой строке тела выбирает значение выбранного элемента. Во-второй возвращает полученное (в переменную theSelectedPiece) значение выбранного элемента оператору вызвавшему эту функцию (takeABodyPart).