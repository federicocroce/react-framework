import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {reset} from 'redux-form';

const UserDetail = props => {

    const item = props.object[Object.keys(props.object)[0]]; // Mapeo de objecto desde firebase

    const onClick = () =>{
        props.setSelected(props.object); 
        props.resetForm();
    }

    return (
        <div onClick={() => onClick()}>
            <h1>{item.name}</h1>
        </div>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        setSelected(selected) {
            dispatch(React.actions.actionsUser.setSelected(selected))
        },
        resetForm() {
            dispatch(reset('User'));
        }
    };
}

export default withRouter(connect(
    null,
    mapDispatchToProps
)(UserDetail));