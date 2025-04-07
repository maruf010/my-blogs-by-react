import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog,handleBookmark }) => {
    // console.log(handleBookmark);
    
    // const {blog} = props;
    // console.log(blog);

    return (
        <div className='m-10'>
            <div className="card bg-base-100 w-96 shadow-sm mx-auto">
                <figure>
                    <img src={blog.cover} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="author flex justify-around items-center">
                        <h3 className='text-lg font-medium'>{blog.author}</h3>
                        <img className='w-12' src={blog.author_img} alt="" />
                        <button onClick={() => handleBookmark(blog)}>
                            <FaBookmark  size={25}/>
                        </button>
                    </div>
                    <h2 className="card-title">{blog.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className='flex'>
                        {
                            blog.hashtags.map((hash) => <p>{hash}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Mark as Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;