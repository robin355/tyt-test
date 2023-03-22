import React from 'react';
import Footer from '../../Share/Footer/Footer';
import About from './About';
import Button from './Button';
import HomeBanner from './HomeBanner';
import Look from './Look/Look';
import Payment from './Payment';
import Provide from './Provide';
import Question from './Question';
import Stress from './Stress';
import Support from './Support/Support';


const Home = () => {
    return (

        <div>
            <div className='p-6'>
                <HomeBanner></HomeBanner>
                <Look></Look>
                <Support></Support>
                <Stress></Stress>
                <Provide></Provide>
                <Payment></Payment>
                <About></About>
                <Question></Question>

            </div>
            <Button></Button>
            <Footer></Footer>
        </div>
    );
};

export default Home;