import React from "react";
import Style from './NavBar.module.css'
import NavBarShablon from "./NavBarShablon";
import {NavLink} from "react-router-dom";
import navBarNameList from "../../Redux/reducers/navBarReducer";


const NavBar = () => {
    let newNavBar = navBarNameList.map((el) => {
        return (
            <NavBarShablon name={<NavLink key={el.id} to={el.id}>{el.name}</NavLink>}/>
        )
    })
    return (
        <div className={Style.nav}>
            <div className={Style.item}>
                {newNavBar}
            </div>
        </div>
    )
}

export default NavBar;