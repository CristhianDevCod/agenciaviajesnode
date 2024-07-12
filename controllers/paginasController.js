import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

//? resquest: lo que se envía o la petición que se esta realizando
//* response: lo que Express responde 
const paginaInicio = async (request, response) => {
	const respuestaDB = []
	//* Consultar 3 viajes del modelo viaje, se vuelve async 
	respuestaDB.push( Viaje.findAll({limit:3}) ); // Se limita a 3 consultas
	// Consultar el modelo de Testimoniales
	respuestaDB.push( Testimonial.findAll({limit:3}) ); // tambien se limita a 3 consultas
	try {
		// debido a que son dos promesas
		const resultado = await Promise.all( respuestaDB );

		//? se puede pasar mas información a esta vista, en este caso se esta pasando la variable
		// pagina 
		response.render('inicio', {
			pagina: 'Inicio',
			clase: 'home',
			viajes : resultado[0],
			testimoniales : resultado[1]
		});
	} catch (error) {
		console.log(error)
	}
};

const paginaNosotros = (request, response) => {
	response.render('nosotros', {
		pagina: 'Nosotros'
	});
};

//? Se utilizará asyn await
const paginaViajes = async (request, response) => {
	// Consultar BBDD
	const viajes = await Viaje.findAll();
	// console.log(viajes)

	response.render('viajes', {
		pagina: 'Próximos viajes',
		viajes : viajes
	});
};

const paginaTestimoniales = async (request, response) => {
	// realizar consulta a la DB si hay testimoniales
	try {
		// Consultar el modelo de Testimoniales
		const testimoniales = await Testimonial.findAll();

		response.render('testimoniales', {
			pagina: 'Testimoniales',
			testimoniales : testimoniales
		});
	} catch (error) {
		console.log(error)
	}
};

// Muestra un viaje por su slug
const paginaDetalleViaje = async (request, response) => {
	// console.log(request.params.viaje)
	const { slug } = request.params;
	try {
		const viaje = await Viaje.findOne({ where : { slug: slug } });
		response.render('viaje', {
			pagina: 'Información Viaje',
			viaje: viaje
		})
	} catch (error) {
		console.log(error)
	}
};

export {
	paginaInicio,
	paginaNosotros,
	paginaViajes,
	paginaTestimoniales,
	paginaDetalleViaje
}