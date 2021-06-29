let callSubscribers = () => {}
let state = {
    profilePosts: {
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
    messages: {
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
    navName: [

        {id: '/profile', name: 'Profile'},
        {id: '/messages', name: 'Messages'},
        {id: '/music', name: 'Music'},
        {id: '/news', name: 'News'},
        {id: '/settings', name: 'Settings'},
    ],
    settings: {
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




export const profileFunction = () => {
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
    state.profilePosts.addPostSms = sms;
    callSubscribers(state);
}


export const messagesFunction = () => {
    let addSms = {
        sms: state.messages.postMessagesSms,
    }
    state.messages.sms.push(addSms);
    state.messages.postMessagesSms = '';
    callSubscribers(state)
}
export const changeMessage = (newSmsText) => {
    state.messages.postMessagesSms = newSmsText;
    callSubscribers(state)
}

export const functionSettings = (sms) => {
    let settings = {
        sms: sms,
    }
    state.settings.sms.push(settings);
    callSubscribers(state);
}

export const subscribe = (observer) => {
    callSubscribers = observer;
}


export default state;








