import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    // console.log(blogs);
    
    return (
        <div>
            <h2 className='text-2xl'>Total : {blogs.length}</h2>
            <div className='grid md:grid-cols-2 justify-center'>
                {
                    blogs.map((blog) => <Blog 
                    key={blog.id}
                    blog={blog} 
                    handleBookmark={handleBookmark}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;