import React from "react";
import style from './ButtonTexterea.module.css'
import Post from "../Profile/Posts/Post/Post";




const ButtonTexterea = (props) => {

    let newPost = props.profilePage.profileList.map((el) => {
        return (
            <Post foto={el.foto} sms={el.sms} like={el.like} />
        )
    })

    let newAddPost = props.profilePage.addPostSms;

    let addPost = () => {
        props.addPost();
    }

    let onChangeMessage = (e) => {
        let sms = e.target.value;
        props.newProfileOnChange(sms)
    }
    return (
        <div>
            <div>
                {newPost}
            </div>
        <textarea onChange={onChangeMessage} value={newAddPost} placeholder={'add sms...'}/>
      <button onClick={ addPost } className={style.item}><b>add Post</b></button>
        </div>
    )
}

export default ButtonTexterea;