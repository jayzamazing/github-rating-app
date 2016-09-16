//type property
var ADD_REPOSITORY = 'ADD_REPOSITORY';
//action creator, adds repository to list
var addRepository = function(repository) {
  //return action
  return {
    type: ADD_REPOSITORY,
    repository: repository
  }
};
//type property
var RATE_REPOSITORY = 'RATE_REPOSITORY';
//action creator, gives a repository a rating
var rateRepository = function(repository, rating) {
  //return action
  return {
    type: RATE_REPOSITORY,
    repository: repository,
    rating: rating
  };
};
var FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
var fetchDescriptionSuccess = function(repository, description) {
    return {
        type: FETCH_DESCRIPTION_SUCCESS,
        repository: repository,
        description: description
    };
};

var FETCH_DESCRIPTION_ERROR= 'FETCH_DESCRIPTION_ERROR';
var fetchDescriptionError = function(repository, error) {
    return {
        type: FETCH_DESCRIPTION_ERROR,
        repository: repository,
        error: error
    };
};

exports.FETCH_DESCRIPTION_SUCCESS = FETCH_DESCRIPTION_SUCCESS;
exports.fetchDescriptionSuccess = fetchDescriptionSuccess;
exports.FETCH_DESCRIPTION_ERROR = FETCH_DESCRIPTION_ERROR;
exports.fetchDescriptionError = fetchDescriptionError;
exports.ADD_REPOSITORY = ADD_REPOSITORY;
exports.addRepository = addRepository;
exports.RATE_REPOSITORY = RATE_REPOSITORY;
exports.rateRepository = rateRepository;
