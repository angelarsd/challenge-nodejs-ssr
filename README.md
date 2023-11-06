# Nubi Coding Challenge Solution

![screenshot](https://puu.sh/HyrmV/95c458d9d9.png)

## Introducción

Esta es mi solución al desafío de Nubi, que consiste en desarrollar una API REST utilizando Node.js. En este README, te proporcionaré las instrucciones necesarias para ejecutar mi solución.

## Requisitos

- Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- Docker y Docker Compose instalados si deseas ejecutar la solución en contenedores.

## Instrucciones de Ejecución

Sigue estos pasos para ejecutar la solución:

1. Clona este repositorio en tu máquina local:

   ```bash
   > git clone https://github.com/angelarsd/challenge-nodejs-ssr
   ```

2. Navega al directorio del proyecto

   ```bash
   > cd nubi-coding-challenge
   ```

3. Si deseas ejecutarlo en modo DEV, debes realizar la instalación de los paquetes y luego ejecutar el script dev:

   ```bash
   > npm install
   > npm run dev
   ```

4. Si deseas ejecutar la API utilizando Docker, asegúrate de tener Docker y Docker Compose instalados. Luego, ejecuta el siguiente comando:
   ```bash
   > docker-compose up
   ```

## Uso de la API

La API ofrece las siguientes rutas y funcionalidades:

- `GET /users`: Obtiene la lista de todos los usuarios.
  Puede recibir lo Query Params:

  - page: number
  - limit: number
  - sortBy: "ascending" | "descending"
  - sortDirection: SortDirectionType;
  - match: Record<wallet_id | email | name | last_name | sex_type | dni | birth_date | created_at, string>
    &nbsp;

  ```cURL
  curl --location --globoff 'http://localhost:3000/users?page=2&limit=3&sortBy=name&sortDirection=descending&match[name]=a'
  ```

- `GET /users/:id`: Obtiene el detalle de un usuario por su ID.
  &nbsp;
  ```cURL
  curl --location 'http://localhost:3000/users/a922c559-5222-4bf2-87ce-11871eaf3ffe''
  ```
- `POST /users`: Crea un nuevo usuario. Debes enviar los datos del usuario en el cuerpo de la solicitud en formato JSON.
  &nbsp;
  ```cURL
  curl --location 'http://localhost:3000/users' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "email": "angel.arsd@gmail.com",
    "name": "Angel Raul",
    "last_name": "Silva",
    "sex_type": "male",
    "dni": "12345677",
    "birth_date": "1985-04-10T00:00:00.000"
  }'
  ```
- `PUT /users/:id`: Modifica un usuario existente por su ID. Debes enviar los datos actualizados en el cuerpo de la solicitud en formato JSON.
  &nbsp;
  ```cURL
  curl --location --request PUT 'http://localhost:3000/users/a922c559-5222-4bf2-87ce-11871eaf3ffe' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "email": "elijah.Moen@hotmail.com"
  }'
  ```
- `DELETE /users/:id`: Elimina un usuario por su ID.
  &nbsp;
  ```cURL
  curl --location --request DELETE 'http://localhost:3000/users/5e418870-dba4-43af-8ab0-c726bf3791cc'
  ```

### Postman Colletion

También hemos incluido una colección de Postman en el repositorio que puedes utilizar para realizar pruebas. Puedes importar el archivo [challenge-nodejs-ssr.postman_collection.json](https://github.com/angelarsd/challenge-nodejs-ssr/blob/1f71a5d07f66f27ce9800d1633d5d9b1c46d9206/challenge-nodejs-ssr.postman_collection.json) en Postman.

## Pruebas (Tests)

Si deseas ejecutar las pruebas, utiliza los siguientes comando:

```bash
> npm install
> npm test
```
