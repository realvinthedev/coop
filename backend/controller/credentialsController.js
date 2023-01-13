const { default: mongoose } = require('mongoose')
const Credentials = require('../model/credentialsModel')


/**CREATE NEW CREDENTIALS */
const createCredentials = async (req, res) => {
     const {
          employee_id,
          employee_name,
          username,
          password,
          is_active
     } = req.body

     try {
          const credential = await Credentials.create({
               employee_id,
               employee_name,
               username,
               password,
               is_active
          })
          res.status(200).json(credential)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getAllCredentials = async (req, res) => {
     try {
          /**Workout.find - finding al entries from DB
           * await Workout.find() will run immediately even
           * if the "workout" variable is not called yet
           */
          const allCredentials = await Credentials.find({}).sort({ createdAt: -1 })
          //displaying response to user: all workouts from DB
          res.status(200).json(allCredentials)
     } catch (error) {
          res.status(400).json({ error: error.message })
     }
}

const getSingleCredentials = async (req, res) => {
     const { id } = req.params;

     //check if the id passed in parameter is valid id.
     if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ error: 'No Credential found' })
     }

     try {
          const singleCredential = await Credentials.findById(id)
          //displaying response to user: single workout by ID from DB
          res.status(200).json(singleCredential)
     } catch (error) {
          res.status(400).json({ error: 'No Credential found' })
     }
}


const updateSingleCredentials = async (req, res) => {
     const { id } = req.params

     if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ error: 'No Credential found' })
     }
     try {
          const singleCredentials = await Credentials.findOneAndUpdate({ _id: id }, {
               ...req.body
          })

          //displaying response to user: deleted workout by ID from DB
          res.status(200).json(singleCredentials)
     } catch (error) {
          res.status(400).json({ error: 'No Credential found' })
     }
}

module.exports = {
     createCredentials,
     getAllCredentials,
     getSingleCredentials,
     updateSingleCredentials
}