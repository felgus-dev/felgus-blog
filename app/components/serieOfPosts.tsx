import { getBlogPostsOfASerie } from 'app/blog/utils';
import Link from 'next/link'
import { seriesMap } from 'app/blog/series'

export function SerieOfPosts({postSlug, serie = ''}: { postSlug: string, serie?: string}) {
  const posts = getBlogPostsOfASerie(serie || '');
  const serieTitle = seriesMap[serie] || '';
  if(posts?.length === 0) return null;

  return (
    <section className={
      `w-3/4 mx-auto p-4 rounded-lg 
      shadow-md bg-neutral-50 dark:bg-neutral-800
      flex flex-col space-y-1 border 
      border-slate-200 my-12`}>
      <Link className="text-xl font-bold" href={`/series/${serie}`}>{`'${serieTitle}' (${posts?.length} part series)`}</Link>
      {
        posts.map((post, index) => (
          <Link className={`
          text-neutral-900 dark:text-neutral-100 
          tracking-tight ${post.slug === postSlug ? "font-bold" : ""}`} 
          key={post.slug} href={`/blog/${post.slug}`}>{`${index + 1}. ${post.metadata.title}`}</Link>
        ))
      }
    </section>
  )
}