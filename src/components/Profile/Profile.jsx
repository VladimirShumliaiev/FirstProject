import React from "react";
import Style from './Profile.module.css'
import ProfileAva from "./Profile Ava/Profile Ava";
import MyPost from "./Posts/MyPost/MyPost";
import ButtonTextereaContainer from "./ButtonTextereaContainer";




const Profile = () => {
    return (
        <div className={Style.item}>
            <ProfileAva/>
            <MyPost/>
            <ButtonTextereaContainer/>
        </div>
    )
}

export default Profile;