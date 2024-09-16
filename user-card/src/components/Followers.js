import React from 'react';

class Followers extends React.Component {
   

   render() {
     return (
        <>
         <h2>Followers</h2>
         <div className = 'followers'>
          
          {this.props.followers.map(follower => (
            <div key = {follower.id} className = 'followerDiv'>
              <img src = {follower.avatar_url} alt = {follower.login} />
              <p>Username: {follower.login}</p>
            </div>
            ))}
         </div>
        </>
     )}
    
}

export default Followers;