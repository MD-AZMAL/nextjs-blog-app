import BlogsList from "@/app/components/blogs-list";
import Filters from "@/app/components/filters";
import { SearchParams } from "@/types";

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  const query = decodeURIComponent(searchParams.query ?? "");
  const tags = decodeURIComponent(searchParams.tags ?? "")
    .split(",")
    .filter((tag) => tag != "");

  return (
    <div className="mx-auto p-4 md:p-0 w-full max-w-screen-lg">
      <h1 className="mb-8 font-bold text-4xl text-brand-text">Blogs</h1>
      <Filters query={query} />
      <BlogsList query={query} tags={tags} />
    </div>
  );
}
