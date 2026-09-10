const validator = require("validator");

const validateSignupData = (req) => {
    const {
        firstName,
        lastName,
        emailId,
        password,
    } = req.body;
    if(!firstName || !lastName){
        throw new Error("First name and last name are required")
    } else if(!validator.isEmail(emailId)){
        throw new Error("Email is not valid")
    } else if(!validator.isStrongPassword(password)){
        throw new Error("Password is not strong enough")
    }
}

const validateEditProfileData = (req) => {
    const allowedEditFields = 
    [
        "firstName",
        "lastName",
        "emailId", 
        "photoUrl", 
        "gender", 
        "age", 
        "about", 
        "skills"
    ];
    const isAllowed = Object.keys(req.body).every(field => allowedEditFields.includes(field))
    return isAllowed;
}
module.exports = {
    validateSignupData,
    validateEditProfileData
};