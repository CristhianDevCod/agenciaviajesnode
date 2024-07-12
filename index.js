// dependencias
import express from 'express';
import dotenv from 'dotenv'

import router from './routes/index.js';
import db from './config/db.js';


dotenv.config();
// express() ejecuta express que se asigna a la variable de app
const app = express();

//! Conectar la base de datos
db.authenticate()
	.then(() =>  console.log('Base de datos conectada'))
	.catch((error)=> console.log(error))

//! Habilitar PUG
app.set('view engine', 'pug');

//? Obtener el año actual para pasarlo al footer
app.use((require, response, next) => { // esto es un Middleware
	// se usará variables internas de Express
	const year = new Date();
	response.locals.actualYear = year.getFullYear();
	response.locals.nombreSitio = 'Agencia de viajes';
	// si no funciona este
	next();
	// return next(); // esto forzara a seguir al siguiente middleware
})

//! Agregar body parser para obtener datos del formulario
app.use(express.urlencoded( { extended:true } ));

//! Definir la carpeta publica
app.use(express.static('public')); // es el nombre de la carpeta

//! Definir puerto
const port = process.env.PORT || 4000;

//! Agregar router
app.use('/', router);

app.listen(port, () => {
	console.log(`El servidor esta funcionando en el puerto ${port}`)
});

