import {addPostAC, onChangeAC} from "../../Redux/reducers/profilePageReducer";
import ButtonTexterea from "../ButtonTexterae/ButtonTexterea";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        newProfileOnChange: (sms) => {
            dispatch(onChangeAC(sms))
        }

    }
}


const ButtonTextereaContainer = connect(mapStateToProps,mapDispachToProps)(ButtonTexterea);

export default ButtonTextereaContainer;