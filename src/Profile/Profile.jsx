import React from "react";
import Style from './Profile.module.css'
import Post from "./Posts/Post/Post";
import ButtonTexterea from "../components/ButtonTexterae/ButtonTexterea";
import ProfileAva from "./Profile Ava/Profile Ava";
import MyPost from "./Posts/MyPost/MyPost";




const Profile = (props) => {
    let newPost = props.state.profileList.map((el) => {
        return (
            <Post foto={el.foto} sms={el.sms} like={el.like} />
        )
    })
    debugger;
    return (
        <div className={Style.item}>
            <ProfileAva/>
            <MyPost/>
            <ButtonTexterea state={props.state} profileFunction={props.profileFunction} onChangeProfile={props.onChangeProfile}/>
            {newPost}
        </div>
    )
}

export default Profile;