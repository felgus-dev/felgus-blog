"use client";

import Link from "next/link";
import { useState } from "react";

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
    name: "felgus.dev",
    path: "/",
  },
};

const fullName = "felipe gustavo";

export function Navbar() {
  const [name, setName] = useState(() => navItems.home.name);

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link
            onMouseEnter={() => setName(fullName)}
            onMouseLeave={() => setName(navItems.home.name)}
            key={navItems.home.name}
            href={navItems.home.path}
          >
            <h1 className="transition-all transition-discrete flex align-middle relative py-1 px-2 m-1 text-xl font-bold">
              {name}
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
