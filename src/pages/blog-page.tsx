import { useParams } from 'react-router-dom'

const Blog = () => {
  const { id } = useParams()
  return <h1>hello single blog page is {id}</h1>
}
export default Blog
