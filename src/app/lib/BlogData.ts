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
    description: "Hello there, this is Ali Asif, from Karachi, Pakistan. Not a great writer and no expertise, but the idea of having an article About Me just fascinated me enough to write this down.",
    image: "/blog-covers/blogcover1.webp"
  },
  {
    mediumUrl: "https://medium.com/@aliasifkhatri/my-first-model-un-experience-78f45c1bb0e7",
    title: "My First Model UN Experience",
    description: "In the last week, I got the opportunity to participate in a Model United Nations Conference. It was hosted at the Heuser College on 23rd and 24th July.",
    image: "/blog-covers/blogcover2.webp"
  },
  {
    mediumUrl: "https://medium.com/@aliasifkhatri/the-paradox-of-faking-7bb9bb3089ac",
    title: "The Paradox of Faking",
    description: "Throughout the history of mankind, the society has evolved and so has the “societal acceptance standard”, well I wasn't a part of that history, but yes, being a part of this current society we can observe a weird paradox today.",
    image: "/blog-covers/blogcover6.webp"
  },
  {
    mediumUrl: "https://medium.com/@aliasifkhatri/ios-26-a-close-view-and-a-concern-1ffe45a4a608",
    title: "iOS 26: A Close View and a Concern",
    description: "After signing up for the beta program of Apple, I was able to download iOS 26 on my phone. There were many new things, many old ones, just rephrased to look new and some unnecessary things.",
    image: "/blog-covers/blogcover3.webp"
  },
  {
    mediumUrl: "https://medium.com/@aliasifkhatri/new-developers-and-ai-3b7ec811408d",
    title: "New Developers and AI",
    description: "after the boom of AI, we have become lazy while coding. First the AI was restricted to its app or the browser so it was still in control, as we had to do an effort to copy the code and paste it to get the solution and then adjust it in our file and all, so we preferred small fixes to be done on own.",
    image: "/blog-covers/blogcover4.webp"
  },
  {
    mediumUrl: "https://medium.com/@aliasifkhatri/winning-the-best-delegate-in-my-first-unsc-b5b39daf84af",
    title: "Winning the Best Delegate in My First UNSC",
    description: "On 13th and 14th of September, i got a chance to participate in Achieving Leaders Model United Nations (ALMUN) hosted at Indus University Karachi.",
    image: "/blog-covers/blogcover5.webp"
  }
];

export default blogPosts;