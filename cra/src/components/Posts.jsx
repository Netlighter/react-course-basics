import {Post} from './Post'

export function Posts (props) {
  return <div>
    {
      props.posts.map(post => (
        <Post 
          rm={props.rm} 
          key={post.id} 
          id={post.id}
          name={post.name} 
          cb={props.cb}
        />
      ))
    }
  </div>
}