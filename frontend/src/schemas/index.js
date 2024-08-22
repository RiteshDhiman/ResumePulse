import * as yup from "yup";

const reg = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm

export const personalDetailsSchema = yup.object().shape({
    name: yup.string().min(2, "Please enter name").required("Required"),
    email: yup.string().email("Please enter valid email").required("Required"),
    phone: yup.number("Please enter valid phone number").min(10).required("Required"),
    github: yup.string().matches(reg,'URL is not valid').required("Required"),
    linkedin: yup.string().matches(reg,'URL is not valid').required("Required"),
    portfolio: yup.string().matches(reg,'URL is not valid'),
    location: yup.string().min(5),
    role : yup.string().min(2, "Please enter valid role").required("Required"),
})

export const academicsSchema = yup.object().shape({
    percentage_cgpa: yup.number("Please enter valid percentage/CGPA").required("Required"),
    school_college: yup.string().min(5, "Please enter a valid School/College name").required("Required"),
    year: yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, 'Must be exactly 5 digits')
    .max(4, 'Must be exactly 5 digits')
    .required("required"),
})


export const projectSchema = yup.object().shape({
    name: yup.string().min(2, "Please enter name").required("Required"),
    link: yup.string().matches(reg,'URL is not valid').required("Required"),
    description: yup.string().min(2, "Please enter valid description").required("Required"),
})


export const certiSchema = yup.object().shape({
    cert_name: yup.string().required("Required"),
    cert_organization: yup.string().min(2, "Please enter valid organization").required("Required"),
})


export const experienceSchema = yup.object().shape({
    company_name: yup.string().min(2, "Please enter valid company name").required("Required"),
    role: yup.string().min(2, "Please enter valid role").required("Required"),
    description: yup.string().min(2, "Please enter valid description").required("Required"),
})
