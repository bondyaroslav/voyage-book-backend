import express from "express";
import cors from "cors";
import {postsRouter} from "./routes/postsRouter";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", postsRouter)

export default app;
