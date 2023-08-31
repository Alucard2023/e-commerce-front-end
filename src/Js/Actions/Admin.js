import axios from 'axios'
import { LOAD_ADMIN, REGISTER_ADMIN,FAIL_ADMIN,LOGIN_ADMIN} from '../ActionsType/Admin'



export const registerAdmin = (newAdmin) => async (dispatch) => {
    dispatch ({type : LOAD_ADMIN})
    try {
        let result = await axios.post("/api/Admin/registerAdmin" , newAdmin)
        dispatch({type : REGISTER_ADMIN , payload : result.data})
    } catch (error) {
        dispatch ({type : FAIL_ADMIN , payload : error.response.data.errors})
        
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
