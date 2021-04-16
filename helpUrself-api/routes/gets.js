const router = require('express').Router()
const ctrl = require('../controllers') 

router.get('/', ctrl.gets.getIndex)
router.get('/:id', ctrl.gets.getShow)
router.post('/', ctrl.gets.getCreate)
router.put('/:id', ctrl.gets.getUpdate)
router.delete('/:id', ctrl.gets.getDestroy)

module.exports = router

















// const router = require('express').Router()
// const aGet = require('../models/aget')

// router.route('/').get((req, res) => {
//    aGet.find()
//    .then(gets => res.json(gets))
//    .catch(err => res.status(400).json('Error ' + err))
// })

// router.route('/add').post((req, res) => {
//    const username =  req.body.username
//    const what = req.body.what   
//    const description = req.body.description     
//    const howMany = Number(req.body.howMany)      
//    const category = req.body.category
//    const needNow = Boolean(req.body.needNow)
//    const needLater = Boolean(req.body.needLater)
//    const email = req.body.email
//    const created_date = Date(req.body.created_date)

//    const newaGet = new aGet({
//       username,
//       what,
//       description,
//       howMany,
//       category,
//       needNow,
//       needLater,
//       email,
//       created_date
//    })
//    newaGet.save()
//       .then(() => res.json('Success! U listed a help U need to get!'))
//       .catch(err => res.status(400).json('Error: ' + err))

// router.route('/:id').get((req, res) => {
//    aGet.findById(req.params.id)
//       .then(aget => res.json(aget))
//       .catch(err => res.status(400).json('Error: ' + err))
// })

// router.route('/:id').delete((req, res) => {
//    aGet.findByIdAndDelete(req.params.id)
//       .then(aget => res.json("This GET was deleted!"))
//       .catch(err => res.status(400).json('Error: ' + err))
// })

// router.route('/update/:id').post((req, res) => {
//    aGet.findById(req.params.id)
//       .then(aget => {
//          aget.username = req.body.username
//          aget.what = req.body.what
//          aget.description = req.body.description
//          aget.howMany = Number(req.body.howMany)
//          aget.category = req.body.category
//          aget.needNow = Boolean(req.body.needNow)
//          aget.needLater = Boolean(req.body.needLater)
//          aget.email = req.body.email
//          aget.created_date = Date.parse(req.body.created_date)
//          aget.save()
//             .then(() => res.json('Successfully updated this GET!'))
//             .catch(err => res.status(400).json('Error: ' + err))

//       })
//       .catch(err => res.status(400).json('Error: ' + err))
// })
// })

// module.exports = router