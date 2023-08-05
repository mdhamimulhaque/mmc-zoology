import React, { useState } from 'react';
import SingleRowSlider from '../components/Sliders/SingleRowSlider';
import { donarData, teachers } from '../constData/donarData';
import AboutProfileCard from '../components/cards/AboutProfileCard';
import TeachersCard from '../components/cards/TeachersCard';

const AboutUS = () => {
    const [data,setData] = useState(donarData);
    const [teachersData,setTeachersData] = useState(teachers);
    return (
        <div>
<div className='flex flex-wrap'>
        <section className='filter_area w-full xl:w-1/2'>
        <SingleRowSlider/>
        </section>

        <section className='content_area xl:w-1/2'>
            <h2 className="text-red-600 text-3xl font-bold text-center mt-8">Department of Zoology</h2>
            <h4 className="text-red-600 text-xl font-bold my-2 text-center">Government Michael Madhusudan College, Jashore</h4>
        <p className='text-2xl lg:text-base mb-5 px-4 text-justify'>A cordial gesture from the Department of Zoology, Government Michael Madhusudan College, Jashore. Blood is a very important ingredient in surgery. someone can live another life in your blood. Blood donation is the process of voluntary donation of blood by a healthy adult. This donated blood is transfused or turned into medicine through fractionation. Most blood donors in developed countries are voluntary blood donors, who donate blood out of social responsibility. Living in a developing country like Bangladesh, we should also have at least 2 a year donate blood. Blood donation is very beneficial for health. As soon as blood is donated, the 'bone marrow' in the body is stimulated to produce new blood cells and within 2 weeks of blood donation, new blood cells are born to compensate for the deficiency. Donating blood 3 times a year increases the vitality of red blood cells in your body as well as increases the rate of new blood cell production. Note that within 48 hours of donating blood, the amount of blood in the body becomes normal. Regular blood donation reduces the risk of heart disease and heart attack. Other Studies show that people who donate blood twice a year have a lower risk of developing cancer than others. In particular, the risk of lung, liver, colon, stomach and throat cancer has been observed to be much lower in regular blood donors. The study was conducted on 1,200 people over four years. Through regular voluntary blood donation, it is known free of cost if there is any major disease in one's body. Eg: Hepatitis-B, Hepatitis-C, Syphilis, HIV (AIDS) etc. per pint (one-eighth of a gallon) Donating blood consumes 650 calories of energy. That is, it can play an essential role in weight loss. This is a small initiative of the Zoology Department of Govt Michael Madhusudan College 2018-19 session.</p>
        </section>
    </div>

    

   <div>
   <h2 className="text-red-600 mb-2 font-bold text-3xl text-center">Honourable Teachers</h2>
   <section className="students flex justify-center flex-wrap mb-2">     
            {
                teachersData.map(tData=><TeachersCard key={tData.s_no} tData={tData}/>)
            }
        </section>
        

   <h2 className="text-red-600 mb-2 font-bold text-3xl text-center">All Students</h2>
   <section className="students flex justify-center flex-wrap mb-2">     
            {
                data.map(donarData=><AboutProfileCard key={donarData.registration} donarData={donarData}/>)
            }
        </section>
   </div>
        </div>
        
    );
};

export default AboutUS;