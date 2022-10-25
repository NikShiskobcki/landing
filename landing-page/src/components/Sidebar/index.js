import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="bkg" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="solution" onClick={toggle}>Solution</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/lets-talk">Lets talk</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
        </SidebarContainer>
        
    )
}

export default Sidebar
