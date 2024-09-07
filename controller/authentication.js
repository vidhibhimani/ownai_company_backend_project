const user = require("../model/schema");

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken');

const secret = "vidhi@2706";


 
// registration route
// =========================

const register = async (req, res) => {

    const { name, email, password, role, phone, city, country } = req.body;

    try {

        const exist = await user.findOne({ email });

        if (exist) {

            return res.status(400).json({ message: "this user already registerd" })
        }

        else {

            await user.create(req.body);

            res.status(200).json({ message: "registration successfully" })

        }

    } catch (err) {

        res.status(500).json({ message: err.message });

    }

}


// Login route 
// ================

const login = async (req, res) => {

    const { email, password } = req.body;

    const SingleUser = await user.findOne({ email })
    try {

        if (SingleUser.password == password) {

            const token = jwt.sign({ id: SingleUser.id, role: SingleUser.role, name: SingleUser.name, email: SingleUser.email }, secret)

            res.json({ token });

        }

    } catch (error) {

        res.status(500).json({ message: "invalid email or password" })

    }

}



// list route
// ================

const userlist = async (req, res) => {

    try {

        const users = await user.find();

        res.json(users)


    } catch (error) {

        res.status(500).json({ message: "error" })

    }

}


//search route
// ===================

const searchByCountry = async (req, res) => {
    const { country } = req.query;  

    if (!country) {
        return res.status(400).json({ message: "Please provide the country" });
    }

    try {
        
        const users = await user.find({
            country: { $regex: new RegExp(country, 'i') }
        });

        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};




module.exports = {
    register,
    login,
    userlist,
    searchByCountry
}