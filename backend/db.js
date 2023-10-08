const mongoose = require('mongoose');
const { cloneElement } = require('react');
const mongoURI = 'mongodb+srv://smit42:mern123@1.thr5nw5.mongodb.net/khanamern?retryWrites=true&w=majority'
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected")
    let fetched_data = mongoose.connection.db.collection("food_items")
    let data = await fetched_data.find({}).toArray()
    global.food_items = data;

    let fetched_data1 = mongoose.connection.db.collection("food_category")
    let data1 = await fetched_data1.find({}).toArray()
    global.food_category = data1;

    //console.log(global.food_items)



  }
  catch (error) {
    console.log("err:", error)
  }

};
module.exports = mongoDB;


/*mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
/*/



