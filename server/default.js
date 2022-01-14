// import { data } from "./constants/data.js";
import News from "./modal/news.js";
import fetch from "node-fetch";
const DefaultData = async() =>{
    try {
        // let data = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=45b1800ff6024b4fbe87c7a126018faf');
        // let j = await data.json();
        // console.log(j.articles);

        await News.deleteMany({});
        let array = ["business", "sports", "", "national", "world", "politics", "technology", "startup", "science", "miscellaneous"];
        let choice = Math.floor((Math.random() * 9) + 1);
        let data = await fetch(`https://inshortsapi.vercel.app/news?category=${array[choice]}`);
        let j = await data.json();
        
        await News.deleteMany({});
        await News.insertMany(j.data);//use data instead of j if error occurs
        console.log("Data imported successfully");
    } catch (error) {
        console.log('Error in : ', error.message);
    }
}
export default DefaultData;