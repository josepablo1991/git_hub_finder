import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({match}) => {
  const githubContext = useContext(GithubContext);
  const {user,loading,getUser, getUserRepos,repos} = githubContext;


// adding a [] in the end is vital because if not it falls into a loop
  useEffect(()=>{
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // this following comment is to disable the warning
    // eslint-disable-next-line
  }, []);


    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      public_repos,
      public_gists,
      hirable,
      following,
      company
    } = user


    if(loading) return <Spinner/>

    return (
      <Fragment>
        <Link to ='/' className ='btn btn-light'>
          Back to Search
        </Link>
        Hierable: {' '}
        {hirable ?( <i className='fas fa-ckeck text-success'/>):
        (<i className='fas fa-times-circle text-danger'/>)}
        <div className="card grid-2">
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt=''
              style={{width: '150px'}}
            />
            <h1>{name}</h1>
            <p>Location:{location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                {bio}
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>Visit Git hub profile</a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {login && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {login && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-danger'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists {public_gists}</div>
        </div>
        <Repos repos={repos}/>
      </Fragment>
  )
}

// User.propTypes = {
//   getUserRepos: PropTypes.func.isRequired,
//   repos: PropTypes.array.isRequired
// }

export default User ;


//Object example

// {
// "login": "josepablo1991",
// "id": 29590875,
// "node_id": "MDQ6VXNlcjI5NTkwODc1",
// "avatar_url": "https://avatars2.githubusercontent.com/u/29590875?v=4",
// "gravatar_id": "",
// "url": "https://api.github.com/users/josepablo1991",
// "html_url": "https://github.com/josepablo1991",
// "followers_url": "https://api.github.com/users/josepablo1991/followers",
// "following_url": "https://api.github.com/users/josepablo1991/following{/other_user}",
// "gists_url": "https://api.github.com/users/josepablo1991/gists{/gist_id}",
// "starred_url": "https://api.github.com/users/josepablo1991/starred{/owner}{/repo}",
// "subscriptions_url": "https://api.github.com/users/josepablo1991/subscriptions",
// "organizations_url": "https://api.github.com/users/josepablo1991/orgs",
// "repos_url": "https://api.github.com/users/josepablo1991/repos",
// "events_url": "https://api.github.com/users/josepablo1991/events{/privacy}",
// "received_events_url": "https://api.github.com/users/josepablo1991/received_events",
// "type": "User",
// "site_admin": false,
// "name": null,
// "company": null,
// "blog": "",
// "location": null,
// "email": null,
// "hireable": null,
// "bio": null,
// "twitter_username": null,
// "public_repos": 6,
// "public_gists": 0,
// "followers": 0,
// "following": 0,
// "created_at": "2017-06-21T05:02:24Z",
// "updated_at": "2020-09-02T02:16:38Z"
// }
