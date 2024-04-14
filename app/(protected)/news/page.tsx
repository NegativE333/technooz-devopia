import React from 'react'

const page = async() => {

    const url = 'https://real-time-finance-data.p.rapidapi.com/stock-news?symbol=AAPL%3ANASDAQ&language=en';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2b3b7a0541mshe56291261b4c801p1c4afdjsndbd344406230',
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
        }
    };
    let newsData
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parsing the JSON response
         newsData = result.data.news; // Accessing the news array
        // console.log(newsData);
    } catch (error) {
        console.error(error);
    }

  return (
    <div className='lg:px-8 grid lg:grid-cols-2 grid-cols-1'>
     {newsData.map((article: any, index: number) => {
    return (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center gap-2 lg:flex-row lg:items-start lg:text-start border m-3 border-gray-400">
        <img src={article.article_photo_url} alt={article.article_title} className="w-32 h-32 object-cover rounded-md mr-4" />
        <div>
            <h2 className="text-xl font-bold mb-2">{article.article_title}</h2>
            <p className="text-sm text-gray-600 mb-2">{article.source}</p>
            <p className="text-sm text-gray-500 mb-4">{article.post_time_utc}</p>
            <a href={article.article_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 inline-block">Read More</a>
        </div>
    </div>
    
    );
})}

    </div>
  )
}

export default page