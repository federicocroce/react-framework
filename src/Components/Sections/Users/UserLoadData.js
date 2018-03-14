import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';

const UserLoadDataReduxForm = props => {

    const { reset } = props;
    const selected = props.state.user.selected

    const isNew = () => React.functions.isUndefinedOrNullOrEmpty(props.initialValues);

    const submit = values => {
        isNew() ? React.actions.actionsUsers.create(values) : React.actions.actionsUsers.update(values, Object.keys(selected)[0]);
        props.setSelected({});
        reset();
    }

    const remove = () => {
        React.actions.actionsUsers.remove(Object.keys(selected)[0]);
        props.setSelected({});
        reset();
    }

    const checkboxProps = {
        name: 'checkboxOptions',
        style: '',
        type: 'checkbox',
        options: [
            {
                value: 'checkbox1',
                label: 'Checkbox 1'
            },
            {
                value: 'checkbox2',
                label: 'Checkbox 2'
            },
            {
                value: 'checkbox3',
                label: 'Checkbox 3'
            }
        ]
    }

    const gender = {
        name: 'radioOptions',
        style: 'inline',
        type: 'radio',
        options: [
            {
                value: 'male',
                label: 'Hombre'
            },
            {
                value: 'female',
                label: 'Mujer'
            },
            {
                value: 'undefined',
                label: 'Pepe'
            }
        ]
    }

      const listItemsCombobox = [
            "Fede",
            "Nico",
            "Pablo"
        ];

    

    return (
        <form onSubmit={props.handleSubmit(submit.bind(this))}>
            <h1>Carga de datos</h1>

            <React.components.InputText name='name' style='inline' placeholderFloating='Nombre' customPlaceholder='Feerico Croce' type='text' validate={React.config.fieldValidations.validations.name} />

            <React.components.InputText name='age' style='inline' placeholderFloating='Edad' customPlaceholder='28' type='text' validate={React.config.fieldValidations.validations.age} />


            <React.components.SwitchesGroup switchesProps={gender} />

            <React.components.SwitchesGroup switchesProps={checkboxProps} />

            <React.components.Combobox listItems={listItemsCombobox}/>

            <React.components.Button type='submit' className='primary-button' label='SUBMIT' />
            <React.components.Button className='primary-button' label='Eliminar' onClick={() => remove(selected, props)} />
            <React.components.Button className='primary-button' label='Reset' onClick={() => { props.setSelected({}); reset() }} />
            <React.components.Button className='primary-button' label='VOLVER' onClick={() => props.setSelected({})} back />
        </form>
    );
}

UserLoadDataReduxForm = reduxForm({
    form: 'UserLoadData',
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(UserLoadDataReduxForm)

const mapStateToProps = (state) => {
    // const initialValues = {};

    // if(!React.functions.isUndefinedOrNullOrEmpty(state.user.selected))
    // const initialValues = state.user.selected[Object.keys(state.user.selected)[0]];

    return {
        state: state,
        initialValues: !React.functions.isUndefinedOrNullOrEmpty(state.user.selected) ? state.user.selected[Object.keys(state.user.selected)[0]] : {}
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setSelected(value) {
            dispatch(React.actions.actionsUsers.setSelected(value));
        },
    };
}

UserLoadDataReduxForm = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(UserLoadDataReduxForm));

export default UserLoadDataReduxForm;