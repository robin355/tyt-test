import React from 'react';

const Provide = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1 mt-10 gap-5 '>
                <div className='flex justify-end items-center'>
                    <img className='w-[400px]' src="https://img.freepik.com/premium-vector/sad-man-sitting-chair-talking-female-psychologist-visit-psychiatrist-depression-treatment-illustration_277904-2924.jpg?w=740" alt="" />
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <h1 className='text-[#ffc000] text-3xl font-bold mb-4'>and those who can provide.</h1>
                    <p className='lg:mr-[100px] text-[#5f6368] text-sm'>Are you a professional therapist? We're providing a structured platform to reach out to those who need your help. An independant platform to work on your own schedule and demand.</p>
                </div>
            </div>
        </div>
    );
};

export default Provide;