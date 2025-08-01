const cM =()=>{
const carrentMonth = new Date().getMonth().toString();
let binaryFormatCarrentMonth;
if(carrentMonth.length < 2){
binaryFormatCarrentMonth = '0' + carrentMonth;
} else
{binaryFormatCarrentMonth = carrentMonth};
return binaryFormatCarrentMonth;
}