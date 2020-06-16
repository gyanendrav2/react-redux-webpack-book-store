import { LOGIN } from "../Types/login"

const initialState = {
    login: {}
}


const userLoginReducer = (state = initialState, action) =>{
    const newState = {...state}
switch(action.type){
    case LOGIN: {
        newState.login = action.payload
        return newState;
    }

     default:{
        return newState;
    }
}
}

export default userLoginReducer;