import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>latest</p>
            <Marquee className='flex gap-3 ' pauseOnHover={true} speed={50}>
                <p className='font-bold mr-3'>Morrocoo beat portugal </p>
                <p className='font-bold'>Messi is a robber not </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;