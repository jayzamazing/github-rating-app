var redux = require('redux');
var createStore = redux.createStore;

var reducers = require('./reducers');
//create store that uses repositoryReducer to handle actions dispatched
var store = createStore(reducers.repositoryReducer);


module.exports = store;
