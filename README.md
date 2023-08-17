# Облачное хранилище My Cloud

## Установка проекта
* git clone https://github.com/Ksenia-Mesh/Python_Diplom.git

### Серверная часть - mycloud
* Создаем виртуальную среду: python3 -m venv myvenv
* Активируем: myvenv\Scripts\activate
* Установливаем библиотеки: pip install -r requirements.txt
* Запустите Django server: python manage.py runserver

Далее заходим на http://127.0.0.1:8000/, видим главную страницу

#### Настроки файла .env
* Создать файл рядом с manage.py
* Заполнить поля DB_NAME, DB_USER, DB_PASSWORD

### Клиенская часть - frontend
* Перейти в cd frontend
* Установить библиотеки: npm install
* Запустить сервер: npm start

Далее заходим на http://localhost:3000/, видим главную страницу
