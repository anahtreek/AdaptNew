const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  empId: {
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    default: 'User',
    required: true,
  },
  teamName: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true
  },
  completedDomain: {
        type: Array,
      default: []
  },
  completedScenario: [ {
    domainName: [ {
      scenarioName: {
        type: String,
        default: ""
      }
      }
    ]
  }],
  currentDomain: {
    type: String,
    default: ''
  },
  currentScenario: {
    type: String,
    default: ''
  },
  score: {
    type: Number,
    default: 0
  },
  statusInfo:
  [
    {
      // type: Array,
      // default: []
          scenarioId: {
              type: String,
              default: ""
          },
          status: {
              type: String,
              default: ""
          }
    }
  ]
});
let users = mongoose.model('users', schema);
module.exports = {
  users: users
};
