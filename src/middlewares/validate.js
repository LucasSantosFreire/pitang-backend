import Joi from "joi"

export const validate = (model, parameters) => {
    if(model == "Appointments"){
       const schema = Joi.object({
            name: Joi.string()
            .min(3)
            .max(70)
            .required(),

            birthdate: Joi
            .date()
            .max('now')
            .iso()
            .required(),

            appointmentDate: Joi
            .date()
            .min('now')
            .iso()
            .required()
        })
        const schemaValidation = schema.validate(parameters, {
            abortEarly: false,
          });
      
          if (schemaValidation.error) {
            return {"status" : false, "error": schemaValidation.error.details.map(({ message }) => message),
            "message": "Invalid data"}
          }else{
            return {"status" : true}
          }
    }
}


    
