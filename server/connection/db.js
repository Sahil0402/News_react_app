import mongoose from 'mongoose';
const Connection = async() =>{
    
    try {
        const URL = `mongodb://user:sahil@clone-inshort-shard-00-00.dh37v.mongodb.net:27017,clone-inshort-shard-00-01.dh37v.mongodb.net:27017,clone-inshort-shard-00-02.dh37v.mongodb.net:27017/INSHORTS-CLONE?ssl=true&replicaSet=atlas-127pjz-shard-0&authSource=admin&retryWrites=true&w=majority`;
        mongoose.connect(URL, {useNewUrlParser:true});
        console.log("Database is connected successfully");
    } catch (error) {
        console.log(error);
    }

}

export default Connection;