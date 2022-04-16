import prismaClient from "../prisma.js";

export const verifyDate = async (req, res, next) => {
    const { appointmentDate } = req.body;
    const date = new Date(appointmentDate);
    const dateWthHours = new Date(appointmentDate)
    dateWthHours.setHours(0,0,0,0)
    let hasSpotOnHour = 0
    let HasSpotOnDay = 0

    const registries = await prismaClient.Appointments.findMany({
        select: {
            appointmentDate : true,
        }
    });

    for (let i = 0; i < registries.length; i++) {
        let obj = registries[i];
        if (obj.appointmentDate.getTime() == date.getTime()) {
            hasSpotOnHour++
        }
        obj.appointmentDate.setHours(0, 0, 0, 0)
        if (obj.appointmentDate.getTime() == dateWthHours.getTime()) {
            HasSpotOnDay++
        }
    }
    if (HasSpotOnDay == 20) {
        return res.status(409).json({
            "message": "este dia está lotado"
        })
    }
    if (hasSpotOnHour == 2) {
        return res.status(409).json({
            "message": "este horário está lotado"
        })
    }
    next();
}