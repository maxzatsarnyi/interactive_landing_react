import React, {useState} from 'react';
import Navbar from '../../components/shared/Navbar/index';
import PromoSection from '../../components/sections/Promo/index';
import ClockSection from '../../components/sections/Clock/index';
import Calculator from '../../components/sections/Calculator/index';
import Earpods from '../../components/sections/Earpods/index';
import Notebook from '../../components/sections/Notebook';
import Works from '../../components/sections/Works/index';
import Pin from '../../components/sections/Pin/index';
import Faq from '../../components/sections/Faq/index';
import Footer from '../../components/sections/Footer/index';
import Reviews from '../../components/sections/Reviews/index';
import Modal from '../../components/shared/Modal/index'
import Sidebar from '../../components/shared/Sidebar/index'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prevState => !prevState)
    };

    const toggleBurger = () => setIsOpen(prevState => !prevState);
    return (
        <>
            <Navbar toggleBurger={toggleBurger} toggleModal={toggleModal}/>
            <Sidebar isOpen={isOpen} toggleBurger={toggleBurger}/>
            <Modal showModal={showModal} toggleModal={toggleModal}/>
            <PromoSection/>
            <ClockSection />
            <Calculator />
            <Works />
            <Reviews />
            <Pin />
            <Earpods />
            <Notebook />
            <Faq />
            <Footer />
        </>
    )
}

export default Home;
