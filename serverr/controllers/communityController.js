const mongoose = require('mongoose');
// const communityModel = require('../models/communityModel');
const CommunityModel = require('../models/communityModel');

const getGroups = async (req, res) => {
    try{
        const groups = await CommunityModel.find().sort({ _id: -1 });
        res.status(200).json(groups);
    } catch (error){
        res.status(404).json({ message: error.message});
    }
};

const getGroup = async (req, res) => {
    const { id } = req.params;

    try {
        const group = await CommunityModel.findById(id);

    res.status(200).json(group);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};


const createGroup = async (req,res) => {
    const {title , type , comments , description ,members , imageUrl} = req.body
    //add doc to db
    try{
        const group = await CommunityModel.create( {title , type , comments , description , members , imageUrl})
        res.status(200).json(group)
    }catch (error){
          res.status(400).json({message: error.message})
    }
}
const deleteGroup = async (req,res) => {
    const {id} = req.params
    try{
        const group = await CommunityModel.findByIdAndDelete(id)
        res.status(200).json(group)

    }
    catch(error){
        res.json({error: error.message})
    }
}


const countGroups = async (req,res) => {
    try{

        const count = await CommunityModel.count();
        res.status(200).json(count)

    }catch (error) {
        res.status(422).json(error);
    }
}

module.exports = { getGroups, getGroup,createGroup,deleteGroup , countGroups };