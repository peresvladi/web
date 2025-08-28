callingAnErr = (message) => {
    alert(message);
    throw new Error;
}
// errAnCalling (вызов: callingAnErr(message)) - функция отображающая переданное в аргументе сообщение, и прерывающая выполнения кода путем генерации ошибки