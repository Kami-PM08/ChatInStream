# ChatInStream

Esta aplicación simula una página de streaming, pero su funcionalidad principal se centra en el chat. Para utilizarla es necesario contar con NodeJS instalado y tener acceso a una base de datos Mongo.

## Instalación

Es necesario ejecutar el siguiente comando en las carpetas `frontend` y `backend`:

```bash
npm install
```

## Configuración

Para poder ejecutar la aplicación correctamente, es necesario agregar las variables de entorno en un archivo llamado `.env` tanto en la carpeta `frontend` como en `backend`.

Ejemplo `backend/.env`:

```env
# Cadena de acceso a la base de datos Mongo
MONGODB_URL=mongodb+srv://<user>:<password>@cluster.ird9wp8.mongodb.net/<dbname>
# Cadena llave para el JWT
JWT_PRIVATE=SECRET
```

Ejemplo `frontend/.env`:

```env
# Cadena de connexión al servidor
REACT_APP_API_URL=http://localhost:8080/
# Cadena llave para el JWT
REACT_APP_JWT_PRIVATE=SECRET
```

Puede agregar una variable `PORT` en el `backend/.env`, solo recuerde que debe coincidir con el puerto en la variable `REACT_APP_API_URL`.
Las variables `JWT_PRIVATE` y `REACT_APP_JWT_PRIVATE` deben ser identicas.

## Ejecución

Para levantar el servidor deberá abrir una terminal en la carpeta `backend` y ejecutar el siguiente comando:

```bash
npm start
```

Repita lo anterior en la carpeta `frontend` y se abrirá el cliente en su navegador en la url `http://localhost:3000/`.

## Descripción de uso (primera vez)

Con el servidor y el cliente en ejecución podrá acceder al Inicio de sesión, pero en este caso deberá hacer clic en el link "No tengo una cuenta" para ingresar al registro, diligencie el formulario para acceder al stream y empezar a enviar sus mensajes por el chat. Repita el proceso para crear nuevos usuarios y ver el comportamiento del chat en tiempo real al registrarse o iniciar sesión en diferentes pestañas del navegador.
