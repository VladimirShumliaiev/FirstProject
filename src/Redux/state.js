import React from "react";
import {rerenderIndex} from "../index";

let state = {
    profilePosts: [
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
        {id: '/messages', name: 'Mesages'},
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

export const profileFunction = (sms) => {
    let profilePost = {
        foto: 'https://www.sovsport.ru/data/sovsport/upload/2000-01/16/images-6041-1538129659.jpg',
        sms: sms,
        like: 561,
    }
    state.profilePosts.push(profilePost);
    rerenderIndex(state)
}
export const messagesFunction = () => {
    let addSms = {
        sms: state.messages.postMessagesSms,
    }
    state.messages.sms.push(addSms);
    rerenderIndex(state)
}

export const changeMessage = (newSmsText) => {
    state.messages.postMessagesSms = newSmsText;
    rerenderIndex(state)
}
export const functionSettings = (sms) => {
    let settings = {
        sms: sms,
    }
    state.settings.sms.push(settings);
    rerenderIndex(state);
}


export default state;








