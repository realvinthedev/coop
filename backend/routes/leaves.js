const express = require('express')
const router = express.Router()

const {
     createLeave,
     getAllLeaves,
     getSingleLeave,
     updateSingleLeave
} = require('../controller/LeaveController')



/**CREATE NEW Leave */
router.post('/', createLeave)

/**GET ALL LeaveS */
router.get('/', getAllLeaves)

/**GET SINGLE Leave */
router.get('/:id', getSingleLeave)

/**EDIT SINGLE Leave */
router.patch('/:id', updateSingleLeave)



module.exports = router