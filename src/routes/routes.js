import { Router } from 'express'
import appointmentRoutes from './appointmentRoutes.js'

const router = Router();

router.use(appointmentRoutes);


export default router;
