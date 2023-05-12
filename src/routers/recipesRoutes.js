const express=require('express')
const {getAll}=require("../controllers/recipesController")

const router=express.Router();

router.get('/',getAll)

module.exports=router