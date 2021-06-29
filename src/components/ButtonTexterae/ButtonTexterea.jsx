import React from "react";
import style from './ButtonTexterea.module.css'




const ButtonTexterea = (props) => {

    let newAddPost = props.state.addPostSms;

    let addPost = () => {
        props.profileFunction();
    }

    let onChangeMessage = (e) => {
        let sms = e.target.value;
        props.onChangeProfile(sms)
    }
    return (
        <div>
        <textarea onChange={onChangeMessage} value={newAddPost} placeholder={'add sms...'}/>
      <button onClick={ addPost } className={style.item}><b>add Post</b></button>
        </div>
    )
}

export default ButtonTexterea;