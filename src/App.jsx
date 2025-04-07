import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/navbar'

function App() {

  const [bookmark, setBookmark] = useState([]);

  const handleBookmark = (blog) => {
    setBookmark([...bookmark, blog])
  }
  console.log(bookmark);

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="main-container flex text-center gap-2 m-4">
          <div className="left-container w-[70%] border border-cyan-400 rounded-2xl">
            <Blogs handleBookmark={handleBookmark}></Blogs>
          </div>
          {/* right container */}
          <div className="right-container w-[30%] border border-cyan-400 rounded-2xl">
            <h3>Reading time : 0</h3>
            <h3>Bookmark Count : 0</h3>
            <div className='mt-5'>
              {
                bookmark.map((marked) => <p className='bg-emerald-200 mt-2'>{marked.title}</p>)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
