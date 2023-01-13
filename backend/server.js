require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const employeeRoutes = require('./routes/employee')
const leavesRoutes = require('./routes/leaves')
const credentialsRoutes = require('./routes/credentials')
const departmentRoutes = require('./routes/department')



/**EXPRESS APP 
 * express thingy
*/
const app = express() 


/**MIDDLEWARE
 * it will run all the time whenever there are request
 * it is like a global function that will run always whenever there are request detected(ex: GET, POST, etc)
 */
app.use((req, res, next)=>{
     console.log('I am detecting a request - MIDDLEWARE')
     next();
})
app.use(express.json())

/**ROUTES
 * different routes will be define here
 */
app.use('/api/employee', employeeRoutes)
app.use('/api/leaves', leavesRoutes)
app.use('/api/credentials', credentialsRoutes)
app.use('/api/departments', departmentRoutes)

/**CONNECT TO DB */
mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
                //listen request: 4000, callback function(the console log) to fire if successfully listen to 4000
                app.listen(process.env.PORT, ()=> {
                console.log(`Connected to DB and Listening to port ${process.env.PORT}`)
                })

        })
        .catch((error) =>{
                console.log(error)
        })
