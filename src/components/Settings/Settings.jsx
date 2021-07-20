import React from "react";
import Style from './Settings.module.css'

const Settings = (props) => {

    let settingsValue = props.settingsPage.settingsPost;

    let nameList = props.settingsPage.user.map((el) => {
        return (
           <div>
               {el.user}
           </div>
        )
    })

    let smsList = props.settingsPage.smsSettings.map((el) => {
        return (
            <div>
                {el.sms}
            </div>
        )
    })


    let addSms = () => {
        props.addPostSettings();
    }

    let onChangeSettings = (e) => {
        let text = e.target.value;
        props.oneChangeSettings(text);
    }


    return (
        <div className={Style.item}>
            <div>
                {nameList}
                <div>
                    <textarea onChange={onChangeSettings} placeholder={'Hi'} value={settingsValue}/>
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