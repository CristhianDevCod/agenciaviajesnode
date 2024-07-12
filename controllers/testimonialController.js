import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (require, response) => {
	// Validar el formulario
	const {nombre, correo, mensaje} = require.body;
	const errores = [];

	if(nombre.trim() === ''){
		errores.push({mensaje:'El nombre esta vació'})
	}
	if(correo.trim() === ''){
		errores.push({mensaje:'El correo esta vació'})
	}
	if(mensaje.trim() === ''){
		errores.push({mensaje:'El mensaje esta vació'})
	}

	//? Valida si al menos hay un error
	if(errores.length > 0){
		// Consultar el modelo de Testimoniales
		const testimoniales = await Testimonial.findAll();

		// Mostrar la vista con errores
		response.render('testimoniales', {
			pagina: 'Testimoniales',
			errores : errores,
			nombre : nombre,
			correo : correo,
			mensaje : mensaje,
			testimoniales : testimoniales
		})} else {
		// Almacenar en la base de datos
		try {
			await Testimonial.create({
				nombre : nombre,
				correo : correo,
				mensaje : mensaje
			});
			response.redirect('/testimoniales')
		} catch (error) {
			console.log(error)
		}
	}

	// console.log(require.body); // sera lo que se coloque en el formulario
}


export {
	guardarTestimonial
}