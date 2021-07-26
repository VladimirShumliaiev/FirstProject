const addMusicTracksAT = 'ADD-MUSIC-TRACK';
const onChangeMusicTracksAT = 'ON-CHANGE-ADD-MUSIC-TRACK';

let initialState = {
    musicArtistList: [
        {id: 1, name: 'M.Krug'},
        {id: 1, name: 'S.Nagivicin'},
        {id: 1, name: 'A.Dumin'}
    ],

    musicTrackList: [
        {tracks: 'tracks:'}
    ],

    addMusicTracks: '',

}

let musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case addMusicTracksAT: {
            let addMusicTracks = {
                tracks: state.addMusicTracks
            }
            return {
                ...state,
                musicTrackList: [...state.musicTrackList, addMusicTracks],
                addMusicTracks: '',

            }
        }
        case onChangeMusicTracksAT:
            return {
                ...state,
                addMusicTracks: action.tracks
            }

        default:
            return state;
    }
}

export const addMusicAC = () => {
    return(
    {type: addMusicTracksAT}
    )
}
export const onChangeMusicAC = (s) => {
    return(
    {type: onChangeMusicTracksAT,tracks: s}
    )
}

export default musicReducer;