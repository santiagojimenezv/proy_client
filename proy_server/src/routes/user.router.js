const express = require('express');
const userRoute = express.Router();
const userSchema = require('../models/user.model');
const UserService = require('../services/user.service');
const service = new UserService();

/* http://localhost:3977/api/v1/users/user */
userRoute.post('/user', async(req,res)=>{
  const userBody = userSchema(req.body);
  await service
    .createUser(userBody)
    .then((userBody) => res.status(201).json({message: userBody}))
    .catch((err) => res.status(404).json({ message: err }));
});

/* http://localhost:3977/api/v1/users/user */
userRoute.get('/user', async(req,res)=>{
  const userBody = await service
    .findAllUsers()
    .then((userBody) => res.status(200).json({message:userBody}))
    .catch((err) => res.status(404).json({ message: err }));
});

/* http://localhost:3977/api/v1/users/userId */
userRoute.get('/:userId', async(req,res)=>{
  const {userId} = req.params;
  const users = await service
    .findOneUser(userId)
    .then((user) => res.status(200).json({users}))
    .catch((err) => res.status(404).json({ message: err }));
});



/* http://localhost:3977/api/v1/superheroes/superheroId */
userRoute.delete('/:userId', async(req,res)=>{
  const {userId} = req.params;
  await service.deleteUser(userId)
  .then((data) => res.status(200).json(data))
  .catch((err) => res.status(404).json({ message: err}));
});

module.exports = userRoute;