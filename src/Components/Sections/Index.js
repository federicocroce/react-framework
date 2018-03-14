import React from 'react';

import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route, NavLink } from 'react-router-dom';

// import { store, history } from '../../Config/Store.js';
// import { mainLinksRoutes as linksRoutes } from '../../Config/AppRoutes.js'


const Index = () => {

  return (
    <Provider store={React.config.storeHistory.store}>
      <ConnectedRouter history={React.config.storeHistory.history}>
        <div>
          <h1>
            <NavLink className='title-home' to="/">Venta/Alquier Inmuebles</NavLink>
          </h1>
          <div className="nav-bar-container">
            <Switch>
              <React.components.NavigationBar linksRoutes={React.config.linksRoutes.mainLinksRoutes} />
            </Switch>
          </div>

        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default Index;


// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// const Home = () => {
//   console.log("Home");
//   return (

//     <div >
//       <h2>Home</h2>
//     </div >
//   )
// }

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={Topic} />
//     <Route exact path={match.path} render={() => (
//       <h3>Please select a topic.</h3>
//     )} />
//   </div>
// )

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>

//       <hr />

//       <Route path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/topics" component={Topics} />
//     </div>
//   </Router>
// )
// export default BasicExample
