import React, { useState } from "react";
import { NavbarContainer, NavbarWrapper, IconLogo, Menu, MenuItem, MenuItemLink, IconLogoMovile } from "./NavBar.elements";

import { NavLink } from 'react-router-dom'
import cruz from "../img/cruz.png"
import hambur from "../img/hambur.png"


function NavBar() {
    const [click, setClick] = useState(false);

    const changeClick = () => {
        setClick(!click);
    }
    return (
        <>
            <NavbarContainer>
                <NavbarWrapper>
                    <IconLogo>
                        <NavLink className="logoText" to="/countrys">Countrys-App</NavLink>
                    </IconLogo>
                    <IconLogoMovile onClick={() => changeClick()}>
                        {click ? <img src={cruz} alt="hambur" /> : <img src={hambur} alt="hambur" />}
                    </IconLogoMovile>
                    <Menu click={click}>
                        <MenuItem onClick={() => changeClick()}>
                            <MenuItemLink>

                                <NavLink className="navLink" to="/activities">Manage Activities</NavLink>

                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    );
}

export default NavBar;