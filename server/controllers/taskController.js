const Task = require('./../models/taskModel');


const createTask = async (req,res) => {

    const {title , question ,falseChoice,trueChoice, description , link , coin} = req.body
    //add doc to db
    try{
        const task = await Task.create({title, question ,falseChoice,trueChoice,description , link , coin})
        res.status(200).json(task)
    }catch (error){
          res.status(400).json({message: error.message})
    }
}

const getTasks =  async (req,res) => {
    try{
        const tasks = await Task.find({}).sort({createdAt: -1})
        res.status(200).json(tasks)
        }
        catch (error){
            res.status(400).json({error: error.message})
        }
}

const deleteTask =  async( req,res) => {
    const {id} = req.params
    try{
        const task = await Task.findByIdAndDelete(id)
        res.status(200).json(task)

    }
    catch(error){
        res.json({error: error.message})
    }
}


const countTasks = async (req,res) => {

    try{

        const count = await Task.count();
        // console.log(count);
        res.json(count)


    }catch (error) {
        res.status(422).json(error);
    }

}

module.exports={
    createTask,
    getTasks,
    deleteTask,
    countTasks
}