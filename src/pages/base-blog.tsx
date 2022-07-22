import { Link } from 'react-router-dom'

const Base = () => {
  return (
    <div>
      <header>
        <h1>This is base hello</h1>
      </header>
      <h1>
        <Link to="/teams/1">Blog1</Link>
      </h1>
      <h1>
        <Link to="/teams/1">Blog2</Link>
      </h1>
      <h1>
        <Link to="/teams/1">Blog3</Link>
      </h1>
      <footer></footer>
    </div>
  )
}
export default Base
