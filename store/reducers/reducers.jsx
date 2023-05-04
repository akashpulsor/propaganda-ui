import { USER_STATE_CHANGE,
  REGISTER_EXCEPTION, LOGIN_EXCEPTION,
  SEARCH_API_EXCEPTION } from '../../config/constants'

const initialState = {
  currentUser: null,
  loaded: false,
  token:null,
  errorMessage:null
}
  
  export default (state = initialState, action) => {
    let temp = JSON.stringify(action.payload)
    let temp2  = JSON.stringify(action.type);
    console.log( 'Recieved event ' + temp);
    console.log( 'Recieved Type ' + temp2);
    switch(action.type) {
     
      case USER_STATE_CHANGE:
        return {
            ...state,
            currentUser: action.payload.currentUser,
            loaded: action.payload.loaded,
            token: action.payload.token,
            errorMessage:null
        } 
      case REGISTER_EXCEPTION:
        return {
              ...state,
              currentUser: action.payload.currentUser,
              loaded: action.payload.loaded,
              token: action.payload.token,
              errorMessage:action.payload.errorMessage
           
          }   
      case LOGIN_EXCEPTION:
        return {
              ...state,
              currentUser: action.payload.currentUser,
              loaded: action.payload.loaded,
              token: action.payload.token,
              errorMessage:action.payload.errorMessage
             
          }
      case SEARCH_API_EXCEPTION:
        return {
                  ...state,
                  errorMessage:action.payload.error
                 
        }       
      default:
        return state;
    }
    

  }