'use strict';
const logger = require('./../../applogger');
const {users} = require('./userEntity');

var login = (req, res) => {
  console.log('inside login controller');
  console.log(req.body);
  let username = req.body.username;
  let passwd = req.body.password;
  users.findOne({empId:username}).then((docs) => {
    console.log(docs.userName);
          if(docs.password == passwd) {
            console.log(docs.password + "    " +passwd);
            res.cookie('username', docs.userName);
          res.send(docs);
        }else{
          res.send("mismatch");
        }
        }, (err) => {
          console.log(err);
            res.send("invalid_data", err);
        });
};

var logout = (req, res) => {
  console.log('Session deleted');
     req.session.destroy();
     res.send({redirect: '/'});
}

module.exports = {
  login,
  logout
};
