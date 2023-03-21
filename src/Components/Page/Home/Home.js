import React from 'react';
import About from './About';
import HomeBanner from './HomeBanner';
import Look from './Look/Look';
import Payment from './Payment';
import Provide from './Provide';
import Stress from './Stress';
import Support from './Support/Support';


const Home = () => {
    return (
        <div className='p-6'>
            <HomeBanner></HomeBanner>
            <Look></Look>
            <Support></Support>
            <Stress></Stress>
            <Provide></Provide>
            <Payment></Payment>
            <About></About>
        </div>
    );
};

export default Home;