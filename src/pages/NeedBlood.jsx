import React, { useState } from 'react';
import CommonButton from '../components/Buttons/CommonButton';
import ProfileCard from '../components/cards/ProfileCard';
import { donarData } from '../constData/donarData';

const NeedBlood = () => {
    const bloodGroups=['A+','A-','B+','B-','AB+','AB-','O+','O-'];
    const [data,setData] = useState(donarData);
    const [filterData,setFilterData] = useState('');
    const [selectedGroup,setSelectedGroup] = useState('');

    const getSelectedData =(event)=>{
        setSelectedGroup(event)
        const filterData = data.filter(fData=>fData.blood_group === event)
        setFilterData(filterData)
    }
  
  

    

  
    return (
        <div className='lg:flex min-h-screen'>
            <section className='filter_area lg:w-1/5 p-2 bg-slate-100'>
                <h2 className='text-red-600 text-2xl mt-10 font-bold text-center'>Find your Blood Groups</h2>
             <div className='flex justify-center flex-wrap gap-4 py-4 lg:py-10'>
               {
               bloodGroups.map((bGroup,index)=><CommonButton key={index} bGroup={bGroup} getSelectedData={getSelectedData}/>)
                }
             </div>
            </section>

            <section className='content_area p-5 w-full'>
            <h2 className='text-red-600 text-2xl lg:text-5xl my-5 font-bold text-center'>{selectedGroup?.length ? `(${selectedGroup}) Blood Group's Member ` : "Please,select a Blood Group that you need"}</h2>
              <article className='flex justify-center flex-wrap gap-5'>  
              {
                filterData?.length ?
                filterData?.map(donar=> <ProfileCard key={donar?.registration} donarData={donar}/>)
                : "No Member Found"              
              }                
              </article>
            </section>
        </div>
    );
};

export default NeedBlood;