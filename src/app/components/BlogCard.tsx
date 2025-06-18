// /components/BlogCard.tsx
import Link from "next/link";

interface BlogCardProps {
  blog: {
    slug: string;
    title: string;
    description: string;
    date: string;
    coverImage?: string;
  };
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-white/10 bg-black/10 dark:text-white text-gray-900">
      {blog.coverImage && (
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-40 object-cover brightness-90 hover:brightness-100 transition-all duration-300"
        />
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold">{blog.title}</h3>
        <p className="text-sm text-gray-400 mt-1">{blog.date}</p>
        <p className="mt-2 text-gray-300 dark:text-gray-300 text-gray-700">{blog.description}</p>
        <Link href={`/blog/${blog.slug}`}>
          <button className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-md hover:from-purple-700 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-200">
            Read more →
          </button>
        </Link>
      </div>
    </div>
  );
}