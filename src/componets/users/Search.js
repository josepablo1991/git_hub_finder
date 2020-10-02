import React, {useState, useContext} from 'react';
// import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
 const Search = () => {

   //Initialize github GithubContext
   const githubContext = useContext(GithubContext)
   const alertContext = useContext(AlertContext)

   const [text, setText] = useState('')

  //this way we are able to type with in the Search box
  // this is a componet level state
  // [event.target.name] this gets the name of the input form
  const onChange = (event) => setText(event.target.value)


  // this is the option if we where not to use arrow functions we have to bind on the
  // form tag

  const onSubmit = e  => {
    e.preventDefault();
    // console.log(this.state.text);

    if(text ===''){
      alertContext.setAlert('Please enter something','light')
    } else {
      githubContext.searchUsers(text)
      setText('')
    }
  }

    return (
      <div>
        <form onSubmit={onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            value={text}
            onChange={onChange}
            />
          <input type= 'submit' value='Search' className='btn btn-dark btn-block'/>
        </form>
        {githubContext.users.length > 0 && (
          <button className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}>
          Clear
          </button>
        )}
      </div>
    );

}

export default Search ;
