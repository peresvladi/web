const valueSeparator = (incoming)=>{
const result = incoming.match(/[0-9][^\"а-яА-ЯёЁa-zA-Z0-9_-][0-9]/gi)[0].charAt(1);    
alert(result);
return result;
}