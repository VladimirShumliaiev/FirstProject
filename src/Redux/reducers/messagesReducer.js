const addMessageAT = 'ADD-MESSAGE-POST';
const onChangeAT = 'ON-CHANGE-MMESSAGE';


let initialState = {
    useres: [
        {id: 1, name: 'Oleg'},
        {id: 1, name: 'Vasya'},
        {id: 1, name: 'Pasha'},
        {id: 1, name: 'Kolya'},
        {id: 1, name: 'Kostya'},
    ],
    smsMessage: [
        {sms: 'Sms:'}
    ],
    postMessagesSms: '',

}

let messagesReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case addMessageAT: {
            let addSms = {
                sms: state.postMessagesSms,
            }
            stateCopy = {
                ...state,
                smsMessage: [...state.smsMessage, addSms],
                postMessagesSms: '',
            }
            return stateCopy;
        }
        case onChangeAT: {
            stateCopy = {
                ...state,
                postMessagesSms: action.sms,
            }
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const messagesAC = () => {
    return (
        {type: addMessageAT}
    )

}

export const onChageMessageAC = (sms) => {
    return (
        {type: onChangeAT, sms: sms}
    )
}


export default messagesReducer;

