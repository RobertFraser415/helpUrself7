const router = require('express').Router()
const ctrl = require('../controllers') 

router.get('/', ctrl.users.userIndex)
router.get('/:id', ctrl.users.userShow)
router.post('/', ctrl.users.userCreate)
router.put('/:id', ctrl.users.userUpdate)
router.delete('/:id', ctrl.users.userDestroy)

module.exports = router


































// const router = require('express').Router()
// // let User = require('../models/User')
// const db = require('../models')


// router.route('/').get((req, res) => {
//     User.find()
//         .then(users => res.json(users))
//         .catch(err => res.status(400).json('Error: ' + err))
// })

// router.post('/add', (req, res) =>{
//     // const newUser = {username: req.body.username, email: req.body.email, password: req.body.password}
//     db.User.create(req.body, (err, savedUser) => {
//         if (err) console.log('Error in user#create:', err)
//         res.status(200).json({ msq: "Successfully created user" })
//     })
    
// })

// module.exports = router


// /**
//  * @route   GET api/users
//  * @desc    Get all users
//  * @access  Private
//  */

// router.get('/',async(req,res)=>{
// try {
//     const users = await User.find();
//     if(!users) throw Error('No users Exist');
//     res.json(users);
//     // res.json({users:users.length});

// } catch (error) {
//     res.status(400).json({msg: error.message})
// }
// });

// router.get('/:id',(req,res)=>{
//     User.findById(req.params.id).populate('gives').then((user)=>{

//         res.json({user: user})

//     }).catch((err)=>{

//         console.log('Error in question.show', err);
//         res.json({Error: 'Unable to get your data'})

//     });
// });

// module.exports = router;