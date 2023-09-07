import axios from 'axios'
import { LOAD_ADMIN,CLEAR_SUCCESSA, REGISTER_ADMIN,FAIL_ADMIN,CURRENT_ADMIN,CLEAR_ERRORSA,LOGOUT_ADMIN,LOGIN_ADMIN} from '../ActionsType/Admin'



export const registerAdmin = (newAdmin) => async (dispatch) => {
    dispatch ({type : LOAD_ADMIN})
    try {
        let result = await axios.post("/api/Admin/registerAdmin" , newAdmin)
        dispatch({type : REGISTER_ADMIN , payload : result.data})
    } catch (error) {
        dispatch ({type : FAIL_ADMIN , payload : error.response.data.errors})
        
    }
}


export const currentAdmin = () => async (dispatch) => {
    dispatch ({ type : LOAD_ADMIN})
    
    try {
     const config = {
         headers : {
             authorization : localStorage.getItem("token")       
         } 
     }
     console.log()
     let result = await axios.get("/api/Admin/currentAdmin" , config)
     dispatch ({ type : CURRENT_ADMIN , payload : result.data})
    } catch (error) {
        console.log(error)
        
    }
    
    }



export const loginAdmin = (admin) => async (dispatch) => {
    dispatch ({type : LOAD_ADMIN})
    
    try {
        let result = await axios.post("/api/Admin/LoginAdmin" , admin)
        dispatch ( { type : LOGIN_ADMIN , payload : result.data})
        
    } catch (error) {

        console.log(error)
    }
}
export const logoutAdmin = () => async (dispatch) => {
    dispatch ({ type : LOGOUT_ADMIN})
}
export const clearErrorsA = () => {
    return {
        type : CLEAR_ERRORSA
    }
}


export const  clearSuccessA = () => {
    return {
        type : CLEAR_SUCCESSA
    }
}