import Link from "next/link";

interface Post {
    slug: string;
    title: string;
    excerpt: string;
}

const blogPosts: Post[] = [
    {
        slug: "primo-post",
        title: "Il mio primo post",
        excerpt: "Una breve introduzione al mio primo post...",
    },
    {
        slug: "secondo-post",
        title: "Il mio secondo post",
        excerpt: "Qualcosa di interessante sul secondo post...",
    },
    {
        slug: "terzo-post",
        title: "Il mio terzo post",
        excerpt: "Un altro post interessante da leggere...",
    },
];

export default function BlogPage() {
    return (
        <div className="mx-auto max-w-4xl p-8">
            <h1 className="mb-8 text-3xl font-bold">Blog</h1>

            <div className="space-y-6">
                {blogPosts.map((post) => (
                    <article
                        key={post.slug}
                        className="rounded-lg bg-zinc-800 p-6"
                    >
                        <h2 className="mb-2 text-xl font-bold">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="transition-colors hover:text-zinc-300"
                            >
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-zinc-400">{post.excerpt}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}

