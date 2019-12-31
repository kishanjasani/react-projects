import React from 'react';
import Search from './Search'

class App extends React.Component {

  onSearchSubmit = term => {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <Search onSubmit={this.onSearchSubmit} />
      </div>
    )
  }

}

export default App;
