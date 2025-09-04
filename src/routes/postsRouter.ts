import express from "express";
import {getAllPosts, getPostById} from "../controllers/postsController";

export const postsRouter = express.Router();

postsRouter.get('/posts', getAllPosts)
postsRouter.get('/posts/:id', getPostById)
