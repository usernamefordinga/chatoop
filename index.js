const Express = require("express");
const App = Express();
const Port = 3000

const UserSchema = require("./UserDB")
const MessageSchema = require("./MessageDB")


App.post("/api/v1/account/create", async (req, res) => {
  console.log(req.body)
  // const username = await req.body.username
  // const password = await req.body.password

  // const User = {
  //   "user_name": username,
  //   "password": password
  // }

  // if (await UserSchema.findOne(User)) {
  //   res.send("User already exists")
    
  // } else {
  //   res.send("User created")
  //   await UserSchema.insertOne(User);
  // }

  
  
  
})




App.listen(Port, () => {
  console.log(`Server is running at port ${Port}`);
});
