const removeItemFunction = (key) => {
    window.localStorage.removeItem(key);
}//removeItemFunction - функция удаляет значение  window.localStorage (хранилища браузера) по входящему значению ключу - key, в соответствии с синтаксисом - localStorage;