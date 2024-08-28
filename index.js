const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

// MongoDB URI
const mongoURI = "mongodb://localhost:27017/mydatabase";

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

connectToDatabase();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

const regSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },

  email: {
    type: String,
    required : true
  },

  contact:  {
    type: Number,
    required: true
  },
  message:
   {
    type:String,
    required: false
   }
});

const Registration = mongoose.model("Registration", regSchema);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/register', async (req, res) => {
  try {
    const { name, email, contact, message } = req.body;

    
    const existingUser = await Registration.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ status: 'exists', message: 'User already exists' });
    }

   
    const regData = new Registration({
      name,
      email,
      contact,
      message
    });

    await regData.save();
    console.log("Data saved successfully");
    res.status(201).json({ status: 'success', message: 'Registration successful' });
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).json({ status: 'error', message: 'Error saving data' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
