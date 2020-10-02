// Thi has all the actions that decide what your app should do


import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';


// A reducer is a function that has a state and an action
//Distpatch includes a Type and a posible payload
export default (state,action) => {
  // to evaluate the type we use a switch()+
  switch(action.type) {
    case SEARCH_USERS:
      return{
        ...state,
        users: action.payload,
        loading:false
      }
    case SET_LOADING:
      return {
        ...state, // the ... makes a copy of the state
        loading:true
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      }
      case GET_USER:
        return {
          ...state,
          user : action.payload,
          loading: false
        }
        case GET_REPOS:
          return {
            ...state,
            repos : action.payload,
            loading: false
          }
    default:
      return state;
  }

};
