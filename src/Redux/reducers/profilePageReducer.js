const addPostAT = 'PROFILE-ADD-POST';
const onChangeAT = 'PROFILE-ON-CHANGE';


let initialState = {
    profileList: [
        {
            foto: 'https://i.ytimg.com/vi/3zcOWKTaw3Q/maxresdefault.jpg',
            sms: 'Hello',
            like: 43
        },

        {
            foto: 'https://im.kommersant.ru/Issues.photo/DAILY/2013/085/KMO_085521_10165_1_t218.jpg',
            sms: 'Hello Hello',
            like: 67
        },

        {
            foto: 'https://www.sovsport.ru/data/sovsport/upload/2000-01/16/images-6041-1538129659.jpg',
            sms: 'Hi',
            like: 954
        },

    ],
    addPostSms: ''
};

let profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case addPostAT: {
            let addProfilePost = {
                foto: 'https://www.sovsport.ru/data/sovsport/upload/2000-01/16/images-6041-1538129659.jpg',
                sms: state.addPostSms,
                like: 561,
            }
           return {
                ...state,
                profileList: [...state.profileList, addProfilePost],
                addPostSms: ''
            }
        }
        case onChangeAT:
            return {
                ...state,
                addPostSms: action.sms,
            }
        default:
            return state;
    }
}



export const addPostAC = () => {
    return (
        {type: addPostAT}
    )
}

export const onChangeAC = (sms) => {
    return (
        {type: onChangeAT, sms: sms }
    )
}

export default profileReducer;