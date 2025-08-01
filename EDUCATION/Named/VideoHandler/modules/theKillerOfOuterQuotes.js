const theKillerOfOuterQuotes = (inputContent) =>{
let product;
try {
product = inputContent.replace(/^'|'$/g, '');    
} catch (error) {
alert('поймали ошибку: '+ error.message); 
product = inputContent;  
}
return product;
} // theKillerOfOuterQuotes удаляет внешние кавычки строки при их наличии