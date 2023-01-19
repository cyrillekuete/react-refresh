import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Lorem ipsume...",
      author: "Tyler",
      id: 1,
    },
    {
      title: "Contains ",
      body: "Contains a lot of blog Posts...",
      author: "Peter",
      id: 2,
    },
    {
      title: "Learning Javascript",
      body: "Am currently learning javascript and its ecosystem",
      author: "Kerry",
      id: 3,
    },
  ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(() => {
        console.log('useEffect Ran');
    },[])

  return (
    <div className="Home">
          <BlogList blogs={blogs} handleDelete={handleDelete} />
          
          
    </div>
  );
};

export default Home;
