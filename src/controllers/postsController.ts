import {Request, Response} from "express";
import {Post} from "../models/Post";

export const getAllPosts = async (res: Response) => {
    try {
        const posts = await Post.find().sort({createdAt: -1});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: "Cannot get posts", error});
    }
};

export const getPostById = async (req: Request, res: Response) => {
    try {
        const post = await Post.findOne({id: req.params.id});
        if (!post) {
            return res.status(404).json({message: "Post not found"});
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({message: "Cannot get post", error});
    }
};
