// /lib/blogData.ts

export type BlogPost = {
  mediumUrl: string;
  title: string;
  description: string;
  image: string; // e.g. '/blog-covers/cover1.jpg'
};

const blogPosts: BlogPost[] = [
  {
    mediumUrl: "https://medium.com/@aliasifkhatri/lets-see-if-i-can-write-who-i-am-11755b80ed87",
    title: "Let's See If I Can Write Who I Am",
    description: "First few lines or summary of your blog goes here.",
    image: "/blog-covers/blogcover1.webp"
  },
  {
    mediumUrl: "https://medium.com/@aliasifkhatri/my-first-model-un-experience-78f45c1bb0e7",
    title: "My First Model UN Experience",
    description: "First few lines or summary of your blog goes here.",
    image: "/blog-covers/blogcover2.webp"
  },
  {
    mediumUrl: "https://medium.com/@aliasifkhatri/ios-26-a-close-view-and-a-concern-1ffe45a4a608",
    title: "iOS 26: A Close View and a Concern",
    description: "First few lines or summary of your blog goes here.",
    image: "/blog-covers/blogcover3.webp"
  },
  {
    mediumUrl: "https://medium.com/@aliasifkhatri/new-developers-and-ai-3b7ec811408d",
    title: "New Developers and AI",
    description: "First few lines or summary of your blog goes here.",
    image: "/blog-covers/blogcover4.webp"
  }
  ,
  {
    mediumUrl: "https://medium.com/@aliasifkhatri/winning-the-best-delegate-in-my-first-unsc-b5b39daf84af",
    title: "Winning the Best Delegate in My First UNSC",
    description: "On 13th and 14th of September, i got a chance to participate in Achieving Leaders Model United Nations (ALMUN) hosted at Indus University Karachi.",
    image: "/blog-covers/blogcover5.webp"
  }
];

export default blogPosts;