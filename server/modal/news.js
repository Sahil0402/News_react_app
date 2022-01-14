import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    // timestamp:{
    //     type:String,
    //     required:true
    // },
    date:{
        type:String,
        required:true
    },
    readMoreUrl:{
        type:String,
        required:true
    }
    // read_more:{
    //     type:String,
    //     required:true
    // }
})

const news = mongoose.model('news', newsSchema);
export default news;
