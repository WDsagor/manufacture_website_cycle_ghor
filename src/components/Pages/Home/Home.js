import React from 'react';
import Footer from '../../share/Footer';
import Accessories from './Accessories';
import BusinessSummery from './BusinessSummery';
import Carosuel from './Carosuel';

const Home = () => {
    return (
        <div className='mt-14'>
           <Carosuel></Carosuel>
           <Accessories></Accessories>
           <BusinessSummery></BusinessSummery>
           <Footer></Footer>
        </div>
    );
};

export default Home;