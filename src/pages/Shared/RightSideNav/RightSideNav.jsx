import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className='mb-6 p-4 border'>
                <h2 className="text-3xl p-4 mt-2 mb-1">Login With</h2>
                <div className='text-center space-y-2'>
                    <button className="btn btn-outline w-full">
                        <FaGoogle></FaGoogle>
                        Login with Google
                    </button>
                    <button className="btn btn-outline w-full">
                        <FaGithub></FaGithub>
                        Login with Github
                    </button>
                </div>
            </div>
            <div className='mb-6 p-4'>
                <h2 className="text-3xl p-4 mt-2 mb-1">Find Us On</h2>
                <a className='p-4 flex items-center text-lg border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex items-center text-lg border rounded-t-lg' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex items-center text-lg border rounded-t-lg' href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            {/* q-zone */}
           <div className='bg-gray-100'>
           <div className='mb-6 p-4 border'>
                <h2 className="text-3xl p-4 mt-2 mb-1 text-gray-500 font-bold">Q-Zone</h2>
                <div className='text-center space-y-2'>
                   <img src={qzone1} alt="" />
                </div>
            </div>
            <div className='mb-6 p-4 border'>
                <h2 className="text-3xl p-4 mt-2 mb-1"></h2>
                <div className='text-center space-y-2'>
                   <img src={qzone2} alt="" />
                </div>
            </div>
            <div className='mb-6 p-4 border'>
                <h2 className="text-3xl p-4 mt-2 mb-1"></h2>
                <div className='text-center space-y-2'>
                   <img src={qzone3} alt="" />
                </div>
            </div>
           </div>
        </div>
    );
};

export default RightSideNav;