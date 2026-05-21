import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Portfolio from './Portfolio'
import Internship from './Internship'
import Blog from './Blog'
import BlogPost from './BlogPost'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Portfolio />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}
