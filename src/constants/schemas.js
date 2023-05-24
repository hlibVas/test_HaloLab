import * as yup from "yup";

const requiredMessage = "This field is required";
const notValidEmail = "This email is not valid";
const notValidPhone = "Phone number is not valid";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ADD_DOCTOR_SCHEMA = yup.object({
  name: yup.string().label("Name").required(requiredMessage),
  birthdayDate: yup.date().label("Birthday Date").required(requiredMessage),
  sex: yup.string().label("Sex").required(requiredMessage),
  city: yup.string().label("City").required(requiredMessage),
  doctorSpecialty: yup.string().label("Doctor Specialty"),
  doctor: yup.string().label("Doctor").required(requiredMessage),
  email: yup
    .string()
    .label("Email")
    .email(notValidEmail)
    .required(requiredMessage),
  phoneNumber: yup
    .string()
    .label("Phone Number")
    .matches(phoneRegExp, notValidPhone)
    .required(requiredMessage),
});
