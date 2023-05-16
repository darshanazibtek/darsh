import postMessage from '../Models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const message = await postMessage.find();
        console.log(postMessage);
        res.status(200).json(postMessage);
    }
    catch {
        res.status(404).json({message: error.message})
    }
}

export const createPosts = (req, res) => {
    const post = req.body;
    
    const newPost = new postMessage(post);
     
    try {
        await newPost.save();
        res.status(201).json(post);
    }
    catch {
        res.status(409).json({message: error.message})
    }
}