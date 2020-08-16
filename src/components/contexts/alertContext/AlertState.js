import React,{useReducer} from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {REMOVE_ALERT,SET_ALERT} from '../types'


const AlertState = (props) => {
    const initialState= false
    const [state,dispatch] = useReducer(AlertReducer,initialState)
    const showAlert = () =>{
        dispatch({
            type:SET_ALERT
        })
        setTimeout(()=>dispatch({type:REMOVE_ALERT}),4000);
    }
    return (
        <AlertContext.Provider
         value={{
             showAlertMsg:state,
             showAlert
         }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
