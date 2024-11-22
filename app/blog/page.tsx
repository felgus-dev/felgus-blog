import { BlogPosts } from "app/components/posts";
import { getBlogPosts } from 'app/blog/utils';

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  const allPosts = getBlogPosts();

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        All blog posts
      </h1>
      <BlogPosts posts={allPosts} />
    </section>
  );
}
