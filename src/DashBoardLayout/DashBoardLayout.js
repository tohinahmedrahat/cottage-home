import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import useAdmin from '../Components/Hooks/UseAdmin';
import { AuthContext } from '../Components/Pages/Context/AuthProvider';
import NavBar from '../Components/Pages/NavBar/NavBar';
import Footer from '../Components/Shared/Footer/Footer';





const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side bg-[#EBF8F9] rounded-md shadow-lg">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content mt-16 ">
                        
                    <li className='text-primary'><Link to='/dashboard'>All  Messages </Link></li>


                        
                        {
                            isAdmin && 
                            <>
                                <li className='text-primary'><Link to='/dashboard/cdpap'>All CDPAP Messages </Link></li>
                                <li className='text-primary'><Link to='/dashboard/pca'>All PCA Messages</Link></li>
                       
                               
                            </>

                        }
                    </ul>

                </div>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default DashBoardLayout;