import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

// de esta forma se tendrá acceso a valores de 
// las variables de entorno
dotenv.config();

// Accede a una variable de entorno
// console.log(process.env.DATABASE) 

// Se crea una nueva instancia de sequelize
//? 1) el primer valor es el nombre de la base de datos
//? 2) segundo valor es el nombre del usuario
//? 3) es la contraseña
//? 4) es un objeto de configuraciones
// Todo esto es lo que se requiere para configurar Sequelize y conectar a mysql
const db = new Sequelize(process.env.DATABASE_URL,{  
	define: {
		timestamps: false
	},
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}, 
	operatorsAliases: false
});

export default db;


