// /lib/blogData.ts
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage?: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: "why-i-love-react",
    title: "Why I Love React",
    description: "A deep dive into why React is my favorite frontend framework.",
    date: "April 5, 2025",
    coverImage: "/images/react-blog.jpg",
  },
  {
    slug: "dark-mode-ui-design",
    title: "Dark Mode UI Design Tips",
    description: "How to implement dark mode effectively in your web apps.",
    date: "March 28, 2025",
    coverImage: "/images/darkmode.jpg",
  },
  {
    slug: "nextjs-optimizations",
    title: "Next.js Performance Optimizations",
    description: "Speeding up your Next.js applications with these tips.",
    date: "March 20, 2025",
    coverImage: "/images/nextjs.jpg",
  },
];

export default blogPosts;