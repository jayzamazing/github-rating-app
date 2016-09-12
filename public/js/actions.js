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
var rateRepository = function(respository, rating) {
  //return action
  return {
    type: RATE_REPOSITORY,
    repository: repository,
    rating: rating
  };
};

exports.ADD_REPOSITORY = ADD_REPOSITORY;
exports.addRepository = addRepository;
exports.RATE_REPOSITORY = RATE_REPOSITORY;
exports.rateRepository = rateRepository;
