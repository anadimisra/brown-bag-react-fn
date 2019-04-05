function Post(props){
  return (
  <div>
    <Author author={props.author} />
    <Comment comment={props.comment} />
  </div>
  )
}

function Author(props) {
  return (
  <div>
    {authorComponents(props.author)}
  </div>
  )
}

function Comment(props) {
  return (
  <div>
    {props.comment}
  </div>
  )
}
