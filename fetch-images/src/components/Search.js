import React from 'react';

class Search extends React.Component {

  state = { term: '' }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default Search;
