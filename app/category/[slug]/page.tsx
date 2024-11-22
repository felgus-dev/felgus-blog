import { BlogPosts } from "app/components/posts";
import { getBlogPostsPerCategory } from 'app/blog/utils';
import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
  const category = params?.slug;

  return {
    title: `#${category} Category`,
    description: `All ${category} blog posts.`,
  }
}

export default function Page({ params }) {
  const posts = getBlogPostsPerCategory(params?.slug);

  if (posts?.length === 0) {
    notFound();
  }

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        All #{params?.slug} posts
      </h1>
      <BlogPosts posts={posts} />
    </section>
  );
}
