import mongoose from 'mongoose'
import PostModel from './models/index.js' 

export const findOne = async(req, res) => {
    try {
        const { id: _id } = req.params
        if(!mongoose.Types.ObjectId.isValid(_id)) {
           return res.status(422).json({ message: `Invalid id ${_id}`})  
        }
        const result = await PostModel.findById(_id)
        return res.status(200).json(result)      
    } catch (error) {
        return res.status(404).json({ message: error.message })          
    }
}


export const findAll = async(req, res) => {
    try {
        const result = await PostModel.find()
        return res.status(200).json(result)      
    } catch (error) {
        return res.status(404).json({ message: error.message })          
    }
}


export const create = async(req, res) => {
    try {
        const data = req.body
        console.log(data)
        const newRecord = new PostModel(data)
        const result = await newRecord.save()
        return res.status(201).json(result)      
    } catch (error) {
        return res.status(422).json({ message: error.message })          
    }
}


export const update = async(req, res) => {
    try {
        const data = req.body
        const { id: _id } = req.params
        if(!mongoose.Types.ObjectId.isValid(_id)) {
           return res.status(422).json({ message: `Invalid id ${_id}`})  
        }
        const result = await PostModel.findByIdAndUpdate(_id, data, { new: true })
        console.log(result)
        return res.status(204).json(result)      
    } catch (error) {
        return res.status(422).json({ message: error.message })          
    }
}


export const remove = async(req, res) => {
    try {
        const { id: _id } = req.params
        if(!mongoose.Types.ObjectId.isValid(_id)) {
           return res.status(422).json({ message: `Invalid id ${_id}`})  
        }
        const result = await PostModel.findByIdAndDelete(_id)
        console.log(result)
        return res.status(200).json({ _id })      
    } catch (error) {
        return res.status(422).json({ message: error.message })          
    }
}


export const like = async(req, res) => {
    try {
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) {
           return res.status(422).json({ message: `Invalid id ${id}`})  
        }
        
        const result = await PostModel.findByIdAndUpdate(id, { $inc: { likeCount: 1 }}, { new: true })
        if (!result) return res.status(404).json({ message: `Post not found. ${_id}`}) 
        return res.status(200).json(result)      
    } catch (error) {
        return res.status(422).json({ message: error.message })          
    }
}