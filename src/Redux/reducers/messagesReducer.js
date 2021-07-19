const addMessageAT = 'ADD-MESSAGE-POST';
const onChangeAT = 'ON-CHANGE-MMESSAGE';


let initialState = {
    useres: [
        {id: 1,name: 'Oleg'},
        {id: 1,name: 'Vasya'},
        {id: 1,name: 'Pasha'},
        {id: 1,name: 'Kolya'},
        {id: 1,name: 'Kostya'},
    ],
        sms: [
    {sms: 'Sms:'}
],
    postMessagesSms: '',

}

let messagesReducer = (state = initialState, action) => {
    switch (action.type){
        case addMessageAT:{
            let addSms = {
                sms: state.postMessagesSms,
            }
            let stateCopy = {...state};
            stateCopy.sms = [...state.sms]
            stateCopy.sms.push(addSms);
            stateCopy.postMessagesSms = '';
            return stateCopy;
        }
        case onChangeAT:{
            let stateCopy = {...state};
            stateCopy.postMessagesSms = action.sms;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const messagesAC = () => {
    return (
        {type: addMessageAT }
    )

}

export const onChageMessageAC = (sms) => {
    return (
        {type: onChangeAT, sms: sms}
    )
}


export default messagesReducer;

