const fs=require('fs').promises
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
    const contents=await fs.writeFile(receipesFilePath,)
}

module.exports={getAll}