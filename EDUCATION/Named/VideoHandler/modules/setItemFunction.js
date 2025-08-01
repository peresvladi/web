const setItemFunction = (key, data) => {
 // alert(data + '  зафиксирован вход в setItemFunction')
    window.localStorage.setItem(key, data);
}// функция - setItemFunction, принимает параметр ключа - key, и параметр данных - data, и записывает принимаемые параметры в localStorage браузера (в соотвествии с синтаксисом localStorage баузера)