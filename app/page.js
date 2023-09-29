"use client"
import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import BlogCard from '@/components/cards/BlogCard'
import Tag from '@/components/cards/Tag'

export default function Home() {
const [posts, setPosts] = useState([])
const [selectedTags, setSelectedTags] = useState([])
const [error, setError] = useState(null)


useEffect(()=>{
  const fetchData = async () => {

    try {
      const data = await axios.get("/backend/posts")
      setPosts(data.data)
    } catch (error)  {
      setError("Sorry, there was an error while fetching the posts.")
    }

  }
}, [])


if (posts?.length === 0){
  return <div className='text-center text-red-300'>No posts found...</div>
}


if (error){
    return (
      <div className='text-center text-3xl mt-10'>
        <img src='#' alt='error' className='w-96'></img>
      </div>
    )
}

  return (
   <main className='min-h-screen p-10 lg:p-20'>
    <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-10 flex justify-center items-center'>
      <span className='text-5xl border-b-4 pb-3 font-bold'>Random Blog Name for Now</span>
      <p className='text-lg mt-10'>Like, share and sub for more content</p>
    </h2>


   </main>
  )
}
