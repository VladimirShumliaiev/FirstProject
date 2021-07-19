let callSubscribers = () => {}
let state = {
    profilePage: {
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
    },
    messagesPage: {
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
        postMessagesSms: 'hello my friends',

    },
    navBarNameList: [

        {id: '/profile', name: 'Profile'},
        {id: '/messages', name: 'Messages'},
        {id: '/music', name: 'Music'},
        {id: '/news', name: 'News'},
        {id: '/settings', name: 'Settings'},
    ],
    settingsPage: {
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
}




export const addPostProfile = () => {
    let addProfilePost = {
        foto: 'https://www.sovsport.ru/data/sovsport/upload/2000-01/16/images-6041-1538129659.jpg',
        sms: state.profilePosts.addPostSms,
        like: 561,
    }
    state.profilePosts.profileList.push(addProfilePost);
    state.profilePosts.addPostSms = '';
    callSubscribers(state)
}
export const onChangeProfile = (sms) => {
    state.profilePage.addPostSms = sms;
    callSubscribers(state);
}


export const addPostMessage = () => {
    let addSms = {
        sms: state.messagesPage.postMessagesSms,
    }
    state.messagesPage.sms.push(addSms);
    state.messagesPage.postMessagesSms = '';
    callSubscribers(state)
}
export const onChangeMessage = (newSmsText) => {
    state.messagesPage.postMessagesSms = newSmsText;
    callSubscribers(state)
}

export const functionSettings = (sms) => {
    let settings = {
        sms: sms,
    }
    state.settingsPage.sms.push(settings);
    callSubscribers(state);
}

export const subscribe = (observer) => {
    callSubscribers = observer;
}


export default state;








