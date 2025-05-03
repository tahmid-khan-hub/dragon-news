import React from 'react';

const MarqueeNews = ({news}) => {
    console.log(news);
    return (
        <div>
            <p className='font-bold mr-11'>{news.title}.</p>
        </div>
    );
};

export default MarqueeNews;