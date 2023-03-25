import React from 'react';
import { AiOutlineTeam, AiOutlineUserAdd } from 'react-icons/ai';
import { IoIosArrowUp } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Navbar = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.bottom = "0";

        } else {
            document.getElementById("navbar").style.bottom = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }
    return (
        <div>
            <div id="navbar" className='flex  justify-center gap-10 fixed bottom-0 bg-base-100 right-0 left-0'>
                <Link to='/therapist'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-[#ffc000]'> <AiOutlineTeam></AiOutlineTeam></p>
                        <small className='text-[#ffc000]'>Therapists</small>
                    </div>
                </Link>

                <Link to='/login'>
                    <div className='flex flex-col items-center justidy-center'>
                        <p className='text-[#ffc000]'> <BiLogIn></BiLogIn></p>
                        <small className='text-[#ffc000]'>Login</small>
                    </div>
                </Link>
                <Link to='/signup'>
                    <div className='flex flex-col items-center justidy-center'>
                        <p className='text-[#ffc000]'> <AiOutlineUserAdd></AiOutlineUserAdd></p>
                        <small className='text-[#ffc000]'>Signup</small>
                    </div>
                </Link>
                <div className='flex  flex-col items-center justidy-center'>
                    <p className='text-[#ffc000]'> <IoIosArrowUp></IoIosArrowUp></p>
                    <small className='text-[#ffc000]'>Full Menu</small>
                </div>

            </div>
        </div >
    );
};

export default Navbar;