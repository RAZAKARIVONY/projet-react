const express = require('express')

const router = express.Router()

const recruterController = require ('../controllers/recrutement.controller')


router.get('/', recruterController.getAllRecruter);
router.post('/', recruterController.addRecruter);
router.get('/:id', recruterController.getById);
router.put('/:id', recruterController.updateRecruter);
router.delete('/:id', recruterController.deleteRecuter);

module.exports = router;