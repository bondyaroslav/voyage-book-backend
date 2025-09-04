import mongoose, {Document, Schema} from "mongoose";

export interface IPost extends Document {
    id: string
    title: string
    description: string
    imageUrl: string
    country: string
    price: number
    rating: number
}

const PostSchema = new Schema<IPost>(
    {
        id: {type: String, required: true, unique: true},
        title: {type: String, required: true},
        description: {type: String, required: true},
        imageUrl: {type: String, required: true},
        country: {type: String, required: true},
        price: {type: Number, required: true},
        rating: {type: Number, required: true, min: 0, max: 5}
    },
    {timestamps: true}
)

export const Post = mongoose.model<IPost>('Post', PostSchema)