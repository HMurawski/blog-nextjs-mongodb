import mongoose from "mongoose";
import  { Schema, model, models } from mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"]
    },
    
        subheading: {
            type: String,
            required: [true, "Please provide a subheading"]
        },

        tag: {
            type: String,
            required: [true, "Please provide a tag"]
        },
        img: {
            type: String,
            required: [true, "Please provide an image"]
        },
        content: {
            type: Array,
            required: [true, "Please provide content"]
        },
        date: {
            type: Date,
            default: Date.now,
        },
        Number: {
            type: Number,
            default: Math.floor(Math.random() * 1000),
        },
        author: {
            type: String,
            require: [true, "Please provide an author"]
        },
        authorImg: {
            type: String,
            require: [true, "Please provide  author img"]
        }
        

    

  

})
