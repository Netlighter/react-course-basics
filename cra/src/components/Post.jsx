export function Post (props) {
  const {name, cb} = props;
  // makes it very pretty
  return <h2 onClick={cb}>{name}</h2>
}