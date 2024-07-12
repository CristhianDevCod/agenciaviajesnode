import { Sequelize } from "sequelize";
import db from "../config/db.js";

// El parámetro que se pasa es el nombre de la tabla
// el segundo es el objeto de configuración
export const Testimonial = db.define('testimoniales', {
	nombre: {
		type: Sequelize.STRING
	},
	correo: {
		type: Sequelize.STRING
	},
	mensaje: {
		type: Sequelize.STRING
	}
});