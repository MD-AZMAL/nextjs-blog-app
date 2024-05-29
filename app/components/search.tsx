"use client";

import { filterBlogs } from "@/app/actions/action";
import debounce from "@/lib/utils";
import React from "react";

export default function Search() {
  const handleChange = debounce<React.ChangeEvent<HTMLInputElement>>(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      await filterBlogs(e.target.value as string, []);
    },
    400
  );

  return (
    <div className="flex items-center gap-2 border-slate-300 px-4 py-2 border rounded-md">
      <input
        name="favorite"
        onChange={handleChange}
        type="text"
        className="focus:outline-none py-2 w-full"
        placeholder="Search by title, tag, or description"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
  );
}
