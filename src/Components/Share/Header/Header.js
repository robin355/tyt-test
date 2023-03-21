import React from 'react';

const Header = () => {
    return (
        <div className=" flex justify-between p-6">
            <div>
                <img className='w-[200px]' src="https://images.theyellowtherapist.com/logos/new_tyt_logo_kinda_yellow.png" alt="" />
                <small className='text-[#ffc000] text-sm'>Because yellow is the happiest color.</small>
            </div>
            <div>
                <p className='text-sm'>User Gust</p>
                <p className='text-sm'>User Gust</p>
                <p className='text-sm'>Guest User</p>
            </div>
        </div>
    );
};

export default Header;