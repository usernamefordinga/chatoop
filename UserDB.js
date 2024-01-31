const Mongoose = require("mongoose")
const ConnectionString = "mongodb+srv://idiot:c00lw0rd@db.kfvwnay.mongodb.net/?retryWrites=true&w=majority"
const Connection = Mongoose.connect(ConnectionString);
const Schema = Mongoose.Schema;

const UserSchema = new Schema({
  "user_name": {
    type: "string",
    required: true
  },
  "password": {
    type: "string",
    required: true
  }
})

const Collection = Mongoose.model("user", UserSchema);

module.exports = Collection
