import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Navbar from "./cmp/Navbar"
import NotFound from "./Pages/NotFound";
import BlogDetails from "./Pages/BlogDetails";

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blog/:id" element={<BlogDetails/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
