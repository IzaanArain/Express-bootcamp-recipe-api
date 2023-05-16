const service=require("../services/recipesServices")

const getAll=async(req,res,next)=>{
    try{
        res.json({data:await service.getAll()})
    }catch(error){
        next(error)
    }
}

const save=async(req,res,next)=>{
    try{
        const {
            name,
            healthLabels,
            cookTimeMinutes,
            prepTimeMinutes,
            ingredients,
        }=req.body
    
        const newRecipe={
            name:name,
            healthLabels:[...healthLabels],
            cookTimeMinutes:cookTimeMinutes,
            prepTimeMinutes:prepTimeMinutes,
            ingredients:[...ingredients]
        }
    
        res.status(201).json({data:await service.save(newRecipe)})
    }catch(error){
        next(error);
    }

}

const update=async(req,res,next)=>{
   try{
    const {
        name,
        healthLabels,
        cookTimeMinutes,
        prepTimeMinutes,
        ingredients,
      } = req.body;

      const updated = await service.update(req.params.id, {
        name,
        healthLabels: [...healthLabels],
        cookTimeMinutes,
        prepTimeMinutes,
        ingredients: [...ingredients],
      });

      res.json({data:updated})
   }catch(error){
    next(error);
   }
}
const remove = async (req, res, next) => {
    try {
      await service.remove(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };

module.exports={getAll,save,update,remove}

