import Link from "next/link";

const navItems = {
  blog: {
    name: "blog",
    path: "/blog",
  },
  rss: {
    name: "rss",
    path: "/rss",
  },
  home: {
    name: "felgus",
    path: "/",
  },
};

export function Navbar({ path }: { path: string }) {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link key={navItems.home.name} href={navItems.home.path}>
            <h1 className="transition-all delay-300 flex align-middle relative py-1 px-2 m-1 text-xl font-bold hover:decoration-solid hover:decoration-[1.6px] hover:underline hover:decoration-red-700 hover:underline-offset-2">
              {`${navItems.home.name}.${path}`}
            </h1>
          </Link>
          <div className="flex flex-row space-x-0 pr-10">
            <Link
              key={navItems.blog.name}
              href={navItems.blog.path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              {navItems.blog.name}
            </Link>
            <Link
              key={navItems.rss.name}
              href={navItems.rss.path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              {navItems.rss.name}
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
