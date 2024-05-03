import { Link } from 'react-router-dom'


const BlogList = ({blogs, title}) => {

  return (
    <div className="blog-list">
        <h2>{title}</h2>
      {blogs.map((blog) => ( // '(' indicates a return statement
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <h3>Written by {blog.author}</h3>
            </Link>
            
          </div>
        )
      )}
    </div>
  );
};

export default BlogList;
