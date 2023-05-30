// Using Node.js `require()`
const mongoose = require('mongoose');

// OR using ES6 imports
// import mongoose from 'mongoose';


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/F8_Blog'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        console.log('Connect successfully!')
    } catch (err) {
        console.log('Connect failed!')
    }
}

module.exports = { connect };
