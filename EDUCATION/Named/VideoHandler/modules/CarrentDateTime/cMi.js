const cMi =()=>{
const carrentMinutes= new Date().getMinutes().toString();
let binaryFormatCarrentMinutes;
if(carrentMinutes.length < 2){
binaryFormatCarrentMinutes = '0' + carrentMinutes;
} else
{binaryFormatCarrentMinutes = carrentMinutes};
return binaryFormatCarrentMinutes;
}