import mongoose from "mongoose";

//with mongodb we can creates that differ from each other
//mongoose allows us to have uniformity, we are going to specify that are posts have to have these

//every single post will ahve these 
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String], //this is array of strings
  selectedFile: String,
  likeCount:{
      type:Number,
      default: 0
  },
  createAt: {
      type: Date,
      default: new Date()
  },
});

//now creating a model
//we can perform operations like create , find, delete on this model 
const postMessage = mongoose.model('PostMessage', postSchema);

export default postMessage;
