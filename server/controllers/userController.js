const User = require('./../models/userModel')


const createUser =  async (req,res) => {

    const {firstName , lastName , username,  email , password ,level , profile , rewards , badges} = req.body
    //add doc to db
    try{
        const user = await User.create({firstName , lastName , username,  email , password ,level , profile , rewards , badges})
        res.status(200).json(user)
    }catch (error){
          res.status(400).json({message: error.message})
    }

}


const getUsers = async (req,res) => {
    try{
        const user = await User.find({})
        res.status(200).json(user)
        }
        catch (error){
            res.status(400).json({error: error.message})
        }
}

const topUsers = async (req,res) => {
    try{
        const user = await User.find().limit(3).sort({level:-1})
        res.status(200).json(user)
        }
        catch (error){
            res.status(400).json({error: error.message})
        }

}

const lateastUsers = async (req,res) => {
    try{
        const user = await User.find().limit(5).sort({_id: -1 })
        res.status(200).json(user)
        }
        catch (error){
            res.status(400).json({error: error.message})
        }
}


const countUsers = async (req,res) => {

    try{

        const count = await User.count();
        // console.log(count);
        res.json(count)


    }catch (error) {
        res.status(422).json(error);
    }

}


const deleteUser = async (req,res) => {
    const {id} = req.params
    try{
        const user = await User.findByIdAndDelete(id)
        res.status(200).json(user)

    }
    catch(error){
        res.json({error: error.message})
    }
}

const getUser = async (req,res) => {
    try {
        const {id} = req.params;
        
        const userindividual = await User.findById({_id:id});
        console.log(id)
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
}

const updateUser = async (req,res) => {
    const id =req.params.id
try{
const user = await User.findByIdAndUpdate(id,req.body,{new: true})
res.status(200).json(user)
}catch(error){
res.json({error: error.message})
}

// const { id } = req.params;
// const { value } = req.body;

// const userr = await User.findById(id);

// userr.badges.push(value);

// const updateUser = await User.findByIdAndUpdate(id, userr, { new: true });

// res.json(updateUser);
 }





module.exports = {
    createUser,
    getUsers,
    topUsers,
    lateastUsers,
    countUsers,
    deleteUser,
    getUser,
    updateUser
}