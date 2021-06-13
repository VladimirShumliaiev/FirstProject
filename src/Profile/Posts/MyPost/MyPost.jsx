import React from "react";
import Style from './MyPost.module.css'

const MyPost = (props) => {
    return (
        <div className={Style.item}>
            <img src="https://img.championat.com/news/big/t/c/jevander-kholifild-realno-krutoj_14452495491702435050.jpg" alt=""/>
            {props.name}
        </div>
    )
}
export default MyPost;



