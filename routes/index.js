// Se importa express y se asigna a la variable
import express from 'express';
import { 
	paginaInicio, 
	paginaNosotros, 
	paginaViajes, 
	paginaTestimoniales, 
	paginaDetalleViaje 
} from '../controllers/paginasController.js';
import { 
	guardarTestimonial 
} from '../controllers/testimonialController.js';

const router = express.Router();


router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes)

// este es un router
// se debe usar un comodín para no repetir código
router.get('/viajes/:slug', paginaDetalleViaje)

router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guardarTestimonial) // lo que recibo del formulario el método POST

export default router;