var React = require('react');
var connect = require('react-redux').connect;
var Repository = require('./repository');

var RepositoryList = React.createClass({
  addRepository: function() {
    var repositoryName = this.refs.repositoryName.value;
    //TODO: add repository to state
  },
  render: function() {
    var repositories = this.props.repositories.map(function(repository) {
      return <Repository repository={repository} key={repository.name} />;
    });
    return (
            <div className="repository-list">
                {repositories}
                <input type="text" ref="repositoryName" />
                <button type="button" onClick={this.addRepository}>
                    Add repository
                </button>
            </div>
    );
  }
});
//function to describe how the different parts of the state should be inserted
var mapStateToProps = function(state, props) {
    //each key is a single prop to be added to wrapped component
    return {
        repositories: state
    };
};
//create factory returning container component wrapping repositorylist component
var Container = connect(mapStateToProps)(RepositoryList);

module.exports = Container;
