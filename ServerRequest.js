// fetch-запрос на сервер
class ServerRequest {
    /** выполнить запрос на сервер
     * 
     * @param {*} URL адрес запроса
     * @param {*} processFunc функция успешного запроса
     * @param {*} method тип запроса
     * @param {*} data данные
     * @param {*} headers заголовки
     */
    static async execute(URL, processFunc, method = "get", data = null, headers = null) {
        let response;
        if (headers) {
            response = await fetch(URL, {
                method: method,
                headers: headers,
                body: data,
            });
        } else {
            response = await fetch(URL, {
                method: method,
                body: data,
            });
        }

        switch (response.status) {
            case 200:
                let data = await response.text();
                return processFunc(data);
            default:
                alert(`Ошибка ${response.status}`);
                console.log(`Статус ответа: ${response.status}`);
                console.log(response.text().then(data => console.log(data)));
        }
    }
}
