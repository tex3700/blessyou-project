export const apiUrl =
  process.env.NODE_ENV !== "production" ? "https://blessyou-clinic.ru" : "";

///api для запросов картинок врачей
export const apiStorage = `${apiUrl}/api/storage`;

///метод для получения данных с сервера
export const apiRequest = (endpoint, method, data) => {
  const s = `${apiUrl}/api/api/${endpoint}`;
  //console.log('s = ', s);

  return fetch(s, {
    method: method,
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  })
    .then((result) => result.json())
    .catch((error) => {
      console.log(error);
    });
};
