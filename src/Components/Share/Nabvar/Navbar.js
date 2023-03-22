import React from 'react';
import { AiOutlineTeam, AiOutlineUserAdd } from 'react-icons/ai';
import { IoIosArrowUp } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
const Navbar = () => {
    return (
        <div className='bg-base-200'>
            <div className='grid grid-cols-4 w-4/5 m-auto fixed bottom-0 bg-base-100 right-0 left-0'>
                <div className='flex flex-col items-center justidy-center'>
                    <p className='text-[#ffc000]'> <AiOutlineTeam></AiOutlineTeam></p>
                    <small className='text-[#ffc000]'>Therapists</small>
                </div>
                <div className='flex flex-col items-center justidy-center'>
                    <p className='text-[#ffc000]'> <BiLogIn></BiLogIn></p>

                    <small className='text-[#ffc000]'>Login</small>
                </div>
                <div className='flex flex-col items-center justidy-center'>
                    <p className='text-[#ffc000]'> <AiOutlineUserAdd></AiOutlineUserAdd></p>

                    <small className='text-[#ffc000]'>Signup</small>
                </div>
                <div className='flex flex-col items-center justidy-center'>
                    <p className='text-[#ffc000]'> <IoIosArrowUp></IoIosArrowUp></p>

                    <small className='text-[#ffc000]'>Full Menu</small>
                </div>
            </div>
        </div>
    );
};

export default Navbar;