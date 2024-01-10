import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
    const [blog, setBlog] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetchData(id)
    }, [])

    const fetchData = async (rcvId) => {
        const blog = await fetch(`https://jsonplaceholder.typicode.com/posts/${rcvId}`)
        const result = await blog.json()
        setBlog(result)
    }
console.log(blog)
   
  return (
    <div>
    <div className="card card-side bg-base-100 shadow-xl container mx-auto m-6">
       <div className="card-body">
       <p className='badge badge-primary'>{blog.id}</p>
      <h2 className="card-title">{blog.title}</h2>
      <p>{blog.body}</p>
      <div className="card-actions justify-end">
        <Link to="/blog"><button className="btn btn-primary">go back</button></Link>
      </div>
    </div>
  </div>
    </div>
  )
}

export default BlogDetails