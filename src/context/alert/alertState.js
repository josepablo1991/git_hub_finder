// all actions come in here

 import React, { useReducer} from 'react';
 import AlertContext from './alertContext';
 import AlertReducer from './alertReducer';

// import all types
 import {
   SET_ALERT,
   REMOVE_ALERT
 } from '../types';


// Here we define our initial global state for anything related to github
 const AlertState = props => {
   const initialState = null;

   // we have to distpatch an action to our reducer once an action has been requested
   const [state,dispatch] = useReducer(AlertReducer,initialState);

   //Set Alert
   const setAlert = (msg,type) =>{
     dispatch({
        type:SET_ALERT,
        payload: {msg, type}
     });
     // Make the message disapear
     setTimeout(()=>{
      dispatch({
        type:REMOVE_ALERT
      })
     },5000)

   }



   // we have to wrap the application in a provider
   return <AlertContext.Provider
   // anything we want available in the entire app we have to pass to value
    value ={{
      alert: state,
      setAlert
    }}
   >


      {props.children}

    </AlertContext.Provider>
 }

 export default AlertState;
