import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UserSection extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.clear();
        if (this.props.user.list.length == 0)
            this.props.fetchObjects();
    }



    render() {

        const props = this.props;

        return (
            <div className='table users'>
                <React.components.UserLoadData />
                <React.components.List list={props.user.list} className=''/>
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
            React.actions.actionsUsers.fetchObjects(dispatch)
        },
        setSelected() {
            dispatch(React.actions.actionsUsers.setSelected({}));
        },
    };
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSection));