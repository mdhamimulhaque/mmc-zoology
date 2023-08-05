import React from 'react';

const TeachersCard = ({tData}) => {
    return (
        <div className="card w-96 bg-red-100 shadow-xl hover:shadow m-2 p-3" >
        <div className="flex justify-center">
        <img className="w-32 h-32 rounded-full border-8 border-red-400 object-cover" src={tData.img} alt=""/>
        </div>
        <div className="text-center mt-2 text-xl font-medium">{tData.name}</div>
        <div className="text-center mt-2 text-xl font-base">{tData.rank}</div>
   </div>
    );
};

export default TeachersCard;