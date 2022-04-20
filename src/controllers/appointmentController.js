//Workaround to make prisma work with "type": "module"
import prismaClient from "../prisma.js";
import { validate } from '../middlewares/validate.js'

class AppointmentController {

    async store (req, res){
        const {name, birthdate, appointmentDate} = req.body;

        const validationResult = validate("Appointments",req.body)
        
        if (!validationResult.status){
            return res.status(400).json({"error":validationResult.error,"mensage": validationResult.message})
        }
        
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
        const appointments = await prismaClient.Appointments.findMany({
            select: {
                name: true,
                birthdate: true,
                appointmentDate: true,
                status: true
              },
            orderBy: {
                appointmentDate: "asc"
            },
        });

        return res.json(appointments);
    }
}

export default AppointmentController;