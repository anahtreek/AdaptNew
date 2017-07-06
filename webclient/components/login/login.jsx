const React = require('react');
const {hashHistory} = require('react-router');
import { Button, Checkbox, Form, Card } from 'semantic-ui-react';
import Cookie from 'react-cookie';
class Login extends React.Component {
   constructor() {
       super();
       this.state = {
         username:'',
         password:'',
         checkDataFromDb: false
       };
       this.checkCredentials = this.checkCredentials.bind(this);
       this.LoginUser = this.LoginUser.bind(this);
   }
handleUserName = (e) => {
 this.setState({username: e.target.value});
}
handlePassword = (e) => {
 this.setState({password: e.target.value});
}

checkCredentials() {
  console.log("checking credentials");
  if(this.state.username == "" || this.state.password == ""){
    return "nodata";
  } else if(this.state.checkDataFromDb) {
    return "invalid";
  }else{
    return "success";
  }
}

LoginUser() {
  console.log("inside login user");
  if(this.checkCredentials() == "nodata"){}else{
    console.log("ajax calling");
    let context = this;
 $.ajax({
   url:"/users/login",
   type: 'POST',
   datatype: 'JSON',
   data:{username :this.state.username,password:this.state.password},
   success: function(res)
   {
     console.log('inside success',res);
    //  console.log('cookie is', Cookie.load('username'));
     if(res == "mismatch" || res == "invalid_data"){
       console.log("mismatch found");
       context.setState({checkDataFromDb: true});
     }else {
     if(res.userType=='User') {
       hashHistory.push('/home');
     }else{
        hashHistory.push('/adminHome');
     }
   }
    }.bind(this),
   error: function(err)
   {
     console.log('inside failure');
     this.setState({checkDataFromDb:true});
     console.log(err.responseText);
   }.bind(this)
 });
 }
}
 render() {
 let alertMessages = '';
   if(this.state.checkDataFromDb) {
     console.log('data mismatch checked after db connection');
       alertMessages = (<div className="alert alert-danger">
  <strong>Credentials Mismatch!</strong>
</div>);
   }
   return(
  //  <div className="Login">
  //       <h2 className="text-center">Login</h2>
  //       <div className="form-group">
  //       <input className="form-control" onChange={this.handleUserName}  placeholder="Enter a User Name..."  type="text" />
  //       </div>
  //       <div className="form-group">
  //       <input className="form-control" onChange={this.handlePassword}  placeholder="Enter a Password..."  type="password" />
  //       </div>
  //       <input className="btn btn-primary btn-block" onClick={this.LoginUser} type="submit" value="Login" />
  //  </div>
<div>
   <div className='formAlign'>
     <h2 className="loginTitle">Login</h2>
     <Form>
      <Form.Field>
        <label>Emp ID</label>
        <input className='formwidth' onChange={this.handleUserName} placeholder="Wipro Emp ID" type="text" required/>
      </Form.Field>

      <Form.Field>
        <label>Password</label>
        <input className='formwidth' onChange={this.handlePassword} placeholder="Password" type="password" required/>
      </Form.Field>
        <Button className="btnColor" onClick={this.LoginUser} type="submit" value="Login" >Sign in</Button>
    </Form><br/>
    {alertMessages}
    </div>
   </div>

   );
 }
}
module.exports = Login;
