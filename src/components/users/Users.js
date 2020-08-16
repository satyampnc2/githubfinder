import React,{useContext} from 'react'
import User from './User'
import GithubContext from '../contexts/githubContext/githubContext'
const Users = (props) => {
    const {users} = useContext(GithubContext) ;
    return (
        <div className="container">
            <div className="grid-3">
            {
                users.map(user => <User key={user.id} name={user.login} img={user.avatar_url} profileLink={user.html_url} />)
            }
            </div>
        </div>
        
    )
}

export default Users
