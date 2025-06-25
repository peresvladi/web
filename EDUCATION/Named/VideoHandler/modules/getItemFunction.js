const getItemFunction = (key) => {
    return window.localStorage.getItem(key);
}// функция - getItemFunction, принимает параметр ключа - key, и по принятому параметру ключа - key, извлекает из ханилища баузера - localStorage ранее записанные данные и возвращает их в ответ на обращение к настоящей функции - getItemFunction (в соотвествии с синтаксисом localStorage баузера)