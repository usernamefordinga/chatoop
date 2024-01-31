const Mongoose = require("mongoose");
const ConnectionString =
  "mongodb+srv://idiot:c00lw0rd@db.kfvwnay.mongodb.net/?retryWrites=true&w=majority";
const Connection = Mongoose.connect(ConnectionString);
const Schema = Mongoose.Schema;

const MessageSchema = new Schema({
  user_name: {
    type: "string",
    required: true,
  },
  message: {
    type: "string",
    required: true,
  },
});

const Collection = Mongoose.model("message", MessageSchema);

module.exports = Collection;
