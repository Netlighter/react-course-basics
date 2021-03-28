import { Component } from "react";

class Fetcher extends Component {
  state = {
      loading: true,
      comments: [],
    };

  // действия при монтировании 
  // (иммутабельны, лучше избегать проверок стейтов)
  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(data => this.setState({posts: data, loading: false}))

    this.timerId = setInterval(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(resp => resp.json())
      .then(data => this.setState({comments: data}))  
    }, 3000)
  }
  // отследить обновление
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    // remove timer to reduce lag
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        {this.state.loading ? <h3>Loading...</h3> : 
        <h3>{this.state.posts.length} posts was loaded.</h3>}
      </div>
    );
  }  
}

export default Fetcher