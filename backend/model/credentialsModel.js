const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const credentialsSchema = new Schema({
     employee_id: {
          type: String,
          required: true
    },
    employee_name: {
          type: String,
          required: true
    },
    username: {
          type: String,
          required: true
    },
    password: {
          type: String,
          required: true
    },
    is_active: {
          type: String,
          required: true
    }
},
      {
            timestamps: true
      })


module.exports = mongoose.model('Credentials', credentialsSchema)