const router = require('express').Router()
const ctrl = require('../controllers') 

router.get('/', ctrl.gives.giveIndex)
router.get('/:id', ctrl.gives.giveShow)
router.post('/', ctrl.gives.giveCreate)
router.put('/:id', ctrl.gives.giveUpdate)
router.delete('/:id', ctrl.gives.giveDestroy)



module.exports = router