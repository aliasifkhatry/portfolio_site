// /app/blog/page.tsx
import blogPosts from "../lib/BlogData";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";

export default function BlogIndex() {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}