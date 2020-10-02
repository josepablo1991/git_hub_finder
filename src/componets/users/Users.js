//_cer
// import React, { Component } from 'react';
import React, {useContext}  from 'react';

import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

 const Users = ()=> {
   const githubContext = useContext(GithubContext);

   const {loading , users} = githubContext;

    if(loading){
      return <Spinner/>
    } else{
      return (
        <div style={userStyle}>
          {users.map(user => (
            <UserItem key={user.id} user={user}/>
          ))}
        </div>
      );
    }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns:'repeat(3,1fr)',
  gridGap: '1rem'
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading:PropTypes.bool.isRequired
}

export default Users ;


// Since now we are passing down the users from the app we take this state out
// state = {
//   users: [
//     {
//       id:'1',
//       login:'mojombo',
//       avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//       html_url: 'https://github.com/mojombo'
//     },
//     {
//       id:'2',
//       login:'fsf',
//       avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//       html_url: 'https://github.com/mojombo'
//     },
//     {
//       id:'3',
//       login:'sfsfsfsf',
//       avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//       html_url: 'https://github.com/mojombo'
//     }
//   ]
// }


/////////// As a class compnent

// class Users extends Component {
//
//
//   render() {
//     return (
//       <div style={userStyle}>
//         {this.props.users.map(user => (
//           <UserItem key={user.id} user={user}/>
//         ))}
//       </div>
//     );
//   }
//
// }
//
// const userStyle = {
//   display: 'grid',
//   gridTemplateColumns:'repeat(3,1fr)',
//   gridGap: '1rem'
// }
