// //lab work
// //Mongo DB 

// Use the MongoDB lesson to solve for the following:
// Find all New Balance 574 shoes.
// db.products.find({model: '574'})
// <--- solution goes here !--->
// Find all New Balance shoes that are either red or blue.
// db.users.find( { $or: [ { color: "red" }, { color: { "blue" },] )
// <--- solution goes here !--->
// Insert 4 more New Balance shoes:
// <--- solution goes here !--->
// db.products.insertMany([
//   { model: "575", brand: "New Balance", color: "Pink" },
//   { model: "576", brand: "New Balance", color: "Yellow" },
//   { model: "577", brand: "New Balance", color: "Green" },
//   { model: "578", brand: "New Balance", color: "white" },

// Update all navy New Balance shoes to Blue:
// <--- solution goes here !--->
// db.users.updateMany( { "navy":} { $set: { name: "Blue" }, $currentDate: { lastModified: true } } )
// Delete all 515 New Balance shoes.
// <--- solution goes here !--->
// db.users.deleteMany({ shoes:'515'})
