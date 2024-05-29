"use client";

import { filterBlogs } from "@/app/actions/action";
import debounce, { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

type TagFilterProps = {
  tags: string[];
};

export default function TagFilter({ tags }: TagFilterProps) {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(
    new Set<string>([])
  );

  const searchParams = useSearchParams();

  const encodedQuery = searchParams.get("query");
  const encodedTags = searchParams.get("tags");

  const query = encodedQuery ? decodeURIComponent(encodedQuery) : "";

  const debouncedTagQuery = debounce<string[]>(async (tags: string[]) => {
    await filterBlogs(query, tags);
  }, 200);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const tag = e.target.getAttribute("data-tag");

    if (!tag) return;

    if (e.target.checked) {
      selectedTags.add(tag);
      setSelectedTags(new Set(selectedTags));
    } else {
      selectedTags.delete(tag);
      setSelectedTags(new Set(selectedTags));
    }

    debouncedTagQuery(Array.from(selectedTags));
  };

  useEffect(() => {
    setSelectedTags(
      new Set(encodedTags ? decodeURIComponent(encodedTags).split(",") : [])
    );
  }, [encodedTags]);

  return (
    <div className="flex flex-wrap justify-start items-center gap-2">
      <p className="px-2 py-1 text-lg whitespace-nowrap">Filter by tags :</p>
      {tags.map((tag) => (
        <div key={tag.split(" ").join("_")}>
          <input
            type="checkbox"
            className="hidden peer"
            id={`tag-${tag.split(" ").join("_").toLowerCase()}`}
            onChange={handleChange}
            value={tag}
            data-tag={tag}
          />
          <label
            htmlFor={`tag-${tag.split(" ").join("_").toLowerCase()}`}
            className={cn(
              "block px-2 py-1  cursor-pointer text-brand-text bg-brand-highlight-50 rounded-full",
              {
                "bg-brand-accent text-white": selectedTags.has(tag),
              }
            )}
          >
            {tag}
          </label>
        </div>
      ))}
    </div>
  );
}
