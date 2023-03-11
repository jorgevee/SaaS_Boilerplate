// This is the page where we will display the blog posts.
import Link from "next/link";
import { use } from "react";
import { client, GET_BLOGS } from "../graphql/quries";

interface Blog {
  id: string;
  attributes: {
    title: string;
    slug: string;
  };
}

interface Blogs {
  data: Blog[];
}

async function getBlogs() {
  const blogs = await client.request(GET_BLOGS);
  // error handling

  return blogs;
}

export default async function Home() {
  const { blogs } = await getBlogs();
  return (
    <div className="container mx-auto">
      <h1 className="text-lg font-bold bg-center">Blog</h1>
      {blogs.data.map((blog: any) => (
        <div
          key={blog.id}
          className="my-4 bg-slate-200 p-4 rounded shadow hover:shadow-lg"
        >
          <Link
            href={`/blog/${blog.attributes.slug}`}
            className="text-grey-500 hover:text-blue-600 border-b-2 border-blue-600"
          >
            {blog.attributes.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
