ReactDOM.render(
  <App title="Functional Forum" subject="What do you think of functional programming?" posts={postsInRange(R.range(0, 5))} />,
  document.getElementById('app')
)
