import {useEffect, useState} from 'react'
import BlogList from './BlogList'
import useFetchData from './useFetchData';

const Home = () => {
    const {data: blogs, isPending, error} = useFetchData('http://localhost:8000/blogs');

    return (
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs = {blogs} title = 'All Blogs'></BlogList>}
      </div>
    );
  }
   
  export default Home;