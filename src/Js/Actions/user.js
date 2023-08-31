// imporrtation

import axios from 'axios'
import {  FAIL_USER, LOAD_USER, LOGIN_USER,  REGISTER_USER ,LOGOUT_USER, CLEAR_ERRORS, CLEAR_SUCCESS } from '../ActionsType/user'


// register user 

export const register = (newUser) => async (dispatch) => {
    dispatch ({type : LOAD_USER})
    try {
        let result = await axios.post("/api/User/register" , newUser)
        dispatch({type : REGISTER_USER , payload : result.data})
        console.log()
    } catch (error) {
        dispatch ({type : FAIL_USER , payload : error.response.data.errors})
        
    }
}
export const login = (user) => async (dispatch) => {
    dispatch ({type : LOAD_USER})
    
    try {
        let result = await axios.post("/api/User/login" , user)
        dispatch ( { type : LOGIN_USER , payload : result.data})
        console.log()
        
    } catch (error) {

        dispatch ({type : FAIL_USER , payload : error.response.data.errors})
    }
}
export const logout = () => async (dispatch) => {
    dispatch ({ type : LOGOUT_USER})
}

    
    





export const clearErrors = () => {
    return {
        type : CLEAR_ERRORS
    }
}


export const  clearSuccess = () => {
    return {
        type : CLEAR_SUCCESS
    }
}


