# blessyou

Для разработки проекта - клонируем с репозитория.

Далее:

#Frontend

1. переходим в папку front
2. Для установки зависимостей, запускаем в терминале командe
   npm i --force
3. Запускаем проект командой
   npm start

#Backend

Ребят, напишите мини-инструкцию для бэкендеров)

#Frontend
Некоторые рекомендации по написанию кода для фронтенда:

1. Статические файлы проекта, такие как иконки с макета и изображения, например баннер, сохраняем в папке static в соответствующих папках.

2. Общие стили макета, например варианты цвета текста, будут в файле themes.

3. Имена классов, переменных, функциий и т.п пишем в camelCase и как можно понятнее. напр headerButtonLink

4. Вместо написания одного большого файла стараемся декомпозировать на несколько небольших файлов.

5. Для каждого большого компонента проекта, например header, footer, ЛК пациента и другие, заводим отдельную папку с именем компонента.
   В этой папке также создаем файл со стилями , который будет вклчать стили файлов данной папки.
   Общие стили проекта лежат в корне папки front в файле
   style.css

6. Какие-либо библиотеки добавляем в проект только после обсуждения с коллегами.

7. Переиспользуемы компоненты храняться в папке commomComponents

#API для использования

\*Основной API адрес запросов
https://blessyou-clinic.ru/api

- АПИ для получения списка врачей
  "GET" /api/doctors/

- Апи для получения полных фоторграфий докторов  
   GET" /storage/doctor/${name_image.jpg}
  на данный момент имя фото получаем в свойстве avatar_path

- Апи для получения аватаров докторов для карточек в карусели
  "GET" /storage/doctor_avatar/${name_image.png}

на данный момент имя фото получаем в свойстве avatar_path

- АПИ для получения картинок отделений
  "GET" /storage/department/{name_image.jpg}

- АПИ для регистрации пользователя
  "POST" /api/patient-register

  струтура запроса на данный момент : {
  'name': 'string',
  'surname': 'string',
  'patronymic': 'string',
  'email': 'string@mail.com',
  'password': 'string',
  }
