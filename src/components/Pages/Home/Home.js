import React from 'react';
import Footer from '../../share/Footer';
import Accessories from './Accessories';
import BusinessSummery from './BusinessSummery';
import Carosuel from './Carosuel';
import Colaborate from './Colaborate';
import WantMore from './WantMore';

const Home = () => {
    return (
        <div className='mt-14'>
           <Carosuel></Carosuel>
           <Accessories></Accessories>
           <Colaborate></Colaborate>
           <BusinessSummery></BusinessSummery>
           <WantMore></WantMore>
           <Footer></Footer>
        </div>
    );
};

export default Home;