const cD =()=>{
const carrentDate = new Date().getDate().toString();
let binaryFormatCarrentDate;
if(carrentDate.length < 2){
binaryFormatCarrentDate = '0' + carrentDate;
} else
{binaryFormatCarrentDate = carrentDate};
return binaryFormatCarrentDate;
}