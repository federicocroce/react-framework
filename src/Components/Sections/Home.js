import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Home extends React.Component {

  constructor(){
    super();

    this.state = {
      names: []
    }

    axios.get("http://localhost:3001/names")
      .then(response => {
        this.setState({
          names: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });

  }


  render() {
    console.log("Home");
    return (

      <section>
        <h1>Esta es la HOME</h1>
        <ul>
          {this.state.names.map( (name, index) =>
            <li key={index}>{name}</li>
          )}
        </ul>
        <React.components.Button className='primary-button' label='Volver' back />
      </section>
    );
  }
}

export default Home;

