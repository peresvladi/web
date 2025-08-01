const cSe =()=>{
const carrentSeconds = new Date().getSeconds().toString();
let binaryFormatCarrentSeconds;
if(carrentSeconds.length < 2){
binaryFormatCarrentSeconds = '0' + carrentSeconds;
} else
{binaryFormatCarrentSeconds = carrentSeconds};
return binaryFormatCarrentSeconds;
} 