// /lib/blogData.ts
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage?: string;
  content?: string; // Markdown content
};

const blogPosts: BlogPost[] = [
  {
    slug: "why-i-love-react",
    title: "Why I Love React",
    description: "A deep dive into why React is my favorite frontend framework.",
    date: "April 5, 2025",
    coverImage: "/images/react-blog.jpg",
    content: `# Why I Love React\nReact makes building UIs a breeze.\n\n## Features\n- Component-based\n- Declarative\n- Huge ecosystem\n\n**React** lets you build fast, interactive apps!`,
  },
  {
    slug: "dark-mode-ui-design",
    title: "Dark Mode UI Design Tips",
    description: "How to implement dark mode effectively in your web apps.",
    date: "March 28, 2025",
    coverImage: "/images/darkmode.jpg",
    content: `# Dark Mode UI Design Tips\nDark mode is more than just inverting colors.\n\n- Use softer backgrounds\n- Adjust contrast\n- Test with real users\n\n> Good dark mode = happy eyes!`,
  },
  {
    slug: "nextjs-optimizations",
    title: "Next.js Performance Optimizations",
    description: "Speeding up your Next.js applications with these tips.",
    date: "March 20, 2025",
    coverImage: "/public/me_bw.png",
    content: `# Next.js Performance Optimizations\nNext.js is fast, but you can make it faster!\n\n- Use Image Optimization\n- Enable Incremental Static Regeneration\n- Analyze your bundle size\n\n**Optimize for the best user experience!**`,
  },
];

export default blogPosts;