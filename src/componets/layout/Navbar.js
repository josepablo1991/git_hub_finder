// import React, { Component } from 'react';
import React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


// here we are destructurizing
const Navbar = ({icon,title}) => {

    return (
      <nav className='navbar bg-primary'>
        <h1>
        <i className= {icon}/> {title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    );

}

Navbar.defaultProps ={
  title : 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}



export default Navbar;

//_cer



// class Navbar extends Component {
//
//   // default props will take place in case no properties
//   // are defined or specified either with in the componet
//   //or at the app.js level
//
//   static defaultProps ={
//     title : 'Github Finder',
//     icon: 'fab fa-github'
//   };
//
//   //This works as a checker so the corret data types are passed
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
//   }
//
//   render() {
//     return (
//       <nav className='navbar bg-primary'>
//         <h1>
//         <i className= {this.props.icon}/> {this.props.title}
//         </h1>
//       </nav>
//     );
//   }
//
// }
