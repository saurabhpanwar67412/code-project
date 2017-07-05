
/* designed by saurabh panwar */
/* let me know before use this component in your website by mail me on saurabhpanwar67412@gmail.com*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import 'react-fontawesome';
/* designed by saurabh panwar */
/* let me know before use this component in your website by mail me on saurabhpanwar67412@gmail.com*/
 
class App extends Component {

  render() {
      return (
      <MuiThemeProvider>
           <div className="App">

         <div className="App-header">
        <h3> Brand Name</h3>    
</div>
        <div className="create-meeting">
                <FloatingActionButton mini={true} className="bttn">
      <ContentAdd /> 
    </FloatingActionButton><h4 className="h1">Create a meeting</h4>        
</div>   
<div className="create-menu">
      <ul>
        
        <a href=""><li><i className="fa fa-bars fa-lg" aria-hidden="true"></i> Meetings</li></a>
        <a href=""><li><i className="fa fa-search fa-lg" aria-hidden="true"></i> Search</li></a>
        <a href=""><li><i className="fa fa-connectdevelop" aria-hidden="true"></i> Connect to Account</li></a>
        <a href=""><li><i className="fa fa-cog fa-lg" aria-hidden="true"></i> Settings</li></a>
        <a href=""><li><i className="fa fa-bullseye fa-lg" aria-hidden="true"></i> configuration</li></a>
        <a href=""><li><i className="fa fa-id-card-o" aria-hidden="true"></i> Templates</li></a>
        <a href=""><li><i className="fa fa-users" aria-hidden="true"></i> Team</li></a>
        <a href=""><li><i className="fa fa-envelope-o" aria-hidden="true"></i> Daily Mail</li></a>
      </ul>
    </div>

              <div className="create-footer">Ask For Help </div>
</div>
</MuiThemeProvider>
    );
  }
}

export default App;
