import React, {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './login.component';
import Signup from './signup.component';


// function App() {
//   return ( <Router>
//     <div className="App">
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container-fluid">
//           <Link className="navbar-brand bold uppercase" to={"/sign-in"}>Aosta</Link>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-in"}>Login</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <Switch>
//             <Route exact path='/' component={Login} />
//             <Route path="/sign-in" component={Login} />
//             <Route path="/sign-up" component={Signup} />
//           </Switch>
//         </div>
//       </div>
//     </div></Router>
//   );
// }



function App() {
  return(
    //Adding Router Writing html inside <Router> tag

    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand bold uppercase" to={"/sign-in"}>Aosta</Link>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="navbar nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> 

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route path="/sign-in" component={Login}/>
              <Route path={"/sign-up"} component={Signup}/>;
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
