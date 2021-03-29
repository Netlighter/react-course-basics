import { Component } from "react";
import { Posts } from "./Posts";

class Collection extends Component {
  state = {
    posts: [
      {id: 'pne001', name: 'JS Noob'},
      {id: 'pne002', name: 'JS Pro'},
      {id: 'pne003', name: 'Fullstack Senior'},
    ],
  }

  // drop funcs to the deep end
  handleSth = () => {
    console.log('Collection.jsx setState update')
  }

  removePost = (id) => {
    this.setState({posts: 
      this.state.posts.filter(post => post.id !== id
      )})
  }

  render() {
    // деструктуризация стейтов
    // (позволяет сокращать длину обращений)
    const {posts} = this.state;

    return (
      <div>
        {posts.map(post => (
          <h2 key={post.id}>{post.name}</h2>
        ))}

        {/* drop it down as callback */}
        <Posts rm={this.removePost} posts={posts} cb={this.handleSth}/>
      </div>
    )
  }
}

export default Collection