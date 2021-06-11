import React from "react";
import Style from './NavBar.module.css'
import NavBarShablon from "../components/NavBarShablon";
import {NavLink} from "react-router-dom";



const NavBar = (props) => {
    let newNavBar = props.state.map((el) => {
        return (
           <NavBarShablon name={<NavLink to={el.id}>{el.name}</NavLink>}/>
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