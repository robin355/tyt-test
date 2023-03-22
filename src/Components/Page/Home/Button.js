import React from 'react';

const Button = () => {
    return (
        <div className='relative'>
            <div className='fixed bottom-10  right-0'>
                <div>
                    <button className='text-[#ffc000] p-4 rounded-[69px] shadow-lg'>Rumana</button>
                </div>
                <button className='text-[#ffc000] p-4 rounded-[69px] shadow-lg hover:bg-[#ffc000] hover:text-white'>TYT Vent</button>
            </div>
        </div>
    );
};

export default Button;