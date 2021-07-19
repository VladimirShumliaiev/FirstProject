import React from "react";
import Style from './Post.Module.css'

const Post = (props) => {
    return (
        <div className={Style.item}>
            <img src={props.foto} alt=""/>
            {props.sms}
            <div className={Style.color}>
                like: {props.like} counts.
            </div>

        </div>
    )
}

export default Post;