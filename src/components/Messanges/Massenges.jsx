import React from "react";
import Style from './Massenges.module.css'


const Messanges = (props) => {

    let pushButton = props.messagesPage.postMessagesSms;

    let newUsers = props.messagesPage.useres.map((el) => {
        return (
            <div key={el.id}>
                {el.name}
            </div>
        )
    })

    let newSms = props.messagesPage.smsMessage.map((el) => {
        return (
            <div>
                {el.sms}
            </div>
        )
    })

    let buttonOnClick = () => {
        props.addPost();
    }

    let newChangeMessage = (e) => {
        let text = e.target.value;
        props.oneChangeMessage(text);
    }
    return (
        <div className={Style.Massenges}>
            <div>
                {newUsers}
            </div>

            <div className={Style.Smses}>
                {newSms}
                <textarea onChange={newChangeMessage} placeholder={'add sms plz...'} value={pushButton}/>
                <button onClick={buttonOnClick}>add sms plz</button>
            </div>
        </div>
    )
}

export default Messanges;