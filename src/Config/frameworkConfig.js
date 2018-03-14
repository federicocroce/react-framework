import React from 'react';
import $ from 'jquery-lite';
import _ from "lodash";
// import Home from '../Components/Sections/Home';

//////////////  COMPONENTS //////////////////
import Button from '../Components/Utilities/Button';
import NavigationBar from '../Components/Utilities/NavigationBar';
import InputText from '../Components/Utilities/InputText';
import KeyValue from '../Components/Utilities/KeyValue';
import Spinner from '../Components/Utilities/Spinner';
import GMaps from '../Components/Utilities/GMaps/GMaps';
import GMapsSearchBox from '../Components/Utilities/GMaps/GMapsSearchBox';
import SwitchesGroup from '../Components/Utilities/SwitchesGroup';
import UploadImg from '../Components/Utilities/UploadImg';
import Combobox from '../Components/Utilities/Combobox';


import Index from '../Components/Sections/Index';
import Home from '../Components/Sections/Home';
import Card from '../Components/Sections/Card';
import CardDetails from '../Components/Sections/CardDetails';
import CardsGrid from '../Components/Sections/CardsGrid';
import User from '../Components/Sections/User';
import UserDetail from '../Components/Sections/UserDetail';
import UsersList from '../Components/Sections/UsersList';
import UserSection from '../Components/Sections/Users/UserSection';
import UserLoadData from '../Components/Sections/Users/UserLoadData';
import List from '../Components/Sections/Users/List';
import Item from '../Components/Sections/Users/Item';
///////////////////////////////////////////////////////////////

//////////////// CONFIG /////////////////////
import storeHistory from './store.js';
import fieldValidations from './validations';
import linksRoutes from './appRoutes';
import firebaseApp from './firebase';
///////////////////////////////////////////

//////////// ACTIONS ///////////////////////
import actions from "../Actions/indexActions"



console.log("Frame");


const frameworkConfig = props => {

    Object.assign(React, {
        functions : {},
        components : {},
        actions:{},
        config:{}
    });

    //////////////  FUNCTIONS //////////////////
    React.functions.isUndefinedOrNullOrEmpty = (element) => _.isEmpty(element) || element == null || element == undefined  ? true : false;
    ///////////////////////////////////////////




    //////////////  COMPONENTS //////////////////
    React.components.Button = Button;
    React.components.NavigationBar = NavigationBar;
    React.components.InputText = InputText;
    React.components.KeyValue = KeyValue;
    React.components.Spinner = Spinner;
    React.components.GMaps = GMaps;
    React.components.GMapsSearchBox = GMapsSearchBox;
    React.components.SwitchesGroup = SwitchesGroup;
    React.components.UploadImg = UploadImg;
    React.components.Combobox = Combobox;

    React.components.Index = Index;
    React.components.Home = Home;
    React.components.Card = Card;
    React.components.CardDetails = CardDetails;
    React.components.CardsGrid = CardsGrid;
    React.components.User = User;
    React.components.UserDetail = UserDetail;
    React.components.UsersList = UsersList;
    React.components.UserLoadData = UserLoadData;
    React.components.UserSection = UserSection;
    React.components.List = List;
    React.components.Item = Item;
    ///////////////////////////////////////////

    ///////// CONFIG //////////////////
    React.config.storeHistory = storeHistory;
    React.config.fieldValidations = fieldValidations;
    React.config.linksRoutes = linksRoutes();    
    React.config.firebaseApp = firebaseApp;
    console.log(React.config);
    ///////////////////////////////////////////////

    //////////// ACTIONS ////////////////////
    React.actions = actions;
    ///////////////////////////////////////////////
    

}

export default frameworkConfig;


