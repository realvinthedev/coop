const { default: mongoose } = require('mongoose')
const Employee = require('../model/employeeModel')


/**CREATE NEW EMPLOYEE */
const createEmployee = async (req, res) => {
      const { 
          employee_id, 
          firstname, 
          middlename, 
          lastname, 
          age, 
          birthday, 
          address: { 
               street, 
               postal_code, 
               province, 
               city, 
               country 
          }, 
          email, 
          contact_number, 
          emergency: { 
               emergency_name, 
               emergency_contact_number, 
               emergency_address 
          }, 
          job: { 
               job_title, 
               job_salary, 
               job_start_date, 
               job_end_date, 
               job_contract 
          }, 
          department, 
          is_active, 
          benefits: { 
               sss, 
               pagibig, 
               tin, 
               philhealth 
          }, 
          payroll: { 
               base_salary, 
               allowance, 
               deduction, 
               total 
          }, 
          bank: { 
               bank_name, 
               bank_account_number 
          }, 
          leaves: { 
               sick_leave, 
               vacation_leave, 
               emergency_leave 
          },
          photo,
          credentials: {
               username,
               password
          }
     } = req.body

     try {
          const employee = await Employee.create({ 
               employee_id, 
               firstname, 
               middlename, 
               lastname, 
               age, 
               birthday, 
               address: { 
                    street, 
                    postal_code, 
                    province, 
                    city, 
                    country 
               }, 
               email, 
               contact_number, 
               emergency: { 
                    emergency_name, 
                    emergency_contact_number,
                    emergency_address 
               }, job: { 
                    job_title, 
                    job_salary, 
                    job_start_date, 
                    job_end_date, 
                    job_contract 
               }, 
               department, 
               is_active, 
               benefits: { 
                    sss, 
                    pagibig, 
                    tin, 
                    philhealth 
               }, 
               payroll: { 
                    base_salary, 
                    allowance, 
                    deduction, 
                    total 
               }, 
               bank: { 
                    bank_name, 
                    bank_account_number 
               }, 
               leaves: { 
                    sick_leave, 
                    vacation_leave, 
                    emergency_leave 
               },
               photo,
               credentials: {
                    username,
                    password
               }
          })
          res.status(200).json(employee)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllEmployees = async (req, res) => {
     try {
           /**Workout.find - finding al entries from DB
            * await Workout.find() will run immediately even
            * if the "workout" variable is not called yet
            */
           const allEmployees = await Employee.find({}).sort({ createdAt: -1 })
           //displaying response to user: all workouts from DB
           res.status(200).json(allEmployees)
     } catch (error) {
           res.status(400).json({ error: error.message })
     }
}

const getSingleEmployee = async (req, res) => {
     const { id } = req.params;

     //check if the id passed in parameter is valid id.
     if (!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(404).json({ error: 'No employee found' })
     }

     try {
           const singleEmployee = await Employee.findById(id)
           //displaying response to user: single workout by ID from DB
           res.status(200).json(singleEmployee)
     } catch (error) {
           res.status(400).json({ error: 'No employee found' })
     }
}

const deleteSingleEmployee = async (req, res) => {
     //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
     const { id } = req.params;

     //check if the id passed in parameter is valid id.
     if (!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(404).json({ error: 'No employee found' })
     }
     try {
           //deleting an entry with the id in the parameter
           const singleEmployee = await Employee.findOneAndDelete({ _id: id })

           //return a response which is the deleted one.
           res.status(200).json(singleEmployee)
     } catch (error) {
           res.status(400).json({ error: 'No employee found' })
     }
}

const updateSingleEmployee = async (req, res) => {
     const { id } = req.params

     if (!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(404).json({ error: 'No employee found' })
     }
     try {
           const singleEmployee = await Employee.findOneAndUpdate({ _id: id }, {
                 ...req.body
           })

           //displaying response to user: deleted workout by ID from DB
           res.status(200).json(singleEmployee)
     } catch (error) {
           res.status(400).json({ error: 'No employee found' })
     }
}


module.exports = {
     createEmployee,
     getAllEmployees,
     getSingleEmployee,
     deleteSingleEmployee,
     updateSingleEmployee
}