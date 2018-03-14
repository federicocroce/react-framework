import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UserList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setSelected();
        if (this.props.user.list.length == 0)
            this.props.fetchObjects();
    }

    render() {

        const props = this.props;

        return (
            <div>
                <div className='list-container'>
                    {props.user.list.length > 0 ? props.user.list.map((item, index) => { return <React.components.UserDetail key={index} index={index} object={item} /> }) : <React.components.Spinner />}
                </div>

                <React.components.Button className='primary-button' label='VOLVER' back />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchObjects() {
            React.actions.actionsUser.fetchObjects(dispatch)
        },
        setSelected() {
            dispatch(React.actions.actionsUser.setSelected({}))
        }
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList));