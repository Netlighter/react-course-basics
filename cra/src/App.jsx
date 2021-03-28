import React, {Component} from 'react';
import Timer from './components/Timer';
import Clicker from './components/Clicker';
import Fetcher from './components/Fetcher';
import Collection from './components/Collection';



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

        {/* last important */}
        <Collection />

      </div>
    );
  }
}

export default App;
