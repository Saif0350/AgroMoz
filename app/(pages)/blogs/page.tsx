import Blogsection from "@/components/Blogs/Blogsection";
import React from "react";

export async function getallblogs() {
  try {
    const response = await fetch(
      `${process.env.BACKEND}/wp-json/getAll/blogs?per_page=10&page=1`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error, "ERROR FETCHING BLOGS");
  }
}

const Page = async () => {
  const blogs = await getallblogs();
  return (
    <div>
      <Blogsection data={blogs} />
    </div>
  );
};

export default Page;
