import React, {Component} from 'react';
import Timer from './Timer';
import Clicker from './Clicker';
import Fetcher from './Fetcher';

class App extends Component {

  render() {
    return (
      <div className="App">

        {/* basics */}
        <Clicker />

        {/* more basics */}
        <Fetcher />
       
        {/* advanced */}
        <Timer />

      </div>
    );
  }
}

export default App;
