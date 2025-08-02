## Пример использования

```
// ---запрос на сервер---
ServerRequest.execute(
    // адрес
    '/car/add',
    // функция обработки ответа от сервера
    process,
    // тип запроса
    "post",
    // данные запроса
    formData,
    // элемент для вывода информации
    this.msgElement
);

let data = JSON.stringify({"product_id": productDOM.id.substring(14)});
ServerRequest.execute('/car/add', process, 'post', data);
```
