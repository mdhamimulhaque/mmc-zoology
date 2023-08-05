import React from 'react';

const ProfileCard = ({donarData}) => {
    const {name,age,phone,registration,session,blood_group,img} = donarData;
    return (
        <div className="w-full max-w-xs overflow-hidden bg-slate-200 rounded-lg shadow-lg dark:bg-gray-800">
   <div className='flex justify-center pt-5'>
   <img className="object-cover w-36 h-36 rounded-full" src={img} alt="avatar"/>
   </div>

    <div className="py-5">
        <div className="info_box p-3">
        <p className="block text-3xl text-center font-bold text-gray-800 dark:text-white mb-2">
       <span className='text-red-600'>{blood_group}</span>
            </p>
        <p className="text-base text-gray-700 dark:text-gray-200 mb-2">
        <span className='font-bold'>Name :</span> {name}
            </p>
        <p className="text-base text-gray-700 dark:text-gray-200 mb-2">
            <span className='font-bold'>Reg No :</span> {registration}
        </p>
        <p className="text-base text-gray-700 dark:text-gray-200 mb-2">
            <span className='font-bold'>Session :</span> {session}
        </p>
        <p className="text-base text-gray-700 dark:text-gray-200 mb-2">
            <span className='font-bold'>Phone :</span> {phone}
        </p>
        <p className="text-base text-gray-700 dark:text-gray-200 mb-2">
            <span className='font-bold'>Age :</span> {age}
        </p>
        </div>
        
    </div>
</div>
    );
};

export default ProfileCard;