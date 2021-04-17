export function Post (props) { // funcs used without state and lifecycle
  const { name, cb, rm, id } = props;
  // makes it very pretty
  return (//don't forget when enter the line
    <h2 onClick={cb}>
      {name} 
      <button onClick={() => rm(id)}>
        delete!
      </button>
    </h2>
  )
    
}