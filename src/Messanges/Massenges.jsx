import React from "react";
import Style from './Massenges.module.css'




const Massenges = (props) => {

    let pushButton = React.createRef();

    let newUsers = props.state.useres.map((el) => {
        return(
        <div key={el.id}>
            {el.name}
        </div>
        )
    })

    let newSms = props.state.sms.map((el) => {
        return(
        <div>
            {el.sms}
        </div>
        )
    })

    let buttonOnClick = () => {
        let text = pushButton.current.value;
        props.messagesFunction(text);
        props.changeMessage('');
    }

let newChangeMessage = () => {
    let text = pushButton.current.value;
    props.changeMessage(text);
}
    return (
        <div className={Style.Massenges}>
            <div>
                {newUsers}
            </div>

            <div className={Style.Smses}>
                {newSms}
                <textarea onChange={newChangeMessage} ref={pushButton} value={props.state.postMessagesSms}/>
                <button onClick={buttonOnClick}>add sms plz</button>
            </div>
        </div>
    )
}

export default Massenges;