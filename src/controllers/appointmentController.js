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
        try{
        const Appointment = await prismaClient.Appointments.create({
            data: {
                name,
                birthdate,
                appointmentDate
            }
        })
      }catch(error){
        console.log(error.meta.cause)
        return res.status(400).json({"message" : "Ocorreu uma falha no agendamento!"})
      }
        return res.json(Appointment);
    }
    

    async index (req, res){
      try{
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
      }catch(error){
        console.log(error.meta.cause)
        return res.status(404).json({"message" : "Ocorreu uma falha na busca!"})
      }
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
    catch (error){
        console.log(error.meta.cause)
        return res.status(404).json({"message" : "Ocorreu um erro ao atualizar o status do usuário!"})
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
        catch (error){
            console.log(error.meta.cause)
            return res.status(404).json({"message" : "Ocorreu um erro ao deletar este usuário!"})
        }
        return res.json({"message" : "Usuário foi deletado com sucesso"})
    }
}

export default AppointmentController;