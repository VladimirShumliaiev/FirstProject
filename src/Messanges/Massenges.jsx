import React from "react";
import Style from './Massenges.module.css'

const Massenges = () => {

    let texterea = React.createRef();

    let button = () => {
        let message = texterea.current.value;
        alert(message);
    }

    return (
        <div className={Style.Massenges}>
            <div>
                <div className={Style.User +' '+ Style.active}>
                    Vladimir
                </div>
                <div className={Style.User}>
                    Alex
                </div>
                <div className={Style.User}>
                    Irina
                </div>
                <div className={Style.User}>
                    Oleg
                </div>
                <div className={Style.User}>
                    Vasya
                </div>
            </div>
            <div className={Style.Smses}>
                <div className={Style.Sms}>Hello Hi</div>
                <div className={Style.Sms}>Hello Ok</div>
                <div className={Style.Sms}>Hello yes</div>
                <div className={Style.Sms}>Hello No</div>
                <div>
                    <textarea ref={texterea}>Hello world</textarea>
                    <button onClick={ button }>add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Massenges;