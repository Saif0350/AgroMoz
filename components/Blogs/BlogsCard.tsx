"use client";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  items: {
    slug: string;
    featured_media_url?: string;
    title: string;
    excerpt: string;
    date: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ items }) => {
  // console.log(items,"items");

  return (
    <div className="overflow-hidden bg-bl border shadow-md flex flex-col max-w-xl group">
      <Link href={`/blogs/${items.slug}`}>
        <div className="overflow-hidden">
          <img
            className="w-full object-cover aspect-[4/2.5] transition-transform duration-500 ease-in-out group-hover:scale-110"
            src={
              items.featured_media_url
                ? items.featured_media_url
                : "/placeholder.webp"
            }
            alt="image"
          />
        </div>
      </Link>
      <div
        className="relative  p-4  shadow-lg   m-4"
        style={{ boxShadow: "3px 3px 10px rgba(255, 255, 255, 0.5)" }}
      >
        <Link
          href={`/blogs/${items.slug}`}
          className="font-semibold text-lg inline-block hover:text-primary transition duration-500 ease-in-out mb-2"
        >
          <h2 className="line-clamp-1">{items.title}</h2>
        </Link>
        <div
          dangerouslySetInnerHTML={{ __html: items.excerpt }}
          className="text-gray-500 text-base line-clamp-4 transition duration-500 ease-in-out group-hover:text-black font-medium"
        ></div>
        <p className="mt-5 text-gray-700 font-bold text-sm">
          Published on{" "}
          <span className="text-xs text-primary transition duration-500 ease-in-out">
            {new Date(items.date).toLocaleDateString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
