import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    // console.log(blogs);
    
    return (
        <div>
            <h2 className='text-2xl'>Total Blog : {blogs.length}</h2>
            <div className='grid lg:grid-cols-2 justify-center'>
                {
                    blogs.map((blog) => <Blog 
                    key={blog.id}
                    blog={blog} 
                    handleBookmark={handleBookmark}
                    handleMarkAsRead={handleMarkAsRead}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;