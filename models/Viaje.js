import { Sequelize } from "sequelize";
import db from "../config/db.js";

// El parámetro que se pasa es el nombre de la tabla
// el segundo es el objeto de configuración
export const Viaje = db.define('viajes', {
	titulo: {
		type: Sequelize.STRING
	},
	precio: {
		type: Sequelize.STRING
	},
	fecha_ida: {
		type: Sequelize.DATE
	},
	fecha_vuelta: {
		type: Sequelize.DATE
	},
	imagen: {
		type: Sequelize.STRING
	},
	descripcion: {
		type: Sequelize.STRING
	},
	disponibles: {
		type: Sequelize.STRING
	}, 
	slug: {
		type: Sequelize.STRING
	}
});