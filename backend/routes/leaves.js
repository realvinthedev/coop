const express = require('express')
const router = express.Router()

const {
     createLeave,
     getAllLeaves,
     getSingleLeave,
     updateSingleLeave,
     deleteSingleLeave
} = require('../controller/LeavesController')



/**CREATE NEW Leave */
router.post('/', createLeave)

/**GET ALL LeaveS */
router.get('/', getAllLeaves)

/**GET SINGLE Leave */
router.get('/:id', getSingleLeave)

/**EDIT SINGLE Leave */
router.patch('/:id', updateSingleLeave)

/**DELETE SINGLE Leave */
router.delete('/:id', deleteSingleLeave)



module.exports = router