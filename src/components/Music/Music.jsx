import React from "react";

let Music = (props) => {

    let musicValue = props.musicPage.addMusicTracks;

    let newMusicArtistList = props.musicPage.musicArtistList.map((el) => {
        return (
            <div key={el.id}>
                {el.name}
            </div>

        )
    })
        let newMusicTrackList = props.musicPage.musicTrackList.map((el) => {
        return (
            <div>
                {el.tracks}
            </div>

        )
    })

    let addMusic = () => {
        props.addMusick();
    }
     let onChangeMusic = (s) => {
         let text = s.target.value;
        props.onChangeMusic(text);
    }

    return (
        <div>
            <div>
                {newMusicArtistList}
            </div>
            <div>
                {newMusicTrackList}
                <textarea onChange={onChangeMusic} value={musicValue} placeholder={'track...'}/>
                <button onClick={addMusic}>PUSH</button>
            </div>
        </div>
    )
}

export default Music;