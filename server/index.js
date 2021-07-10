import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; 
import dotenv from 'dotenv'
import router from './routes/posts.js'



const app = express();
dotenv.config()
//setting up body parser to populate sender request
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use(cors());
app.use('/posts', router)

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running at port ${PORT}`)))
.catch((error) => console.log(error.message));


//to make sure we dont get warnings in console
mongoose.set('useFindAndModify', false);
