// app/blog/page.js
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
        title: "Il mio secodo post",
        excerpt: "Qualcosa d interessante sul secondo post..."
    },
    {
        slug: "terzo post",
        title: "il mio terzo post",
        excerpt: "Un altro post interessante da leggere..."
    }
];

export default function BlogPage() {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl 
        font-bold mb-8">Blog</h1>;
            <div className="space-6">
                {blogPosts.map((post) => (
                    <article key={post.slug} className="p-6 bg-zinc-800 rounded-lg">
                        < h2 className="text-xl font-bold mb-2">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="hover:text- zinc-300 transition-colors">
                                {post.title}
                            </Link>
                        </h2>
                    </article>
                ))}
            </div >
        </div >
    )
}