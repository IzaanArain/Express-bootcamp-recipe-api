const express=require('express')
const {getAll,save,update,remove}=require("../controllers/recipesController")

const router=express.Router();

// router.get('/',getAll)
// router.post('/',save)
// router.put("/:id",update)
// router.delete("/:id",remove)

router.route("/").get(getAll).post(save)
router.route("/:id").put(update).delete(remove)
module.exports=router