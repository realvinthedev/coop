const mongoose = require('mongoose')

const Schema = mongoose.Schema


//defines the structures/model of the data in DB
const employeeSchema = new Schema({
      employee_id: {
            type: String,
            required: true
      },
      firstname: {
            type: String,
            required: true
      },
      middlename: {
            type: String,
            required: false
      },
      lastname: {
            type: String,
            required: true
      },
      age: {
            type: String,
            required: true
      },
      birthday: {
            type: String,
            required: true
      },
      address: {
            type: String,
            required: true
      },
      email: {
            type: String,
            required: false
      },
      contact_number: {
            type: Number,
            required: false
      },
      incase_of_emergency: {
            type: String,
            required: false
      },
      job_title: {
            type: String,
            required: true
      },
      salary: {
            type: Number,
            required: true
      },
      start_date: {
            type: String,
            required: true
      },
      end_date: {
            type: String,
            required: false
      },
      contract: {
            type: String,
            required: true
      },
      department: {
            type: String,
            required: true
      },
      is_active: {
            type: Boolean,
            required: false
      },
      sss: {
            type: String,
            required: false
      },
      pagibig: {
            type: String,
            required: false
      },
      tin: {
            type: String,
            required: false
      },
      philhealth: {
            type: String,
            required: false
      },
      bank_name: {
            type: String,
            required: false
      },
      bank_account_number: {
            type: String,
            required: false
      },
      sick_leave: {
            type: Number,
            required: true
      },
      vacation_leave: {
            type: Number,
            required: true
      },
      emergency_leave: {
            type: Number,
            required: true
      },
      photo: {
            type: String,
            required: false
      },
      username: {
            type: String,
            required: false
      },
      password: {
            type: String,
            required: false
      },
},

      {
            timestamps: true
      })


module.exports = mongoose.model('Employee', employeeSchema)