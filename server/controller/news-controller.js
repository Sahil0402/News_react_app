
import News from '../modal/news.js';


export const getNews = async(request, response) =>{
    try {
        const size= Number(request.query.size);
        const skip = Number(request.query.page);

        let data = await News.find({}).limit(size).skip(size*skip);  //count 5, skip =0

        //5*0 = 0
        //5*1 = 5 
        
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json(error);
    }
}