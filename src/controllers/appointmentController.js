import Joi from "joi";

//Workaround to make prisma work with "type": "module"
import prismaClient from "../prisma.js";

class AppointmentController {

    async store (req, res){
        const {name, birthdate, appointmentDate} = req.body;

        const Appointment = await prismaClient.Appointments.create({
            data: {
                name,
                birthdate : new Date(birthdate),
                appointmentDate : new Date(appointmentDate)
            }
        })
        res.json(Appointment);
    }
}

export default AppointmentController;