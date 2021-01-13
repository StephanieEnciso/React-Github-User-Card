import React from 'react';

class Followers extends React.Component {
   

   render() {
     return (
        <div>
          <h3>Followers</h3>
          {this.props.followers.map(follower => (
            <div key = {follower.id}>
              <img src = {follower.avatar_url} alt = {follower.name} />
              <h3>{follower.login}</h3>
            </div>
            ))}
        </div>
     )}
    
}

export default Followers;