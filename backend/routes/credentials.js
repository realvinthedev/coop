const express = require('express')
const router = express.Router()

const {
     createCredentials,
     getAllCredentials,
     getSingleCredentials,
     updateSingleCredentials
} = require('../controller/credentialsController')



/**CREATE NEW Credentials */
router.post('/', createCredentials)

/**GET ALL CredentialsS */
router.get('/', getAllCredentials)

/**GET SINGLE Credentials */
router.get('/:id', getSingleCredentials)

/**EDIT SINGLE Credentials */
router.patch('/:id', updateSingleCredentials)



module.exports = router