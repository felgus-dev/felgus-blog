import { BlogPosts } from "app/components/posts";
import { getBlogPosts } from 'app/blog/utils';
import Link from 'next/link';
import { MyLink } from "./components/myLink";

export default function Page() {
  const allPosts = getBlogPosts();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Felipe Gustavo's blog
      </h1>
      <p className="mb-4">
        {`Hey, I’m Felipe, a Frontend engineer and React enthusiast, based in São Paulo, Brazil. 
      Specialized in building high-quality user interfaces and frontend web 
      applications. With high interest in the javascript ecosystem, state management libraries, 
      fine-grained reactivity, tech product solutions and API design, here 
      I will share ideas and experiences about web and technology in general.`}
      </p>
      <p className="mb-4">
        At the moment, building <MyLink href="https://github.com/felgus-dev/use-zod">useZod</MyLink> and doing a deep dive in backend development.
      </p>
      <h2 className="text-2xl font-semibold mt-16">last posts:</h2>
      <div className="my-8">
        <BlogPosts posts={[allPosts[0], allPosts[1], allPosts[2]]} />
      </div>
      <Link href="/blog" style={{ border: 'solid 1px', borderRadius: '5px', padding: '.4rem' }}>see all blog posts</Link>
    </section>
  );
}
