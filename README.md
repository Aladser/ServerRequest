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
```

### Пример process функции
```
let process = function(resp) {
    let respData = JSON.parse(resp);
    console.log(respData);
};
```

### Отправка собранных в JS данных
```
let data = JSON.stringify({"product_id": productDOM.id});
ServerRequest.execute('/car/add', process, 'post', data);
```

### Отправка формы
```
ServerRequest.execute(null, process, 'post', formData);
```
