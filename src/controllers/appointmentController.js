
import Joi from "joi";

//Workaround to make prisma work with "type": "module"
import prismaClient from "../prisma.js";

class AppointmentController {

    async store (req, res){
        const {name, birthdate, appointmentDate} = req.body;
        const date = new Date(appointmentDate);

        const Appointment = await prismaClient.Appointments.create({
            data: {
                name,
                birthdate,
                appointmentDate
            }
        })
        return res.json(Appointment);
    }

    async index (req, res){
        const registries = await prismaClient.Appointments.findMany();

        return res.json(registries);
    }
}

export default AppointmentController;