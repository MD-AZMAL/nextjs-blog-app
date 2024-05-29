"use client";

import { Blog } from "@/types";
import Image from "next/image";
import React, { MouseEvent } from "react";

export default function BlogItem({ blog }: { blog: Blog }) {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="flex md:flex-row flex-col gap-2 mb-12 md:mb-0 md:pt-16 md:pb-6 border-b border-b-slate-300 cursor-pointer blog-item group"
    >
      <div className="group-hover:md:scale-110 group-hover:md:-rotate-12 group-hover:md:drop-shadow-2xl group-hover:md:shadow-slate-900 rounded-lg transition-all group-hover:md:-translate-x-10 duration-500 overflow-hidden md:basis-[420px] md:shrink-0">
        <Image
          className="w-full md:w-[420px]"
          src={blog.thumbnail}
          alt={blog.title}
          width={640}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="p-2">
        <h3 className="group-hover:md:scale-125 mb-2 font-bold text-2xl text-brand-text origin-bottom-left transition-all duration-300 scale">
          {blog.title}
        </h3>
        <div className="group-hover:md:scale-90 flex mb-4 origin-top-left transition-all">
          <p className="z-10 pr-2 border-r-2 border-r-slate-400 group-hover:md:border-r-slate-600 text-brand-text text-lg whitespace-nowrap transition-all">
            {new Date(blog.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="group-hover:md:text-brand-text z-10 flex-shrink pl-2 text-ellipsis text-lg text-slate-500 whitespace-nowrap md:whitespace-normal transition-all overflow-hidden">
            {blog.tags.join(", ")}
          </p>
        </div>
        <div className="group-hover:md:scale-110 flex mb-2 origin-top-left transition-all">
          <p className="z-10 text-brand-text">{blog.description}</p>
        </div>
      </div>
    </div>
  );
}
