const testJSON = require('../test-tools/test.json');
import axios from 'axios';

var barber = '';

var methods = {
  login : function(username, password) {
    //var testJSON = require('../test.json')
    //var jsonObj = JSON.parse(loginJSON);
    //var validPass = JSON.parse('../credentials.json').password;
    if (username == testJSON.login.username && password == testJSON.login.password) { return true; }
    return false;
  },

  getBarber : function(id) {
    return axios.post('https://kysolqk4pc.execute-api.us-east-1.amazonaws.com/beta/findBarber/', {id:id})
    .then(response => {
      barber = response.data;
      //this.setState({ barber });
      return barber;
    })
  },

  getImage : function() {
      return '../test-tools/img/ani.jpg'
  },

  getAllBarbers : function() {
      return testJSON.List;
  },

  search : function(name) {
    return testJSON.search;
  }
}

exports.data = methods;
