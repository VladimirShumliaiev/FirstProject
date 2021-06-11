import React from "react";
import style from './Button.module.css'
const Button = (props) => {
    return (
      <button className={style.item}>
          
          <b>{props.name}</b>

      </button>
    )
}

export default Button;