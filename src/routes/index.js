const express = require('express');
const router = express.Router();

const Task=require('../models/usuarios');

router.get('/', async(req,res)=>{
    const tasks = await Task.find();
    console.log(tasks);
    res.send(tasks);
});

router.post('/add', async(req,res)=>{
    const task=new Task(req.body);
    await task.save();
    res.send(task);
});

router.post('/addfriends/:id', async(req,res)=>{
    const {id}= req.params;
    const task=await Task.update({"id": id},{$push:req.body});
    res.send(task);
});



router.get('/edit/:id', async (req,res)=>{
    const {id} = req.params;
    const task= await Task.find({"id":id});
    res.send(task);
});

router.post('/edit/:id', async(req,res)=>{
const {id}= req.params;
const task=await Task.update({"id": id},{$set:req.body});
console.log(req.body);
res.send(task);
});

router.get('/delete/:id', async(req,res)=>{
    const {id} = req.params;
    const answer=await Task.remove({id:id});
    console.log(req.params.id);
    res.send(answer);
});
module.exports=router;