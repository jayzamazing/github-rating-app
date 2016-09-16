var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var reducers = require('./reducers');
//create store that uses repositoryReducer to handle actions dispatched
var store = createStore(reducers.repositoryReducer, applyMiddleware(thunk));


module.exports = store;
