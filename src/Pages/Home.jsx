import React, { useEffect, useState } from 'react'
import Slider from '../cmp/Slider'
import SectionTitle from '../cmp/SectionTitle'
import Card from '../cmp/Card'
import { Link } from 'react-router-dom'
import Loader from './../cmp/Loader';


const Home = () => {
  const [allBlogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(()=>{
    fetchBlog()
  }, [])
  
  const fetchBlog=async ()=>{
    setLoading (true)
  const blogs = await fetch("https://jsonplaceholder.typicode.com/posts")
  const result = await blogs.json()
  const popularBlogs = result.slice(0, 5)
   setBlogs(popularBlogs)
   setLoading(false)
}


  return (
    <div>
    <Slider/>
    <section className='container mx-auto mt-5'>
    <SectionTitle mainTitle ="Recent Blogs" subTitle="Most views blogs"/>
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
      <div className='flex justify-center m-5'>
      <Link to={"/blog"}><button className="btn btn-secondary  bg-red-300 text-center block">View More</button></Link>
      </div>  
    
    </section>
  <section className='container mx-auto mt-5 mb-5'>
  <SectionTitle mainTitle={"Contact Us"} subTitle={"Get in Touch"}/>
  <div className='flex justify-center mt-5'>
  <input type="text" placeholder="Email us" className="input input-bordered input-primary w-full max-w-xs" />
  <button className='btn btn-warning ml-2'>Send</button>
  </div>
  </section>
 </div>
  )
}

export default Home