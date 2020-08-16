import React,{Fragment, useContext} from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/layouts/Search';
import Spinner from './components/layouts/Spinner';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'; 
import Useritem from './components/users/Useritem'

import GithubContext from './components/contexts/githubContext/githubContext'
import  About  from './components/layouts/About';

const App = props => {
  const githubContext = useContext(GithubContext);
  const {loading} = githubContext;
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" render = { props => <Fragment>
            <Search />
            {(loading) && <Spinner/>}
            <Users  />
          </Fragment>} />
          <Route exact path="/users/:login" component={Useritem}/>
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

