import {connect} from "react-redux";
import Settings from "./Settings";
import {addPostSettingsAC, onChangeSettingsAC,} from "../../Redux/reducers/settingsReducer";



let mapStateToProps = (state) => {
    return {
        settingsPage: state.settingsPage
    }
}

let mapDispachToProps = (dispatch) => {
    return {
        addPostSettings: () => {
            dispatch(addPostSettingsAC());
        },
        oneChangeSettings: (sms) => {
            dispatch(onChangeSettingsAC(sms));
        }

    }

}


let SettingsContainer = connect(mapStateToProps,mapDispachToProps)(Settings);

export default SettingsContainer;