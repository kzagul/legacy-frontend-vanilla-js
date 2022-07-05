const Router = require('express')
const router = new Router()

//link to locate controller
const controller = require('../controllers/testcontroller.js')

//GET
router.get('/test', controller.get)


module.exports = router