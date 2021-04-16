const mongoose = require('mongoose')
require('./db')
const Article = require('./Article')

// save article to db
Give.create({
    // username: 'Robert0'
    item: 'Cans of tomato sauce',
    quantity: 3,
    description: "I got these cans sitting around",
    category: "Food",
    value: 2.00,
    condition: 'New',
    dateCreated: Date.now(),
    availableNow: true,
    availableLater: false,
}, (err, userGive) => {
  if (err) console.log('Create error: ', err)
  console.log('Created: ', userGive)
})