import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/navbar'

function App() {

  const [bookmark, setBookmark] = useState([]);
  const [readingCount,setReadingCount] = useState(0);

  const handleBookmark = (blog) => {
    setBookmark([...bookmark, blog])
  }
  // console.log(bookmark);

  const handleMarkAsRead = (time,id) => {
    const newTime = readingCount + time;
    setReadingCount(newTime)
    // console.log(id);
    handleRemoveFromBookmark(id)
  }
  
  const handleRemoveFromBookmark = (id) => {
    const remainingBookmark = bookmark.filter((mark) => mark.id !== id);
    // console.log(remainingBookmark);
    setBookmark(remainingBookmark)
    
  }
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="main-container flex text-center gap-2 m-4">
          <div className="left-container w-[70%] border border-cyan-400 rounded-2xl">
            <Blogs
              handleBookmark={handleBookmark}
              handleMarkAsRead={handleMarkAsRead}
            ></Blogs>
          </div>
          {/* right container */}
          <div className="right-container w-[30%] border border-cyan-400 rounded-2xl">
            <h3>Reading time : {readingCount}</h3>
            <h3>Bookmark Count : {bookmark.length}</h3>
            <div className='mt-5'>
              {
                bookmark.map((marked) => <p key={marked} className='bg-emerald-200 mt-2 py-5'>{marked.title}</p>)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
