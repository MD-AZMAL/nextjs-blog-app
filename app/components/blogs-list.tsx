import React from "react";
import BlogItem from "@/app/components/blog";
import Empty from "@/app/components/empty";
import { getBlogs } from "@/app/actions/action";

type BlogsListProps = { query: string; tags: string[] };

export default async function BlogsList({ query, tags }: BlogsListProps) {
  const blogs = await getBlogs(query, tags);

  return (
    <div>
      {blogs.length ? (
        blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
      ) : (
        <Empty message="No blogs found" />
      )}
    </div>
  );
}
