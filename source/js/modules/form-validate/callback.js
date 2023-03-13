
const baseSuccessCallback = (event) => {
  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер
  // const getData = async (successCallback, errorCallback) => {
  //   try {
  //     const response = await fetch(
  //       'https://echo.htmlacademy.ru'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Ошибка загрузки данных');
  //     }

  //     const offers = await response.json();
  //     successCallback(offers);
  //   } catch (error) {
  //     errorCallback(error.message);
  //   }
  // };
  // getData();
};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
