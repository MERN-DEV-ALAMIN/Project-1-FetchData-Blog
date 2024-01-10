import React, { useEffect, useState } from 'react'
import Loader from './../cmp/Loader';
import Card from '../cmp/Card'

const Blog = () => {

  const [allBlogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(()=>{
    fetchBlog()
  }, [])
  
  const fetchBlog=async ()=>{
    setLoading (true)
  const blogs = await fetch("https://jsonplaceholder.typicode.com/posts")
  const result = await blogs.json()
  const popularBlogs = result
   setBlogs(popularBlogs)
   setLoading(false)
}

  return (
    <div  className=' flex flex-wrap gap-3 justify-center mt-4'>
    {
      loading ? <Loader/> :
       <>
      {
        allBlogs.map((eachBlog , i) => <Card key={i} blogInfo={eachBlog}/>)
      }
      </>
    }
     
      </div>
  )
}

export default Blog