const Reward = require('../models/rewardModel')


    const createReward = async (req,res) => {

        const {title , description , photo , coin , permissionLevel} = req.body
        //add doc to db
        try{
            const rewards = await Reward.create({title , description , photo , coin , permissionLevel})
            res.status(200).json(rewards)
        }catch (error){
              res.status(400).json({message: error.message})
        }

    }


    const getRewards = async (req,res) => {
        
        try{
            const rewards = await Reward.find({}).sort({createdAt: -1})
            res.status(200).json(rewards)
            }
            catch (error){
                res.status(400).json({error: error.message})
            }

    } 


    const deleteReward = async (req,res) => {
        const {id} = req.params
        try{
            const reward = await Reward.findByIdAndDelete(id)
            res.status(200).json(reward)
    
        }
        catch(error){
            res.json({error: error.message})
        }
    }


    const countReward = async (req,res) => {
        try{

            const rewards = await Reward.count();
            // console.log(count);
            res.json(rewards)
    
    
        }catch (error) {
            res.status(422).json(error);
        }
    }






module.exports = {
    createReward,
    getRewards,
    deleteReward,
    countReward
}