const Express = require("express");
const bodyParser = require("body-parser")
const App = Express();
const Port = 3000

App.use(bodyParser.json());

const UserSchema = require("./UserDB")
const MessageSchema = require("./MessageDB")


App.post("/api/v1/account/create", async (req, res) => {
  const username = await req.body.username
  const password = await req.body.password

  const User = {
    "user_name": username,
    "password": password
  }

  if (await UserSchema.findOne(User)) {
    res.send("User already exists")
    
  } else {
    res.send("User created")
    const User = UserSchema.insertOne({"user_name": username, "password": password});
    console.log(User)
  }

  
  
  
})




App.listen(Port, () => {
  console.log(`Server is running at port ${Port}`);
});
