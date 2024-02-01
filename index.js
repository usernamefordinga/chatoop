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
    await UserSchema.create({"user_name": username, "password": password});
    res.send("User created")    
  }

  
  
  
})

App.post("/api/v1/message/send", async (req,res) => {
  const username = await req.body.username
  const password = await req.body.password
  const message = await.req.body.message

    const User = {
    "user_name": username,
    "password": password
  }

  if (await UserSchema.findOne(User)) {
    const chatMessage = {
      "user_name": username,
      "message": message
    }
    await MessageDB.create(chatMessage)
    res.send("Message sent successfully!")
  } else {
    res.send("Failed to authenticate user, please try again!")
  }
  
})



App.listen(Port, () => {
  console.log(`Server is running at port ${Port}`);
});
