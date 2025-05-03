import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useParams } from 'react-router';
import MarqueeNews from './MarqueeNews';

const LatestNews = ({data}) => {
    const {id} = useParams();
    // console.log(data, id);

    const [marquee, setMarquee] = useState([]);

    useEffect(()=>{

        const breakingNews = data.filter(news => news.others.is_today_pick == true);
        setMarquee(breakingNews);

    },[data, id])
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>latest</p>
            <Marquee className='flex gap-3 ' pauseOnHover={true} speed={50}>
                {/* <p className='font-bold mr-3'>One of the most asked questions is that who is the real GOAT - Messi or Ronaldo?? Let me know... </p> */}
                {
                    marquee.map((news, index) => <MarqueeNews key={index} news={news}></MarqueeNews>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;