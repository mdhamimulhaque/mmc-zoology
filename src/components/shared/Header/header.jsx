import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";




const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            id: 1,
            path: "/",
            name: "Home"
        },
        {
            id: 2,
            path: "/need-blood",
            name: "Need Blood"
        },
        {
            id: 3,
            path: "/about-us",
            name: "About Us"
        },
        {
            id: 4,
            path: "/contact",
            name: "Contact"
        }
    ]
    return (
        <header className="w-full border-b-[1px] bg-red-600">
            <section className='logo_area flex justify-between py-4 pl-0 lg:py-10 lg:gap-8 xl:gap-16'>
                <Link to='/' className='pl-10 font-bold text-3xl text-white'>
                    MMCZ Blood Bank
                </Link>
                <button className='lg:hidden active:outline-none pr-2 sm:pr-10'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <IoMenu className="text-3xl text-white" />
                </button>
                <nav className="hidden lg:flex flex-wrap items-center font-DMSans font-medium">
                    {
                        navItems.map(navItem =>
                            <Link key={navItem.id} to={navItem.path}
                                className='lg:mr-3 xl:mr-12 text-white text-xl hover:text-yellow-400 transition-all ease-in-out duration-300'>
                                {navItem.name}
                            </Link>)
                    }
                </nav>
            </section>


            {/* responsive navbar */}
            <div className={`h-screen bg-red-600  flex flex-col py-4 px-4 fixed top-0  lg:hidden bg-primary text-base z-50 uppercase text-center font-semibold transition-all duration-500 } ${isOpen ? "w-full left-0" : "w-0 left-[999px]"}`}>
                <button
                    className="absolute right-6 top-6 z-10 lg:hidden rounded-md active:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <IoClose className="text-white text-3xl" />
                </button>
                <div className='flex flex-col justify-center items-center gap-10 mt-10 text-white'>
                    <Link to='/' className='text-2xl font-bold'>       
                      MMCZ Blood Bank
                    </Link>
                    {
                        navItems.map(navItem => <Link key={navItem.id} to={navItem.path} className='text-xl hover:text-yellow-400 transition-all ease-in-out duration-300'>{navItem.name}</Link>)
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;