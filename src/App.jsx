import { useEffect, useState } from "react";


export default function App() {
  const [users, setUsers] = useState([]);
  const [blogs, setBlogs] = useState([]);



  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    }


    fetchUsers();
  }, []);


  useEffect(() => {
    async function fetchBlogs() {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
    }


    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blog</h1>


      {/* Users Section */}
      <section>
        <h2>Users</h2>
        {users.map((user, index) => (
          <div key={index}>
            {user.name} - {user.email}
          </div>
        ))}
      </section>

      {/* Blogs Section */}
      <section>
        <h2>Blog Posts</h2>
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <p><strong>Author:</strong> {blog.author}</p>
              <p><small>Published on: {new Date(blog.createdAt).toLocaleDateString()}</small></p>
              {blog.tags && blog.tags.length > 0 && (
                <p><strong>Tags:</strong> {blog.tags.join(", ")}</p>
              )}
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </section>
    </div>
  );
}
 
