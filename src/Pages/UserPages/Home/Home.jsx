import React, { useEffect } from 'react';

import Request from './Request/Request';
import HowItWork from './HowItWork/HowItWork';
// import Banner2 from './Banner2/Banner2';
// import NewBanner from './newBanner/newBanner'
import NewBanner from "./newBanner/NewBanner.jsx"

import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Tutors from './Tutors/Tutors';
import Stats from './Stats/Stats';
import Faq from './Faq/Faq';
import axios from 'axios';
import instance from '../../../config/axios.config.js';


const Home = () => {

    useEffect(()=>{
        instance.get('/api/users')
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.error("error fetching data",error)
        })
    },[])



    return (
        <div>
            <NewBanner></NewBanner>
            <Request></Request>
            <HowItWork></HowItWork>

            <div className='lg:px-[100px] px-2'>
                <Services></Services>
                <Testimonials></Testimonials>
                <Faq></Faq>

                <Tutors></Tutors>
                <Stats></Stats>
            </div>

        </div>
    );
};

export default Home;