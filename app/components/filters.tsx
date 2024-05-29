import { getTags } from "@/app/actions/action";
import Search from "@/app/components/search";
import TagFilter from "@/app/components/tag-filter";
import React from "react";

type FilterProps = {
  query: string;
};

export default async function Filters({ query }: FilterProps) {
  const tags = await getTags(query);

  return (
    <div className="mb-6 md:mb-2">
      <div className="mb-4">
        <Search />
      </div>
      <div>
        <TagFilter tags={Array.from(tags)} />
      </div>
    </div>
  );
}
