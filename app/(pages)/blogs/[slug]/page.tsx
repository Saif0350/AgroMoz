import React from "react";
import BlogPage from "@/components/Blogs/Blogpage";

const fetchPostData = async (slug) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND}/wp-json/fetch/PostBySlug?slug=${slug}`,
      {
        next: { revalidate: 60 }, // Ensures revalidation for ISR
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blog post. Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching post data:", error);
    return null; // Return null to handle errors gracefully
  }
};

const BlogDetails = async ({ params }) => {
  const { slug } = params;
  const blogdetails = await fetchPostData(slug);

  if (!blogdetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Blog post not found.</p>
      </div>
    );
  }

  return <BlogPage blogData={blogdetails} />;
};

export default BlogDetails;
