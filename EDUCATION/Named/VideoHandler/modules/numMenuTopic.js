const numMenuTopic = () => {
    let result1 = valueMenuTopic();
    //alert("result1: " + result1)
    let regex = /\\*(\d+)/;

    // let regex = /\\*(\d{1,10})/im;
    // /id_t=(\d{1,10})/im;
    // result2 = result1.match(/[^0]/gi)
    // alert(result1.match(regex)[0]);
    return result1.match(regex)[0];

} // numMenuTopic функция которая принимает значение активного меню topic (получает его от функции valueMenyTopic();) с помощью рег выражения преаобразует эту строку в массив в начальном элементе которого сохраняет цифры после * из полученного от функции valueMenyTopic() значения (строки) и возвращает значение этого элемента, т.е. по факту цифры которые идут в строке topic после *.