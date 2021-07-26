import {connect} from "react-redux";
import Music from "./Music";
import {addMusicAC, onChangeMusicAC} from "../../Redux/reducers/musicPageReducer";

let mapStateToProps = (state) => {
    return {
        musicPage: state.musicPage
    }
}

let mapDispachToProps = (dispatch) => {
    return {
        addMusick: () => {
            dispatch(addMusicAC());
        },
        onChangeMusic: (s) => {
            dispatch(onChangeMusicAC(s));
        }
    }
}

const MusicContainer = connect(mapStateToProps,mapDispachToProps)(Music);

export default MusicContainer;