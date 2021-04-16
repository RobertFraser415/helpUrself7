require("dotenv").config()
const db = require('./models')
const getData = require('./getData.json')
const giveData = require('./giveData.json')
const userData = require('./userData.json')

db.Give.deleteMany({}, (err, deletedGives) => {
  db.Give.create(giveData.gives, (err, seededGives) => {
    if(err) console.log(err);
    console.log(giveData.gives.length, 'gives created successfully!')
  })
})

db.aGet.deleteMany({}, (err, deletedGets) => {
  db.aGet.create(getData.gets, (err, seededGets) => {
    if(err) console.log(err);
    console.log(getData.gets.length, 'gets created successfully!')
  })
})

db.User.deleteMany({}, (err, deletedUsers) => {
  db.User.create(userData.users, (err, seededUsers) => {
    if(err) console.log(err);
    console.log(userData.users.length, 'users created successfully!')
  })
})

//GET

    // {
    //   "username": "James",
    //   "what": "Shoes",
    //   "description": "Size 11 mens shoes",
    //   "howMany": 1,
    //   "category": "Gear",
    //   "needNow": true,
    //   "needLater": false,
    //   "created_date": null
    // }


    //   //GIVE
    // {
    //   "username": "Robert",
    //   "item": "Cans of tomato sauce",
    //   "howMany": 3,
    //   "description": " These cans are just sitting around",
    //   "category": "Food",
    //   "value": 6.00,
    //   "availableNow": true,
    //   "availableLater": false,
    //   "created_date": null
    // }