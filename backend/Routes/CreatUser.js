const express = require('express')
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');

const jwt =require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const jwtSecret="IamSmitPatelFromGujratIamInFourt"

router.post("/creatuser", [
    body('email', 'Invalid Email').isEmail(),
    body('name').isLength({ min: 3 }),
    body('password', 'Invalid Password').isLength({ min: 5 })]
    , async (req, res) => {


        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt= await bcrypt.genSalt(10);
        let secPassword= await bcrypt.hash(req.body.password,salt)
        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
                location: req.body.location
            })
            res.json({ success: true });
        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })


router.post("/loginuser", [
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Invalid Password').isLength({ min: 5 })]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const email = req.body.email;
        const password = req.body.password;

        try {
            const userdata = await User.findOne({ email }); // Use { email } as the query parameter
            if (!userdata) {
                return res.status(400).json({ errors: "Try Logging in with correct credentials" });
            }

            // Compare the hashed password here (assuming you store hashed passwords)
            // You should never compare passwords in plaintext
            const pwdCompare = await bcrypt.compare(password,userdata.password)
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Try Logging in with correct credentials" });
            }
            const data={
                user:{
                    id:userdata.id
                }
            }
            const authToken=jwt.sign(data,jwtSecret);
            return res.json({ success: true,authToken:authToken});
        }
        catch (error) {
            console.log(error)
            res.json({ success: false });
        }
    })
module.exports = router