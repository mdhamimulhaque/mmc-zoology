import React from 'react';
import IMG2 from '../assets/img/1.jpg';
import IMG1 from '../assets/img/c1.jpeg';

const Home = () => {
    return (
        <main className='lg:flex justify-between'>
           <section className='lg:flex-1'>
              <div className="blood_info_img flex justify-center lg:none">
                <img className='object-cover w-full md:w-1/2 lg:w-full' src={IMG2} alt="" />
              </div>
           </section>
           <section className='lg:flex-1 mt-5 lg:mt-20 px-5 lg:px-5 text-justify'>
           <h2 className="text-red-600 text-4xl font-bold text-center mb-2">Department of Zoology</h2>
            <h4 className="text-red-600 text-xl font-bold my-2 text-center">Government Michael Madhusudan College, Jashore</h4>
            <p>A cordial gesture from the Department of Zoology, Government Michael Madhusudan College, Jashore. Blood is a very important ingredient in surgery. someone can live another life in your blood. Blood donation is the process of voluntary donation of blood by a healthy adult. This donated blood is transfused or turned into medicine through fractionation. Most blood donors in developed countries are voluntary blood donors, who donate blood out of social responsibility. Living in a developing country like Bangladesh, we should also have at least 2 a year donate blood. Blood donation is very beneficial for health. As soon as blood is donated, the 'bone marrow' in the body is stimulated to produce new blood cells and within 2 weeks of blood donation, new blood cells are born to compensate for the deficiency. Donating blood 3 times a year increases the vitality of red blood cells in your body as well as increases the rate of new blood cell production. Note that within 48 hours of donating blood, the amount of blood in the body becomes normal. Regular blood donation reduces the risk of heart disease and heart attack. Other Studies show that people who donate blood twice a year have a lower risk of developing cancer than others. In particular, the risk of lung, liver, colon, stomach and throat cancer has been observed to be much lower in regular blood donors. The study was conducted on 1,200 people over four years. Through regular voluntary blood donation, it is known free of cost if there is any major disease in one's body. Eg: Hepatitis-B, Hepatitis-C, Syphilis, HIV (AIDS) etc. per pint (one-eighth of a gallon) Donating blood consumes 650 calories of energy. That is, it can play an essential role in weight loss. This is a small initiative of the Zoology Department of Govt Michael Madhusudan College 2018-19 session.</p>

            <img src={IMG1} className="object-cover w-full md:w-full my-2" alt="" />
           </section>
        </main>
    );
};

export default Home;