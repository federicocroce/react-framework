import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

const Item = props => {

    const item = props.item[Object.keys(props.item)[0]];

    return (
        <div onClick={() => props.setSelected(props.item)}>
            <h1>Esto es un Item</h1>
            {item.name}
        </div>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        setSelected(selected) {
            dispatch(React.actions.actionsUsers.setSelected(selected))
        }
    };
}

export default withRouter(connect(
    null,
    mapDispatchToProps
)(Item));