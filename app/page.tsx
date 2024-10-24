import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Felgus' blog
      </h1>
      <p className="mb-4">
      {`Hey, I’m Felipe, a React enthusiast and frontend engineer, 
      specialized in building high-quality user interfaces and frontend web 
      applications. With great interest in javascript ecosystem, state management libraries, 
      fine-grained reactivity, tech products solutions and API design, 
      I will share here ideas and experiences about web and technology in general.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
