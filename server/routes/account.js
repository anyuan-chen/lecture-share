const express = require("express");
const router = express.Router();
const pool = require("../db.js")
const bcrypt = require("bcrypt")
const jwtGenrator = require("../utils/jwtGenerator")
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization")
const jwtGenerator = require("../utils/jwtGenerator");

router.post("/register", validInfo, async(req,res) => {
    try {
        const {name, email, password} = req.body;
        const user = await pool.query("SELECT * FROM users WHERE user_email=$1", [email]);
        if (user.rows.length !== 0){
            return res.status(401).json("Already Exists Account With This Email")
        }

        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", [name, email, bcryptPassword]);
        const token = jwtGenrator(newUser.rows[0].user_id);
        res.json({token})
        
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error :(")
    }
})

router.post("/login", validInfo, async(req,res) => {
    try {
        const {email, password} = req.body;
        const user = await pool.query("SELECT * FROM users WHERE user_email=$1", [email]);
        if (user.rows.length === 0){
            return res.status(401).json("No Account Exists")
        }
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password)
        if (!validPassword){
            return res.status(401).json("Incorrect Password");
        }
        const token = jwtGenerator(user.rows[0].user_id);
        res.json({token})
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error :(")
    }
})

router.get("/is-verify", authorization, async(req,res) => {
    try {
        res.json({value : true})
    } catch (error) {
        console.log(err.message)
        res.status(500).json("Server Error")        
    }
})

module.exports = router;