import React from "react";
import Style from './Massenges.module.css'

const Massenges = () => {
    return (
        <div className={Style.Massenges}>
            <div className={Style.Users}>
                <div className={Style.User +' '+ Style.active}>
                    Vladimir
                </div>
                <div className={Style.User}>
                    Alexxx
                </div>
                <div className={Style.User}>
                    Irinaa
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
            </div>
        </div>
    )
}

export default Massenges;