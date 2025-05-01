import React from 'react';
import swimmingImage from "../../assets/swimming.png"
import playGround from "../../assets/playground.png"
import classImage from "../../assets/class.png"

const QueueZone = () => {
    return (
        <div className='bg-base-300 p-3 my-5'>
            <h2 className='font-bold mb-4'>QZone</h2>
            <div className='space-y-5'>
                <img src={swimmingImage} alt="" />
                <img src={playGround} alt="" />
                <img src={classImage} alt="" />
            </div>
        </div>
    );
};

export default QueueZone;