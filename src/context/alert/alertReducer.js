// Thi has all the actions that decide what your app should do
import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types';


// A reducer is a function that has a state and an action
//Distpatch includes a Type and a posible payload
export default (state,action) => {
  // to evaluate the type we use a switch()+
  switch(action.type) {
    case SET_ALERT:
      return action.payload
    case REMOVE_ALERT:
      return null
    default:
      return state;
  }

};
