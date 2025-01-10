import { useEffect, useState } from "react";

export default function Index() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        async function fetchBlogPosts() {
            const response = await fetch('/api/blog/latest');
            const data = await response.json();
            setBlogPosts(data);
        }
        fetchBlogPosts();
    }, []);

    return (
        <>
            <h1>Blog</h1>
            <ul>
                {blogPosts.map((blogPost) => (
                    <li key={blogPost._id}>
                        <h2>{blogPost.title}</h2>
                        <p>{blogPost.text}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}