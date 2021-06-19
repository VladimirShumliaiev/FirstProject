import React from "react";
import Style from './Massenges.module.css'



const Massenges = (props) => {

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

    let pushButton = React.createRef();

    let buttonOnClick = () => {
        let text = pushButton.current.value;
        props.messagesFunction(text);
        pushButton.current.value='';
    }

    return (
        <div className={Style.Massenges}>
            <div>
                {newUsers}
            </div>

            <div className={Style.Smses}>
                {newSms}
                <textarea ref={pushButton}/>
                <button onClick={buttonOnClick}>add sms plz</button>
            </div>
        </div>
    )
}

export default Massenges;