function App(props) {
  return (
    <div>
      <Title title={props.title} />
      <Subject subject={props.subject} />
      <PostList posts={props.posts} />
    </div>
  )
}

function Title(props) {
  return <h2>{props.title}</h2>
}

function Subject(props) {
  return (
    <div>
      <em>{props.subject}</em>
    </div>
  )
}

function PostList(props) {
  return (
    <div>
      {postComponents(props.posts)}
    </div>
  )
}
