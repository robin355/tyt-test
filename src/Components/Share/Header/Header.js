import React, { useEffect, useState } from 'react';

const Header = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className=''>
            <div className="flex justify-between p-6 fixed top-0 bg-base-100 right-0 left-0">
                <div>
                    <img className='w-[200px]' src="https://images.theyellowtherapist.com/logos/new_tyt_logo_kinda_yellow.png" alt="" />
                    <small className='text-[#ffc000] text-sm'>Because yellow is the happiest color.</small>
                </div>
                <div>
                    <p className='text-sm'> {date.toLocaleTimeString()}</p>
                    <p className='text-sm'>{date.toLocaleDateString()}</p>
                    <p className='text-sm'>Guest User</p>
                </div>
            </div>
        </div>
    );
};

export default Header;