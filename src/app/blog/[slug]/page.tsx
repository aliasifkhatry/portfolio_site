// /app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import blogPosts from "../../lib/BlogData";
import Link from "next/link";
import Header from "../../components/Header";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = blogPosts.find((post) => post.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto p-6 md:p-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
        >
          ← Back to Blogs
        </Link>

        <h1 className="text-4xl font-bold mt-2 mb-4 text-white">{blog.title}</h1>
        <p className="text-sm text-gray-400 mb-6">{blog.date}</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>{blog.description}</p>
          <p className="mt-4">
            This is where the full article would go. You can integrate Markdown rendering here.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-md hover:from-purple-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Back to All Blogs
          </Link>
        </div>
      </div>
    </>
  );
}