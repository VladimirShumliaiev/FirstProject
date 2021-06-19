import React from "react";
import Style from './Settings.module.css'

const Settings = (props) => {

    let nameList = props.state.user.map((el) => {
        return (
           <div>
               {el.user}
           </div>
        )
    })

    let smsList = props.state.sms.map((el) => {
        return (
            <div>
                {el.sms}
            </div>
        )
    })

    let onClickTexterea = React.createRef();

    let addSms = () => {
        let newAddSms = onClickTexterea.current.value;
        props.functionSettings(newAddSms);
        onClickTexterea.current.value='';
    }


    return (
        <div className={Style.item}>
            <div>
                {nameList}
                <div>
                    <textarea ref={onClickTexterea}/>
                    <button onClick={addSms}>add sms</button>
                </div>
            </div>

            <div>
                {smsList}
            </div>
        </div>
    )
}

export default Settings;