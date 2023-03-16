import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
    const {posts} = useLoaderData()
    console.log(posts);
  return (
    <ul className="list-group">
        {
            posts.map((post)=>(
                <Link className="list-group-item" key={post.id} > {post.id} - {post.title} </Link>
            ))
        }
    </ul>
  )
};

export default Blog;

//siempre debe ser una exportación, siempre debe ser promesa (async, await)
export const loaderBlog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return { posts }; //posts: posts
};
