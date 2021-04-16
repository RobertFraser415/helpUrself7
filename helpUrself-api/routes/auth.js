







// imports
const router = require("express").Router();
const ctrl = require("../controllers");

const authRequired = require("../middleware/authRequired");

// routes
router.post("/register", ctrl.auth.register);
router.post("/login", ctrl.auth.login);
router.get("/profile", authRequired, ctrl.auth.profile);

// exports
module.exports = router;






























































// const router = require('express').Router();
// const bcrypt = require('bcryptjs');
// const config = require('config');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const auth = require('../middleware/auth');

// /**
//  * @route   POST /auth/login
//  * @desc    Login User
//  * @access  Public
//  */

// router.post('/login', async (req,res)=>{
//     const {email, password} = req.body;

//     if (!email || !password){
//         return res.status(400).json({ msg: 'Please enter all fields' });
//     }

//     try{
//         const user = await User.findOne({email});
//         if (!user) throw Error('User does not exist');

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) throw Error('Invalid Credentials');

//         const token = jwt.sign({id:user._id},config.get('jwtSecret'),{ expiresIn: 86400});
//         if (!token) throw Error('Could not sign token');

//         res.status(200).json({
//             token,
//             user: {
//               id: user._id,
//               name: user.name,
//               email: user.email
//             }
//           });

//     }catch(e){
//         res.status(400).json({ msg: e.message });
//     }
// });


// /**
//  * @route   POST /auth/register
//  * @desc    Registers a new user
//  * @access  Public
//  * {"email": "myEmail@gmail.com", "password": "Yellow123", name: "Peter Griffin"}
//  * 
//  */

// router.post('/register',async(req,res)=>{
//     const {email, password, name} = req.body;

//     if (!name || !email || !password){
//         return res.status(400).json({ msg: 'Please enter all fields' });
//     }

//     try {
//         const user = await User.findOne({email});
//         if (user) throw Error('User under this email already exist');

//         const salt = await bcrypt.genSalt(10);
//         if (!salt) throw Error('Something went wrong with bcrypt');

//         const hash = await bcrypt.hash(password,salt);//hash now equals to our hashed password
//         if (!hash) throw Error('Something went wrong hashing the password');

//         const newUser = new User({
//             name,
//             email,
//             password:hash
//         });


//         const savedUser = await newUser.save();
//         if(!savedUser) throw Error('Something went wrong trying to save the user');

//         const token = jwt.sign({id: savedUser._id},config.get('jwtSecret'),{ expiresIn: 86400});

//         res.status(200).json({
//             token,
//             user: {
//                 id: savedUser.id,
//                 name: savedUser.name,
//                 email: savedUser.email
//             }
//         });

//     } catch (e) {
//         res.status(400).json({ msg: e.message });
//     }

// });


// /**
//  * @route   POST /auth/user
//  * @desc    gets user's data
//  * @access  Private
//  */

// router.get('/user', auth, (req, res) => {
//     User.findById(req.user.id)
//       .select('-password')
//       .then(user => res.json(user));
// });


// module.exports = router;