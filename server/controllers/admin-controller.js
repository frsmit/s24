const User = require("../models/user-model");
const Contact = require("../models/contact-model");

// getting all user data

const getAllUsers = async (req,res,next) => {
    try {
        const users = await User.find({}, { password: 0 });
        // console.log(users);
        if (!users || users.length === 0) {
            return res.status(404).json({ message : "NO User Found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// get user by id

const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({_id:id}, { password:0 });
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

// update user by id

const updateUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;

        const updatedData = await User.updateOne({_id:id}, {
            $set: updatedUserData,
        });
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
};

// delete user by id 

const deleteUserById = async (req,res,next) => {
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({message: "user deleted successfully"});
    } catch (error) {
        next(error);
    }
};

// getting all contact data

const getAllContacts = async (req,res,next) => {
    try {
        const contacts = await Contact.find();
        // console.log(contacts);
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "NO Contacts Found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};

// deleting contact by id

const deleteContactById = async(req, res, next) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({ message: "Contact Deleted Successfully" });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById};