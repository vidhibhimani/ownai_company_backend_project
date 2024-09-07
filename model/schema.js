const mongoose = require('mongoose');

const schema = mongoose.Schema({

    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },

    password: {
        type: String,
        required: true,

    },

    role:
    {
        type: String,
        required: true,
        enum: ['Admin' , 'Staff']
    },

    phone:
    {
        type: String,
        required: true
    },

    city:
    {
        type: String,
        required: true
    },

    country:
    {
        type: String,
        required: true
    },

})

const user = mongoose.model('user', schema);

module.exports = user;