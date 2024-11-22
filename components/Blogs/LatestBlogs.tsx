"use client";

// import { BLOG_BACKEND } from "@/app/page";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featured_media_url?: string;
  fimg_data?: {
    alt: string;
  };
}

const LatestBlogs: React.FC = () => {
  const [latestBlog, setLatestBlog] = useState<Blog[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchGalleryData = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND}/wp-json/getAll/blogs?per_page=3&page=1`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const result = await response.json();
      console.log(result, "blog");
      setLatestBlog(result.posts);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!latestBlog) {
      fetchGalleryData();
    }
  }, [latestBlog]);

  return (
    <div className="">
      <h2 className="mb-5 font-semibold text-2xl">LATEST POST</h2>
      {loading ? (
        <>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="pb-3">
                <Skeleton
                  height={"120px"}
                  baseColor="#4B5563"
                  highlightColor="#848482"
                />
                <Skeleton
                  count={3}
                  baseColor="#4B5563"
                  highlightColor="#848482"
                />
              </div>
            ))}
        </>
      ) : (
        <>
          {latestBlog?.slice(0, 3)?.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md text-black p-3 rounded-lg mb-2"
            >
              {/* <Link href={`/blog/${item?.blog_title}?id=${item?.id}`}> */}
              <Link href={`/blogs/${item.slug}`}>
                <div className="h-[120px] rounded-lg overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-all ease-in-out hover:scale-105"
                    src={
                      item?.featured_media_url
                        ? item.featured_media_url
                        : "/placeholder.webp"
                    }
                    alt={item?.fimg_data?.alt}
                  />
                </div>
                <div className="py-2 space-y-2">
                  <h2 className="text-[1.1rem] leading-snug font-semibold line-clamp-1">
                    {item.title}
                  </h2>
                  <div
                    className="text-xs text-gray-800 font-semibold line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: item.excerpt }}
                  ></div>
                  <span className="text-aqua text-xs">
                    Published by{" "}
                    <Link href={"/"} className="text-primary">
                      Agro Moz
                    </Link>{" "}
                    on {new Date(item.date).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default LatestBlogs;
