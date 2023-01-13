

const express = require('express')
const router = express.Router()

const {
     createDepartment,
     getAllDepartment,
     getSingleDepartment,
     updateSingleDepartment
} = require('../controller/departmentController')



/**CREATE NEW DEPARTMENT */
router.post('/', createDepartment)

/**GET ALL DEPARTMENTS */
router.get('/', getAllDepartment)

/**GET SINGLE DEPARTMENT */
router.get('/:id', getSingleDepartment)

/**EDIT SINGLE DEPARTMENT */
router.patch('/:id', updateSingleDepartment)





module.exports = router