"use client";
import React, { useEffect, useState } from "react";
import LatestBlogs from "./LatestBlogs";

import "react-loading-skeleton/dist/skeleton.css";

interface BlogData {
  title: string;
  published_date: string;
  featured_image: string;
  fimg_data?: {
    alt: string;
  };
  content: string;
}

interface BlogPageProps {
  blogData: BlogData;
}

const BlogPage: React.FC<BlogPageProps> = ({ blogData }) => {
  return (
    <div className="">
      <div className="p-3 lg:py-10 lg:px-24 lg:flex gap-5 w-full">
        <div className="lg:w-[73%] p-3 lg:p-3  mb-5 rounded-lg">
          <div className="p-2 lg:p-3 space-y-3">
            <h1 className="text-3xl lg:text-5xl  font-semibold leading-tight">
              {blogData?.title}
            </h1>
            <div>
              <span className="tracking-wider text-lg">
                Published on{" "}
                <span className="text-aqua">
                  {new Date(blogData?.published_date).toLocaleDateString(
                    "en-US"
                  )}
                </span>
              </span>
            </div>
            <img
              className="w-full"
              src={blogData?.featured_image}
              alt={blogData?.fimg_data?.alt}
            />
            {/* <div>
            <ShareButton
              url={`${domain}${blogData?.slug}?id=${blogData?.id}`}
            />
          </div> */}
            <div
              className="space-y-3 text-lg "
              dangerouslySetInnerHTML={{
                __html: blogData?.content,
              }}
            ></div>
            {/* <div>
            <ShareButton
              url={`${domain}${blogData?.slug}?id=${blogData?.id}`}
            />
          </div> */}
          </div>
        </div>

        <div className="h-[100%] lg:w-[27%] p-3 lg:p-5 bg-white sticky top-24 rounded-lg font-title">
          <LatestBlogs />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
