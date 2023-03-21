import React from 'react';

const Stress = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1'>

                <div className='flex flex-col justify-center items-start '>
                    <h1 className='lg:ml-[100px]  text-[#ffc000] text-3xl font-bold mb-4'>those who need help...</h1>
                    <p className='lg:ml-[100px] text-[#5f6368] text-sm'>Something ails? Hey, seeking help is the most humane thing we can do. It's not always easy on our own. This is the place where you get the proper help you need.</p>
                </div>
                <div className='flex justify-start items-start'>

                    <img className='w-[400px]' src="https://www.resmed.co.in/hs-fs/hubfs/stress-concept-illustration%20(1).png?width=600&name=stress-concept-illustration%20(1).png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Stress;