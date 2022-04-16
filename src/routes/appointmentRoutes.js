import { Router } from 'express'
import { verifyDate } from '../middlewares/verifyDate.js'
import AppointmentController from '../controllers/appointmentController.js'

const appointmentController = new AppointmentController()

const router = Router();

router.post('/create_appointment', verifyDate, appointmentController.store.bind(appointmentController));
router.get('/index', appointmentController.index.bind(appointmentController))


export default router;