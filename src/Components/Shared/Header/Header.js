import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { Link } from 'react-router-dom';


const Header = () => {
    const [open, setOpen] = useState(false)
    console.log(open)
    return (
        <div>
            <div className='flex justify-between md:px-10 p-5'>
                <img className='h-20' src="https://preferredhcny.com/wp-content/uploads/2022/09/Preferred-newlogo.png" alt="" />

                <div className='md:block hidden'>
                    <ul className='flex justify-center gap-5 items-center'>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className=" m-1">About</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded w-52">
                                <li><Link to='#'>Who we are </Link></li>
                                <li><Link to='#'>Service Area</Link></li>
                                <li><Link to='#'>Leadership</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className=" m-1">Services</label>
                            <div tabIndex={0} className="dropdown-content menu shadow  rounded w-[52rem] -left-60 top-5 bg-teal-400  p-20">
                                <div className='flex justify-between  px-10'>
                                    <div className='text-white'>
                                        <h3 className='text-white text-xl mb-10'>How we Help</h3>
                                        <Link className='mt-3 block ' to=''>Daily Tasks</Link>
                                        <Link className='mt-3 block ' to=''>Stroke</Link>
                                        <Link className='mt-3 block ' to=''>Diabaties</Link>
                                        <Link className='mt-3 block ' to=''>Alzheimer’s</Link>
                                        <Link className='mt-3 block ' to=''>Slips and Falls</Link>
                                        <Link className='mt-3 block ' to=''>Cancer Recovery</Link>
                                        <Link className='mt-3 block ' to=''>Parkinson’s</Link>
                                    </div>
                                    <div className='text-white'>
                                        <h3 className='text-white text-xl mb-10'>How we Help</h3>
                                        <Link className='mt-3 block' to=''>In Home Aides</Link>
                                        <Link className='mt-3 block' to=''>CDPAP by Preferred</Link>
                                        <Link className='mt-3 block' to=''>Nursing & Specialty Care</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className=" m-1">Start Hare</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded w-52">
                                <li><Link to='#'>What is home health care?</Link></li>
                                <li><Link to='#'>Short Term Care</Link></li>
                                <li><Link to='#'>Long Term Care</Link></li>
                                <li><Link to='#'>FAQ’s</Link></li>
                            </ul>
                        </div>
                        <li><Link to='#'>Paying for Home Care</Link></li>
                        <li><Link to='#'>Why Us</Link></li>
                        <li><Link to='#'>Contact</Link></li>
                        <li><Link className='btn bg-teal-500 border-0 rounded-3xl text-white font-semibold' to='#'>Get Home care</Link></li>

                    </ul>
                </div>
                <div className='md:hidden block p-3' onClick={()=>setOpen(!open)}>
                    <MdMenu className='text-2xl' />
                    {/* <MdClose className='text-2xl' /> */}
                </div>
            </div>
            <div className='md:hidden block'>
            <div className={`md:flex justify-end absolute p-5 md:static w-full duration-500 ease-in bg-teal-400 ${open ? 'left-0': 'left-[-154320px]'}`}>
                <ul className=''>
                    <li><Link className='flex justify-start items-center text-xl mt-2' to='#'>About <MdExpandMore className='text-xl' /></Link></li>
                    <div>
                        
                    </div>
                    <li><Link className='flex justify-start items-center text-xl mt-2' to='#'>Services <MdExpandMore className='text-xl' /></Link></li>
                    <li><Link className='flex justify-start items-center text-xl mt-2' to='#'>Start Hare <MdExpandMore className='text-xl' /></Link></li>
                    <li><Link className='flex justify-start items-center text-xl mt-2' to='#'>Paying for Home Care</Link></li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Header;


// How we Help
// Daily Tasks
// Stroke
// Diabetes
// Alzheimer’s
// Slips and Falls
// Cancer Recovery
// Parkinson’s