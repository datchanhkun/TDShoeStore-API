import mongoose from "mongoose";

const URI = "mongodb+srv://datchanhkun:01626274320a@cluster0.ghgzj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDatabase = async () => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    console.log("Mongodb connected...")
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

export default connectDatabase;