const cM =()=>{
const carrentMonth = (new Date().getMonth() + 1).toString();
let binaryFormatCarrentMonth;
if(carrentMonth.length < 2){
binaryFormatCarrentMonth = '0' + carrentMonth;
} else
{binaryFormatCarrentMonth = carrentMonth};
return binaryFormatCarrentMonth;
}
// прочитал в нете, что месяцы(именно месяцы другие эл.даты не так) начинают считать с 0, т.е. по факту 0 это 1, 1 это по фату 2 и т.д., в связи с этим во 2 сроке добавляют + 1 (30-08.24)