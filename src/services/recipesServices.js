const fs=require('fs').promises
const { json } = require('express')
const path=require("path")

const receipesFilePath=path.join(__dirname,'../../db/recipes.json')

// const readFile=async (path) => {
//     try{
//       const contents=await fs.readFile(receipesFilePath,"utf8")
//       console.log(contents)
//     }catch(error){
//       console.log(error)
//     }
//   }
//   readFile()

const getAll=async()=>{
    const contents=await fs.readFile(receipesFilePath,"utf-8")
    return JSON.parse(contents)
}

const save=async(recipe)=>{
    const recipes=await getAll()
    recipe.id=recipes.length +1;
    recipes.push(recipe);
    await fs.writeFile(receipesFilePath,JSON.stringify(recipes))
    return recipe;
}

const update=async(id,updated)=>{
    const recipes=await getAll();
    updated.id=parseInt(id)

    const updatedRecipes=recipes.map((recipe)=>{
        return recipe.id===parseInt(id)?updated:recipe;
    })
    await fs.writeFile(receipesFilePath,JSON.stringify(updatedRecipes))
    return updated
}

const remove = async (id) => {
    const recipes = await getAll();
    const newRecipes = recipes
      .map((recipe) => {
        return recipe.id === parseInt(id) ? null : recipe;
      })
      .filter((recipe) => recipe !== null);
  
    await fs.writeFile(receipesFilePath, JSON.stringify(newRecipes));
  };

module.exports={getAll,save,update,remove}