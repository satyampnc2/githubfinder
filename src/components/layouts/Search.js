import React, { useState,useContext, Fragment } from 'react'
import GithubContext from '../contexts/githubContext/githubContext'
import AlertContext from '../contexts/alertContext/alertContext'
const Search = (props) => {
    const [text,setText] = useState('');

    const githubContext = useContext(GithubContext);
    const {showAlertMsg,showAlert} = useContext(AlertContext)
    const {users,setUsers,clearUsers} = githubContext;

    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(text===''){
            showAlert();
            return;
        }
        setUsers(text);
        setText('')
    }
    const clearHandler = (e) => {
        e.preventDefault();
        clearUsers();
    }
    return (
        <Fragment>
            {showAlertMsg && <div className="badge bg-danger mx-3">Please enter something then search</div>}
            <form className="mx-3 form-text" onSubmit={onSubmit}>
                <input type="text" placeholder="Search Users.." className="input" value={text} onChange={onChange}/>
                <input type="submit" className="btn btn-block btn-dark" value="Search"></input>
                { users.length > 0  && <button onClick={clearHandler} className="btn btn-block btn-light">Clear</button>}
            </form>
        </Fragment>
        
    )
    
}

export default Search

