import './App.css';
import React from 'react';
import Axios from 'axios';
import Followers from './components/Followers';

class App extends React.Component {
  state = {
    user: [],
    followers: []
  }

  componentDidMount() {
    Axios
      .get('https://api.github.com/users/StephanieEnciso')
      .then((response) => {
        console.log(response.data);
        this.setState({
          user: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })

    Axios
      .get('https://api.github.com/users/StephanieEnciso/followers')
      .then((response) => {
        console.log(response.data);
        this.setState({
          followers: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })


    
  }

 render() {
  return (
    <div className="App App-header">
      <h1>Git Hub User</h1>
      <div className = 'user-container'>
        <img src = {this.state.user.avatar_url} alt = {this.state.user.name}/>
        <div className = 'userInfo'>
          <h3>Name: {this.state.user.name}</h3>
          <p>Username: {this.state.user.login}</p>
          <p>Bio: {this.state.user.login}</p>
          <p>Followers: {this.state.user.followers}</p>
          <p>Following: {this.state.user.following}</p>
        </div>
      </div>
      
      <Followers followers = {this.state.followers}/>
    </div>
  );
 }
}

export default App;
