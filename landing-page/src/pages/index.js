import React, { useState } from 'react'
import FooterSection from '../components/FooterSection'
import HeaderSection from '../components/HeaderSection'
import InfoSection from '../components/InfoSection'
import FlatWhiteSection from '../components/FlatWhiteSection'
import InfoSectionBkg from '../components/InfoSectionBkg'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import { homeObjBkgOne } from '../components/InfoSectionBkg/DataBkg'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeaderSection />
            <InfoSectionBkg {...homeObjBkgOne}/>
            <InfoSection {...homeObjOne} />
            <FlatWhiteSection />
            <FooterSection />
        </>
    )
}

export default Home
