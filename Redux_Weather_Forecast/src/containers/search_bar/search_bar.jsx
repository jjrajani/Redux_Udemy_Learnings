import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          onChange={this.onInputChange}
          placeholder="Get a five-day forecast in your favorite cities"
          value={this.state.term}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

  onInputChange = (e) => {
    this.setState({term: e.target.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.resetForm();
  }

  resetForm() {
    this.setState({ term: '' });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
/*
  null represents mapStateToProps which is always the first arguemnt of connect,
  mapDispatchToProps is always the second argument
 */
export default connect(null, mapDispatchToProps)(SearchBar);
