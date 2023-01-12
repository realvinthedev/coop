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
          street: String,
          postal_code: String,
          province: String,
          city: String,
          country: String
    },
    email: {
          type: String,
          required: true
    },
    contact_number: {
          type: Number,
          required: false
    },
    emergency: {
          emergency_name: String,
          emergency_contact_number: Number,
          emergency_address: String,
    },
    job: {
          job_title: String,
          job_salary: Number,
          job_start_date: String,
          job_end_date: String,
          job_contract: String
    },
    department: {
          type: String,
          required: false
    },
    is_active: {
          type: Boolean,
          required: false
    },
    benefits: {
          sss: Number,
          pagibig: Number,
          tin: Number,
          philhealth: Number
    },
    payroll: {
          base_salary: Number,
          allowance: Number,
          deduction: Number,
          total: Number
    },
    bank: {
          bank_name: String,
          bank_account_number:  Number
    },
    leaves: {
          sick_leave: Number,
          vacation_leave: Number,
          emergency_leave: Number
    }
},
      {
            timestamps: true
      })


module.exports = mongoose.model('Employee', employeeSchema)