import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GithubState from './components/contexts/githubContext/GithubState'
import AlertState from './components/contexts/alertContext/AlertState'
ReactDOM.render(
  <Fragment>
    <GithubState>
      <AlertState>
        <App />
      </AlertState>
    </GithubState>
  </Fragment>,
  document.getElementById('root')
);
