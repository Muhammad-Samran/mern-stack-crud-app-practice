const mongoose = require("mongoose");
// Allow Promises
mongoose.Promise = global.Promise;

const DB =
  "mongodb+srv://samran123:Samran@123@cluster0.4de2yop.mongodb.net/crud?retryWrites=true&w=majority";

// Connection
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
// Validation
mongoose.connection
  .once("open", () => console.log("Connected to the database!"))
  .on("error", (err) => console.log("Error with the database!", err));
