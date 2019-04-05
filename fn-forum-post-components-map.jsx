function postComponentsMap(posts) {
  return posts.map(p => <Post author={p.author} comment={p.comment} />)
}
