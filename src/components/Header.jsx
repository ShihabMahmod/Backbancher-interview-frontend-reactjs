import React from "react";

function Header()
{
    return(
        <>
           <header className="bg-white shadow-md fixed w-full ">
                <nav className="mx-auto p-7 flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <img src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.f3d0d1c4.png&w=256&q=75" alt="" />
                    </div>
                    <ul className="hidden md:flex space-x-28">
                    <li><a href="#home" className="text-gray-700 hover:text-blue-500">Home</a></li>
                    <li><a href="#about" className="text-gray-700 hover:text-blue-500">About</a></li>
                    <li><a href="#services" className="text-gray-700 hover:text-blue-500">Services</a></li>
                    <li><a href="#pages" className="text-gray-700 hover:text-blue-500">Pages</a></li>
                    <li><a href="#portfolio" className="text-gray-700 hover:text-blue-500">Portfolio</a></li>
                    <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
                    </ul>
                    <div className="text-2xl font-bold">
                        <img src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.f3d0d1c4.png&w=256&q=75" alt="" />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;