import React from 'react';
import { connect } from "react-redux";
import classnames from 'classnames';

import _ from 'lodash';
import { withRouter } from 'react-router-dom'

import Spinner from '../Utilities/Spinner';



class postsGrid extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clear();
    if (React.functions.isUndefinedOrNullOrEmpty(this.props.posts.list))
      this.props.fetchObjects();
  }

  render() {

    // console.log("Grid");
    const props = this.props;  
    const posts = props.posts.list;

    return (
      <section>
        <div className="list-container">
          {posts.length > 0 ? posts.map((post, index) => { return <React.components.Card key={index} index={index} object={post} /> }
          ) : <Spinner/>}
        </div>
        <React.components.Button className="primary-button" label="VOLVER" back />
      </section>

    );
  }

}

const getFilterPosts = (posts, path) => {
  const filter = (value, posts) => posts.filter(post => post[Object.keys(post)[0]].operationsTypes == value);
  switch (path) {
    case '/sale':
      return {
        title: "Ventas",
        list: filter("sale", posts)
      }
    case '/rent':
      return {
        title: "Alquileres",
        list: filter("rent", posts)
      }
    default:
      return {
        title: "Todos",
        list: posts
      }
  }
}


/*
* Si se especifica, el componente a suscribirse a las actualizaciones del store de Redux.
*/
const mapStateToProps = (state) => {
  return {
    posts: getFilterPosts(state.posts.allPosts, state.router.location.pathname)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchObjects() {
      React.actions.actionsPost.fetchObjects(dispatch)
    },
    clear() {
      dispatch(React.actions.actionsPost.clear());
    },

  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(postsGrid));