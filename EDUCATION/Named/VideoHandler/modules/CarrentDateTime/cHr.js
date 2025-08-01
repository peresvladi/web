const cHr =()=>{
let carrentHours = new Date().getHours().toString();
let binaryFormatCarrentHours;
if(carrentHours.length < 2){
binaryFormatCarrentHours = '0' + carrentHours;
} else
{binaryFormatCarrentHours = carrentHours};
return binaryFormatCarrentHours;
}