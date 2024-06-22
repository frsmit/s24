const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// home page logic

const home = async (req,res) => {
    try {
        res.status(200).send("intership project(via)");
    } catch (error) {
        console.log(error);
    }
};

// register page logic

const register = async (req,res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body; 

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({ message: "email already exists" });
        }

        
        const userCreated = await User.create({ username, email, phone, password });

        res.status(201).json({ msg: "registration successful", token: await userCreated.generateToken(), userId: userCreated._id.toString(), });
    } catch (error) {
        next(error);
    }
}

// login page logic

const login = async (req,res) => {
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({ email });

        if(!userExist){
            return res.status(400).json({message: "Invalid Creadentials" });
        }

        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({ msg: "Login successful", token: await userExist.generateToken(), userId: userExist._id.toString(), });
        }
        else{
            res.status(401).json({message: "Invalid email or password"});
        }
        

    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

// to send user data - user logic

const user = async (req,res) =>{
    try {
        const userData = req.user;
        console.log(userData);
        res.status(200).json({ userData });
    } catch (error) {
        console.log("error from the user route "+ error);
    }
};


module.exports = { home, register, login, user};