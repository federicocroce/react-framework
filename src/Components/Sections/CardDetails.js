import React from 'react';
import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form' // imported Field

import { withRouter } from 'react-router-dom';


const PostDetailsReduxForm = props => {

  const selected = props.state.posts.selected;

  // console.log(selected);

  const isNewUpadte = () => React.functions.isUndefinedOrNullOrEmpty(props.initialValues);

  const submit = (values) => {
    isNewUpadte() ? React.actions.actionsPost.create(values) : React.actions.actionsPost.update(values, Object.keys(selected)[0]);
    React.config.storeHistory.history.goBack();
  }

  const remove = () =>{
    props.clear();
    React.config.storeHistory.history.goBack();
    React.actions.actionsPost.remove(Object.keys(selected)[0]);
  }

  const setText = props => {
    props.fetchTexo();
  }

  const radioButtonsProps = {
    name: "operationsTypes",
    style: "inline",
    type: "radio",
    options: [
      {
        value: "rent",
        label: "Alquiler"
      },
      {
        value: "rentTime",
        label: "Alquiler Temporario"
      },
      {
        value: "sale",
        label: "Venta"
      }
    ]
  }

  const checkboxProps = {
    name: "operationsTypes",
    // style: "inline",
    type: "checkbox",
    options: [
      {
        value: "rent",
        label: "Alquiler"
      },
      {
        value: "rentTime",
        label: "Alquiler Temporario"
      },
      {
        value: "sell",
        label: "Venta"
      }
    ]
  }


  const uploadFileToServer = (file) => {
    const delay = file.size / 100;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  };

  return (
    <form onSubmit={props.handleSubmit(submit.bind(this))}>

      {props.state.posts.text ? <h1>{props.state.posts.text}</h1> : null}

      {isNewUpadte() ? <React.components.UploadImg multiple={true}
        name='example-upload'
        maxSize={300000}
        onUpload={uploadFileToServer}
        label='Upload Files' /> : null}

      <React.components.SwitchesGroup switchesProps={radioButtonsProps} />

      <React.components.SwitchesGroup switchesProps={checkboxProps} />

      <div>
        <React.components.InputText name="name" style="inline" placeholderFloating="Escriba su nombre" customPlaceholder="ej: Federico Croce" type="text" />

        <React.components.InputText name="age" style="inline" placeholderFloating="Escriba su edad" customPlaceholder="ej: 28" type="text" validate={React.config.fieldValidations.validations.age} />
      </div>

      <React.components.Button type="submit" className="primary-button" label="SUBMIT" />

      <React.components.Button className="primary-button" label="VOLVER" onClick={() => props.clear()} back />
      <React.components.Button className="primary-button" label=" Set Text" onClick={() => setText(props)} />
      <React.components.Button className="primary-button" label="Eliminar" onClick={() => remove(selected, props)} />

      <React.components.GMaps searchBox={true} currentLocation={true} keyValuePlace={true} />

    </form>
  );
}

PostDetailsReduxForm = reduxForm({
  form: 'postDetails'
})(PostDetailsReduxForm)



const mapStateToProps = (state) => {
  const selected = state.posts.selected[Object.keys(state.posts.selected)[0]];

  return {
    state: state,
    initialValues: selected,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    clear() {
      dispatch(React.actions.actionsPost.clear());
    },
    fetchTexo() {
      React.actions.actionsPost.fetchObject(dispatch)
    }
  };
}

PostDetailsReduxForm = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailsReduxForm));



export default PostDetailsReduxForm















