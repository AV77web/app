interface Post {
    slug: string;
    title: string;
    content: string;
}

const blogPosts: Post[] = [
    {
        slug: "primo-post",
        title: "Il mio primo post",
        content: "Questo è il contenuto del primo post...",
    },
    {
        slug: "secondo-post",
        title: "Il mio secondo post",
        content: "Questo è il contenuto del secondo post...",
    },
];

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const post = blogPosts.find((post) => post.slug === slug);

    if (!post) {
        return <div>Post non trovato</div>;
    }

    return (
        <article className="mx-auto max-w-4xl p-8">
            <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
            <p>{post.content}</p>
        </article>
    );
}
