import { Router } from 'express'
import AppointmentController from '../controllers/appointmentController.js'

const appointmentController = new AppointmentController()

const router = Router();

router.post('/create_appointment', appointmentController.store.bind(appointmentController));

export default router;