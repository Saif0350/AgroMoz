"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "@/components/Blogs/BlogsCard";
import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import Footer from "@/components/HeaderAndFooter/Footer";

import Banner from "../Banner";

interface Blog {
  slug: string;
  featured_media_url?: string;
  title: string;
  excerpt: string;
  date: string;
}

interface BlogSectionProps {
  data: {
    posts: Blog[];
  };
}

const BlogSection: React.FC<BlogSectionProps> = ({ data }) => {
  const blogs = data.posts;

  return (
    <div className=" ">
      <Banner title="Blogs" bgImg="/services/5.jpg" page="Blog" />
      {/* <h3 className="text-center text-4xl">Our Blogs</h3> */}
      <div className="p-5 md:mt-7 mt-4 lg:p-12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {blogs.map((item, index) => (
          <BlogCard key={index} items={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
