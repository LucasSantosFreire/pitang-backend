import prismaClient from "../prisma.js";

export const verifyDate = async (req, res, next) => {
    const { appointmentDate } = req.body;
    const date = new Date(appointmentDate)

    const hasSpot = await prismaClient.Appointments.findMany({
        where:{
            appointmentDate : date,
        }
    })

        if(hasSpot.length >= 2){
           return res.status(409).json({
                "message" : "este horário esta lotado"
         })
    }

    next();
}