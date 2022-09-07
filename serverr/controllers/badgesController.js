const mongoose = require('mongoose');
// const communityModel = require('../models/communityModel');
const badgesModel = require('../models/badgesModel');



const getBadges = async (req, res) => {
    try{
        const badges = await badgesModel.find().sort({ _id: -1 });
        res.status(200).json(badges);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
};


const createBadges = async (req,res) => {
    const {title , description , imageUrl} = req.body
    //add doc to db
    try{
        const badges = await badgesModel.create( {title , description , imageUrl})
        res.status(200).json(badges)
    }catch (error){
          res.status(400).json({message: error.message})
    }
}
const deleteBadges = async (req,res) => {
    const {id} = req.params
    try{
        const badges = await badgesModel.findByIdAndDelete(id)
        res.status(200).json(badges)

    }
    catch(error){
        res.json({error: error.message})
    }
}


const countBadges = async (req,res) => {
    try{

        const count = await badgesModel.count();
        res.status(200).json(count)

    }catch (error) {
        res.status(422).json(error);
    }
}

module.exports = { getBadges, createBadges,deleteBadges , countBadges };