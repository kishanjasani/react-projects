import React from 'react';

class Search extends React.Component {

  onInputChange = event => {
    console.log(event.target.value);

  }

  onSubmit = event => {
    event.preventDefault();
    console.log('Submited');
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onClick={this.onInputClick} onSubmit={this.onSubmit} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default Search;
