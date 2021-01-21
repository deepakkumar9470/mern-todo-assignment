const express = require("express");

const router = express.Router();
// Importing Model
const Item = require("../models/Todo");



// GET
router.get("/", async (req,res)=>{
    try{
      const getTodo = await Item.find();
      res.json(getTodo);
    }catch(err){
        res.json({message:err});
    }
})

// POST (CREATE)
router.post("/", async (req,res)=>{
    const item = new Item({
        name:req.body.name    
    });
   try {
    const savedTodo = await item.save();
    res.json(savedTodo);
    
   }catch(err){
       res.json({message:err});
   }
})
// GET Specific Post
router.get("/:todoId" , async (req, res)=>{
  try{
    const getSpecificTodo = await Item.findById(req.params.todoId);
    res.json(getSpecificTodo);
  }catch(err){
      res.json({message: err});
  }
})

// DELETE 
router.delete("/:todoId", async (req, res)=>{
   try{
    const deleteTodo = await Item.deleteOne({_id: req.params.todoId});
    res.json(deleteTodo);
   }catch(err){
       req.json({message : err});
   }
})
 
// UPDATE

router.patch("/:todoId", async (req, res)=>{
   try{
       const updateTodo = await Item.updateOne({_id: req.params.todoId}, 
        {$set: {name:req.body.name}})
       res.json(updateTodo);
   }catch(err){
       req.json({message : err});
   }
})

module.exports = router