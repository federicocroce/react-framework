import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from "react-redux";

const Post = (props) => {

  var postClass = '';
  var showPost = true;
 
  const card = props.object[Object.keys(props.object)[0]]; // Mapeo de objecto desde firebase

  return (
 
    showPost ?
      <div  className={postClass}> 
        <NavLink className="post-content" to={`/view/${Object.keys(props.object)[0]}`} onClick={() => props.viewPost(props.object)}>

          <div className="post-image">
            <img src={props.object.display_src} />
          </div>

          <p>{card.age}</p>
          <p>{card.name}</p>


        </NavLink>

      </div>
      : null
  );

}

const mapDispatchToProps = dispatch => {
  return {
    viewPost(selected) {
      dispatch(React.actions.actionsPost.viewPost(selected));
    }
  };
}

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Post));