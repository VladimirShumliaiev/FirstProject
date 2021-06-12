import React from "react";
import Style from './Profile.module.css'
import Post from "./Posts/Post/Post";
import Texterea from "../components/TeXterea/TeXterea";
import Button from "../components/Button/Button";
import ProfileAva from "./Profile Ava/Profile Ava";
import MyPost from "./Posts/MyPost/MyPost";


const Profile = (props) => {
    let newPost = props.state.map((el) => {
        return (
            <Post foto={el.foto} sms={el.sms} like={el.like} />
        )
    })
    return (
        <div className={Style.item}>
            <ProfileAva/>
            <MyPost Name={'My Post'}/>
            <Texterea/>
            <div>
            <Button name={'Ok'}/>
            <Button name={'Cansel'}/>
            </div>
            {newPost}
        </div>
    )
}

export default Profile;