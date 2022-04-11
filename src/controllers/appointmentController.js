import Joi from "joi";

class appointmentController {

    async store (req, res){
        const { name, birthdate, appointmentDate } = req.body;

        const user = await prisma.user.create({
            data: {
              name,
              birthdate,
              appointmentDate
            },
        })
        res.json(user);
    }
}

export default appointmentController;