
const addSettingsAT = 'ADD-MESSAGE-POST';
const onChangeAT = 'ON-CHANGE-MMESSAGE';


let initialState = {
    user: [
        {id: 1, user: 'Boris'},
        {id: 2, user: 'Ivan'},
        {id: 3, user: 'Pavel'},
        {id: 4, user: 'Maxim'},
        {id: 5, user: 'Petr'},
    ],
    sms: [
        {sms: 'sms:'}
    ]

}

let settingsReducer = (state = initialState, action) => {
    switch (action.type){
        case addSettingsAT:{
            let settings = {
                sms: state.settingsPage.sms
            }
            let stateCopy = {...state};
            stateCopy.settingsPage = {...state.settingsPage}
            stateCopy.settingsPage.sms.push(settings);
            return stateCopy;
        } case onChangeAT: {
            let stateCopy = {...state};
            stateCopy.settingsPage.sms = action.sms;
            return stateCopy;
        }

        default: {
            return state;
        }
    }
}



export default settingsReducer;