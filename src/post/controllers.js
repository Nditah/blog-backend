import PostModel from './models/index.js' 

export const findOne = async(req, res) => {
    try {
        const { id } = req.params
        const result = await PostModel.find({ _id: id })
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
        const newRecord = new PostModel(data)
        const result = await newRecord.save()
        return res.status(200).json(result)      
    } catch (error) {
        return res.status(422).json({ message: error.message })          
    }
}


export const update = async(req, res) => {
    try {
        const data = req.body
        const { id } = req.params
        const result = await PostModel.updateOne({ _id: id }, data)
        return res.status(200).json(result)      
    } catch (error) {
        return res.status(422).json({ message: error.message })          
    }
}


export const remove = async(req, res) => {
    try {
        const data = req.body
        const { id } = req.params
        const result = await PostModel.updateOne({ _id: id }, data)
        return res.status(200).json(result)      
    } catch (error) {
        return res.status(422).json({ message: error.message })          
    }
}
