'use strict';
const logger = require('./../../applogger');
const {users} = require('../users/userEntity');

var updateStatus = (req, res) => {
  let userId = req.body.userId;
  let scenarioId = req.body.scenarioId;
  let status = req.body.status;
  console.log(userId);
  console.log(scenarioId);
  console.log(status);

//   users.find({empId: userId}).then((docs) => {
//             console.log('inside route', JSON.stringify(docs));
//             res.send(docs[0].statusInfo);
//         }, (err) => {
//             res.send('Cant get the docs', err);
//         });
//
// }

// users.find({empId:userId}, function(err, user) {
//   if (err) throw err;

  // change the users location
  // user[0].status.scenarioId = status;
  // console.log(user[0].statusInfo);
  // console.log(user[0].statusInfo.find({scenarioId:'1',status:'def'}));

users.update({'empId':userId,'statusInfo.scenarioId': scenarioId},
{'$set': {'statusInfo.$.status':status}},
 {"multi": true}),function(err){console.log(err);}

//   Person.update({'items.id': 2}, {'$set': {
//     'items.$.name': 'updated item2',
//     'items.$.value': 'two updated'
// }}, function(err) { ...

  // save the user
  // users.save(function(err) {
    // if (err) throw err;
  //
    console.log('User successfully updated!');
  // });

// });
}



module.exports = {
  updateStatus
};
