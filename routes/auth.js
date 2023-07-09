const express = require('express');
const UserSchema = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {

    try {

        const salt = await  bcrypt.genSalt(10);

        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new UserSchema({
            email: req.body.email,
            password: req.body.password,
            fname: req.body.fname,
            lname: req.body.lname,
            mobile: req.body.mobile,
            password: hashPassword,
            picture: req.body.picture
        });

        const existUser = await UserSchema.findOne({ email: req.body.email });

        if (existUser) {
            res.status(400).json({
                message: "User already exist",
            });
        } else {
            const savedUser = await newUser.save();
            res.status(200).json({
                message: "User registered successfully",
                user: savedUser
            });
        }

    }catch (error){
        res.status(500).json({
            message: "Internal Server Error",
            error: error
        });
    }

});

router.post('/login', async (req, res) => {
    try {
        
        //get user details related to this email
        const user = await UserSchema.findOne({ email: req.body.email });
        if (!user){
            return res.status(400).json({
                message: "Email not found"
            });
        }

        //check password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword){
            return res.status(400).json({
                message: "Password is incorrect"
            });
        }

        const { password, ...others } = user._doc;

        const token = jwt.sign({ user: others }, 'secretpassword');

        res.status(200).json({
            message: "User login successfully",
            user: {
                ...others,
                token
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "User login server error",
            error: error.message
        });
    }
});

router.get('/', async (req, res) => {
    try {
        
        const users = await UserSchema.find();

        res.status(200).json({
            message: "Get all users successfully",
            data: users
        });

    } catch (error) {
        res.status(500).json({
            message: "Get users server error",
            error: error.message
        });
    }
});

module.exports = router;