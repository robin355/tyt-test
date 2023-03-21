import React from 'react';

const Look = () => {
    return (
        <div>
            <h1 className='text-center text-[#5f6368] text-3xl font-bold mt-[50px]'>What are you looking for?</h1>
            <div className='text-center flex justify-center items-center gap-5 mt-10'>
                <div>
                    <button className='outline outline-[#ffc000] px-6 py-2 rounded-lg text-[#ffc000] hover:bg-[#ffc000] hover:text-white font-bold'>I need a therapist</button>
                </div>
                <p>or,</p>
                <div>
                    <button className='outline outline-[#ffc000] px-6 py-2 rounded-lg bg-[#ffc000] text-white hover:bg-white hover:text-[#ffc000] font-bold'>I am a therapist</button>
                </div>
            </div>
        </div>
    );
};

export default Look;