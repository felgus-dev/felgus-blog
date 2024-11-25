import { BlogPosts } from "app/components/posts";
import { getBlogPostsOfASerie } from 'app/blog/utils';
import { notFound } from "next/navigation";
import { seriesMap } from 'app/blog/series';

export function generateMetadata({ params }) {
  const serie = params?.slug;
  const serieTitle = seriesMap[serie] || '';

  return {
    title: `${serieTitle} serie all posts`,
    description: `All ${serieTitle} blog posts.`,
  }
}

export default function Page({ params }) {
  const serieSlug = params?.slug;
  const serieTitle = seriesMap[serieSlug] || '';
  const posts = getBlogPostsOfASerie(serieSlug);

  if (posts?.length === 0) {
    notFound();
  }

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {`All '${serieTitle}' (${posts?.length} part series)`}
      </h1>
      <BlogPosts posts={posts} />
    </section>
  );
}
