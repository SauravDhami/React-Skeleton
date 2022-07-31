import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <h1>
        <Link to="/teams/1">Blog1</Link>
      </h1>
      <h1>
        <Link to="/teams/1">Blog2</Link>
      </h1>
      <h1>
        <Link to="/teams/1">Blog3</Link>
      </h1>
    </div>
  )
}
export default Blog
