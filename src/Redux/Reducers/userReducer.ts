import { ADD_USER } from "../Types/users";

const initialState = {
  users: [
    { fname:"gyanendra", lname:"verma", email: "gyanendrav2@gmail.com", password: "gyan123", role: "admin" },
    { fname:"niraj", lname:"bhattariya", email: "niraj@gmail.com", password: "niraj", role: "user" },
    { fname:"raju", lname:"singh",email: "raju@gmail.com", password: "123", role: "user" },
    { fname:"govind", lname:"tomar", email: "govind@gmail.com", password: "123", role: "user" },
  ],
};

const userReducer = (state = initialState, action:any)=>{
    const newState = {...state}
    switch(action.type){
      case ADD_USER:
        {
          return newState;
        }
        default:{
          return newState;
        }
        
    }
}

export default userReducer;