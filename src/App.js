import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';




export default class App extends Component {
  responseGoogle=(response)=>{
    console.log(response)
    console.log(response.profileObj);
    console.log(response.tokenId);
  }
  render() {
    return (
      <div>
        <GoogleLogin 
          clientId='51082116029-302dq03t5iomfujrfknib2orrqm1ved0.apps.googleusercontent.com'
          buttonText='login'
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          // onClick={()=>this.responseGoogle()}

          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}




