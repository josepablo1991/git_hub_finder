// all actions come in here

 import React, { useReducer} from 'react';
 import axios from 'axios';
 import GithubContext from './githubContext';
 import GithubReducer from './githubReducer';

// import all types
 import {
   SEARCH_USERS,
   SET_LOADING,
   CLEAR_USERS,
   GET_USER,
   GET_REPOS
 } from '../types';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET
}

// Here we define our initial global state for anything related to github
 const GithubState = props => {
   const initialState ={
     users:[],
     user:{},
     repos:[],
     loading:false
   }

   // we have to distpatch an action to our reducer once an action has been requested
   const [state,dispatch] = useReducer(GithubReducer,initialState);

   // search users


     // Search github users
     const searchUsers = async (text) => {
       setLoading();
       // console.log(text);
       const res = await axios.get(
         `https://api.github.com/search/users?q=${text}
         &client_id=${githubClientId}
         &client_secret=${githubClientSecret}`
       );
       // setUsers(res.data.items);

       // res.data is sent to the reducer for it to modify the state
       dispatch({
         type: SEARCH_USERS,
         payload: res.data.items
       })
     }

   //Get User

   const getUser = async (username) =>{
     setLoading()
     // console.log(text);
     const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
     dispatch({
       type:GET_USER,
       payload: res.data
     })
   }

   // Get repos

   //Get user repos
   const getUserRepos = async (username) =>{
     setLoading()
     // console.log(text);
     const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:acc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);

      dispatch({
        type:GET_REPOS,
        payload:res.data
      })
   }


   //Clear users

   //Clear users from state
   const clearUsers = ()=>{
     dispatch({ type:CLEAR_USERS })
   }

   //Set Loading

   const setLoading = () => {
     //The reducer catches this
     dispatch({ type: SET_LOADING })
   }

   // we have to wrap the application in a provider
   return <GithubContext.Provider
   // anything we want available in the entire app we have to pass to value
    value ={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      searchUsers,
      clearUsers,
      getUser,
      getUserRepos
    }}
   >


      {props.children}

    </GithubContext.Provider>
 }

 export default GithubState;
