const commentCreate = () => {
let textComment = "~" + prompt("Вы можете ввести коментарий либо, пропустить его ввод добавив - 0 или выбрав ОТМЕНУ","0");    
if (textComment === "~"){
textComment = "~0"
}
return textComment;    
}