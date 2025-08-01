const replaceTheContent = () =>{
const theSelectedPiece = takeABodyPart(theDismembermentFunction(valueMenuTopic(),valueSeparator()), 3);
document.getElementById('valueTextarea').value = theSelectedPiece;
} // replaceTheContent - функция заменяет текстовое содержание окна для редактирования коментариев (textarea id ="valueTextarea" name = "comment" расположенного в meny2 ) на текстовое содержание активного пункта меню (topic - которое выводится из кода функции - menu2)