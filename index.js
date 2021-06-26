//importing express package
const express = require('express');

//request handling methods
const  handleDeleteRequest = (req, res) => {
    res.send("<h1> Order deleted Successfully</h1>")
}

const  handleLoginRequest = (req, res) => {
    res.send("<h1> Welcome to the login page</h1>")
}

const handleSignUpRequest = (req, res) => {
    res.send("<h1>You are welcome to the sign up page.</h1>")
}
const  handleProfileRequest = (req, res) => {
    res.send("<h1>This is your profile page! Welcome </h1>")
}


//creating a server instance
const server = express();


// list of midddlewares
server.delete('/order', handleDeleteRequest);
server.post('/login', handleLoginRequest);
server.get('/signUp', handleSignUpRequest);
server.put('/profile', handleProfileRequest);

//starting the server
server.listen(3000, () => console.log("server is ready to receive requests"))