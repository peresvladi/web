function removingTheZerosOfTheKeyNumber(a) {
    let new_value = a;
    while (new_value.charAt(0) === "0") {
        new_value = new_value.slice(1);
    }
    return new_value;
}

// removingTheZerosOfTheKeyNumber - функция которая аргументом (a) принимает значение ключа с номером в виде одного 0, или двух 00, с левой его строны, после чего удаляет их и возвращает ключ, без нулей.