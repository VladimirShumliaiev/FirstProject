import {connect} from "react-redux";
import {messagesAC, onChageMessageAC} from "../../Redux/reducers/messagesReducer";
import Massenges from "./Massenges";



let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispachToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(messagesAC());
        },
        oneChangeMessage: (sms) => {
            dispatch(onChageMessageAC(sms));
        }

    }

}

let MessangesContainer = connect(mapStateToProps,mapDispachToProps)(Massenges);

export default MessangesContainer;