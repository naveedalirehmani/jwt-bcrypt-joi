const Joi = require("@hapi/joi");

const registrationValidation = ({userName,email,password})=>{
   const Schema = Joi.object({
        userName: Joi.string().required().min(6).max(255),
        email: Joi.string().required().min(6).max(255).email(),
        password: Joi.string().required().min(6).max(1024),
    });
    const {error} = Schema.validate({ userName, email, password });
    if(error) return error;
    return false;
}

const loginValidation = ({email,password})=>{
    const Schema = Joi.object({
        email: Joi.string().required().min(6).max(255).email(),
        password: Joi.string().required().min(6).max(1024),
    });
    const {error} = Schema.validate({ email, password });
    if(error) return error;
    return false;
}

module.exports = {
    registrationValidation,
    loginValidation
}