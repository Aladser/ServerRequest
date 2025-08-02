## Пример использования

```
// ---запрос на сервер---
ServerRequest.execute(
    // адрес
    this.URL+'/store',
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
ServerRequest.execute('/index.php?option=com_catalog&task=remove_product_basket', process, 'post', data);
```
