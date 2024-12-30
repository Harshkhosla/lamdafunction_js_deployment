const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://harsh:Harsh9945khosla@cluster0.osfevs6.mongodb.net/SecondBrain2"
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;