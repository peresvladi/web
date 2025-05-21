const defaultStart_or_currentStart = (incomingArray) =>{ //При выборе All в меню List предлагает выбрать старт отрезка с начала по умолчанию - 0 (0 указанного в записи ALL и присвоенного уже переменной sss), или с текущего значения старт (sss т.е. start присваемого от текущего места положения воспроизведения текущей записи)  
let ss;
if (incomingArray[3] === "All") {
let TrueFalse = confirm("Для продолжения работы в режиме All c текущего отрезка выберите ОК, для перехода в начальное положение текущей записи, ВЫБЕРИТЕ - CANCEL, или нажмите Esc на клавиатуре");
if (TrueFalse === true && incomingArray[3] === "All"){ss = Math.floor(vid.currentTime);}
if(TrueFalse === false && incomingArray[3] === "All"){ss = 0};
} else {ss = incomingArray[1];}
return ss;
}  