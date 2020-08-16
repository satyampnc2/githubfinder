import React,{useReducer} from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {SEARCH_USERS,GET_REPOS,GET_USER,SET_LOADING,CLEAR_USERS} from '../types'
const GithubState = (props) => {
    const initialState = {
        users:[],
        user:{},
        loading:false,
        repos:[]
    }
    const [state,dispatch] = useReducer(GithubReducer,initialState);
    
    //Get users
    const setUsers = async (text) => {
        dispatch({
            type:SET_LOADING
        })
        const fetchedUsers = await axios.get(`https://api.github.com/search/users?q=${text}`);
        dispatch({
            type:SEARCH_USERS,
            payload:fetchedUsers.data.items
        })
    }

    //Get individual users
    const getUser = async (login) => {
        dispatch({type:SET_LOADING});
        const fetchedUser = await axios.get(`https://api.github.com/users/${login}`);
        dispatch({
            type:GET_USER,
            payload:fetchedUser.data
        })
    }

    //Get repos
    const getRepos = async (login) => {
        const repos = await axios.get(`https://api.github.com/users/${login}/repos`);
        dispatch({
            type:GET_REPOS,
            payload:repos.data
        })
    }

    //Clear users
    const clearUsers = () => {
        dispatch({type:CLEAR_USERS})
    }
    return (
        <GithubContext.Provider
            value={{
                users:state.users,
                user:state.user,
                loading:state.loading,
                repos:state.repos,
                setUsers,
                getUser,
                getRepos,
                clearUsers
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState
