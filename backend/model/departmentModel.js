const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const departmentSchema = new Schema({
     department_name: {
          type: String,
          required: true
    },
    description: {
          type: String,
          required: true
    }
},
      {
            timestamps: true
      })


module.exports = mongoose.model('Department', departmentSchema)