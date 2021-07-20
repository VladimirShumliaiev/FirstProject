const addSettingsAT = 'ADD-MESSAGE-POST-SETINGS';
const onChangeAT = 'ON-CHANGE-SETINGS';


let initialState = {
    user: [
        {id: 1, user: 'Boris'},
        {id: 2, user: 'Ivan'},
        {id: 3, user: 'Pavel'},
        {id: 4, user: 'Maxim'},
        {id: 5, user: 'Petr'},
    ],
    smsSettings: [
        {sms: 'sms:'}
    ],

    settingsPost: '',

}

let settingsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case addSettingsAT: {
            let settings = {
                sms: state.settingsPost
            }
            stateCopy = {
                ...state,
                smsSettings: [...state.smsSettings, settings],
                settingsPost: '',
            }
            return stateCopy;
        }
        case onChangeAT:
            stateCopy = {
                ...state,
                settingsPost: action.sms,
            }
            return stateCopy;


        default:
            return state;
    }
}

export const addPostSettingsAC = () => {
    return (
        {type: addSettingsAT}
    )
}

export const onChangeSettingsAC = (sms) => {
    return (
        {type: onChangeAT, sms: sms}
    )
}


export default settingsReducer;