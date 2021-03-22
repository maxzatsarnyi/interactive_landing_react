import React from 'react';
import Navbar from '../../components/shared/Navbar/index';
import PromoSection from '../../components/sections/Promo/index';
import ClockSection from '../../components/sections/Clock/index';
import Calculator from '../../components/sections/Calculator/index';
import Earpods from '../../components/sections/Earpods/index';
import Notebook from '../../components/sections/Notebook';
import Works from '../../components/sections/Works/index';
import Pin from '../../components/sections/Pin/index';

const Home = () => {
    return (
        <>
            {/* <Navbar /> */}
            {/* <PromoSection /> */}
            {/* <ClockSection /> */}
            {/* <Calculator /> */}
            {/* <Earpods /> */}
            {/* <Notebook /> */}
            <Works />
            <Pin />
        </>
    )
}

export default Home;
