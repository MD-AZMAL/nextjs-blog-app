"use server";

import { Blog, FilterAccumulator } from "@/types";
import { redirect } from "next/navigation";

export async function filterBlogs(query: string, tags: string[]) {
  "use server";

  const params: URLSearchParams[] = [];

  if (query) {
    const queryParams = new URLSearchParams([
      ["query", encodeURIComponent(query)],
    ]);

    params.push(queryParams);
  }

  if (tags.length) {
    const tagsParams = new URLSearchParams([
      ["tags", encodeURIComponent(tags.join(","))],
    ]);
    params.push(tagsParams);
  }

  redirect(`/?${params.join("&")}`);
}

export async function getBlogs(query: string, tags: string[]): Promise<Blog[]> {
  const response = await fetch(
    "https://static.staticsave.com/blogs/blogs.json"
  );

  const blogs: Blog[] = await response.json();
  let filteredBlogs: Blog[] = [];

  if (query) {
    const filteredBlogsByProperties = blogs.reduce(
      (acc, blog) => {
        if (blog.title.toLowerCase().includes(query.toLowerCase())) {
          acc.title.push(blog);
          return acc;
        }

        if (
          blog.tags.some(
            (tag) =>
              query.toLowerCase().includes(tag.toLowerCase()) ||
              tag.toLowerCase().includes(query.toLowerCase())
          )
        ) {
          acc.tags.push(blog);
          return acc;
        }

        if (blog.description.toLowerCase().includes(query.toLowerCase())) {
          acc.description.push(blog);
          return acc;
        }

        return acc;
      },
      {
        title: [],
        tags: [],
        description: [],
      } as FilterAccumulator
    );

    filteredBlogs = filteredBlogs.concat(
      [
        filteredBlogsByProperties.title,
        filteredBlogsByProperties.tags,
        filteredBlogsByProperties.description,
      ].flat()
    );
  } else {
    filteredBlogs = blogs;
  }

  if (tags.length > 0) {
    const tagsSet = new Set(tags.map((tag) => tag.toLowerCase()));

    filteredBlogs = filteredBlogs.filter((blog) =>
      blog.tags.some((tag) => tagsSet.has(tag.toLowerCase()))
    );
  }

  return filteredBlogs;
}

export async function getTags(query: string): Promise<Set<string>> {
  const blogs = await getBlogs(query, []);

  return new Set(blogs.map((blog) => [...blog.tags]).flat());
}
