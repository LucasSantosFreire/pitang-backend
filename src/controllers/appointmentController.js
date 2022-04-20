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
                id: true,
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
    async updateStatus (req, res){
       const { id } = req.params;

       try{
       const updateStatus = await prismaClient.Appointments.update({
        where: {
          id,
        },
        data: {
          status: true,
        },
      })
    } 
    catch (e){
        return res.json(e.meta.cause)
    }
      return res.json({"message" : "Status do usuário atualizado com sucesso."})
    }

    async deleteAppointment (req, res){
        const { id } = req.params;
        
        try{
        const deletedAppointment = await prismaClient.Appointments.delete({
            where: {
              id
            },
          })
        }
        catch (e){
            return res.json(e.meta.cause)
        }
        return res.json({"message" : "Usuário foi deletado com sucesso"})
    }
}

export default AppointmentController;