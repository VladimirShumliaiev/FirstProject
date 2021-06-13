import React from "react";
import style from './ButtonTexterea.module.css'



const ButtonTexterea = () => {

    let newAddPost = React.createRef();

    let addPost = () => {
        let text = newAddPost.current.value;
        alert(text);
    }
    return (
        <div>
        <textarea ref={ newAddPost }></textarea>
      <button onClick={ addPost } className={style.item}><b>add Post</b></button>
        </div>
    )
}

export default ButtonTexterea;