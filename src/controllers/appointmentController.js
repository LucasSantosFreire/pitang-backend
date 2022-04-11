import Joi from "joi";

//Workaround to make prisma work with "type": "module"
import Prisma from '@prisma/client'
const { PrismaClient } = Prisma

class AppointmentController {

    async store (req, res){
        const { name, birthdate, appointmentDate } = req.body;

        const Appointment = await PrismaClient.Appointment.create({
            data: {
              name,
              birthdate,
              appointmentDate
            },
        })
        res.json(Appointment);
    }
}

export default AppointmentController;