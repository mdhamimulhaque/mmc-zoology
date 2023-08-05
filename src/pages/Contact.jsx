import React from 'react';
import Img1 from '../assets/img/fly.jpg'

const Contact = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center flex-col">
              <h2 className="text-red-600 font-bold text-4xl my-3 uppercase text-center px-2">Contact on departmental group</h2>
            <img className="object-cover w-full lg:w-1/2" src={Img1} alt=""/>
        </div>
    );
};

export default Contact;