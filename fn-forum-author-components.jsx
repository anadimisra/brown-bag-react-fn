const name = author => <div>{author.name}</div>

const anonymous = () => <div>anon</div>

const email = author => <div>Email: {author.email}</div>

const location = author => <div>Location: {author.location}</div>

const empty = () => null

const authorComponents = author => [
      author.name ? name(author) : anonymous(),
      author.email ? email(author) : empty(),
      author.location ? location(author) : empty()
    ]
