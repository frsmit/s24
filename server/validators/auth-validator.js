const {z} = require("zod");

// creating object Schema

const signupSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be at least of 3 characters."})
    .max(255, {message: "Name must not be more than 255 characters"}),
    email: z
    .string({required_error: "Email is required. "})
    .trim()
    .email({message: "Invaild email address"})
    .min(3, {message: "Email must be at least of 3 characters."})
    .max(255, {message: "Email must not be more than 255 characters"}),
    phone: z
    .string({required_error: "Phone is required"})
    .trim()
    .min(10,{message:"Phone must be at least of 10 characters."})
    .max(20, {message: "Phone must not be more than 20 characters"}),
    password: z
    .string({required_error: "Password is required"})
    .min(7,{message:"Password must be at least of 7 characters."})
    .max(1024, {message: "Password must not be more than 1024 characters"}),
});

const loginSchema = z.object({
    email: z
    .string({required_error: "Email is required. "})
    .trim()
    .email({message: "Invaild email address"})
    .min(3, {message: "Email must be at least of 3 characters."})
    .max(255, {message: "Email must not be more than 255 characters"}),
    password: z
    .string({required_error: "Password is required"})
    .min(7,{message:"Password must be at least of 7 characters."})
    .max(1024, {message: "Password must not be more than 1024 characters"}),
});

const contactSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be at least of 3 characters."})
    .max(255, {message: "Name must not be more than 255 characters"}),
    email: z
    .string({required_error: "Email is required. "})
    .trim()
    .email({message: "Invaild email address"})
    .min(3, {message: "Email must be at least of 3 characters."})
    .max(255, {message: "Email must not be more than 255 characters"}),
    message:z
    .string({required_error: "please enter a message"})
    .trim()
    .min(10,{message:"Message must be at least of 10 charcters."})
    .max(2048,{message:"Meassage must not be more than 2048 charcters"}),
});

module.exports = {signupSchema, loginSchema, contactSchema};