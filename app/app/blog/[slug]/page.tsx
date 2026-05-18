interface Post {
    slug: string;
    title: string;
    content: string;
};

const blogPosts: Post[] = [
    {
        slug: "primo-post",
        title: "Il mio primo post",
        content: "Questo è il contenuto del mio primo post"
    },
    {
        slug: "secondo-post",
        title: "Il mio secondo post",
        content: "Questo è il contenuto del mio secondo post"
    },
]

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {

    const resolvedeparams = await params;
    const post = blogPosts.find((post) => post.slug === resolvedeparams.slug);

    if (!post) {
        return <div>Post non trovato</div>;
    };

    return (
        <article
            className="mx-auto max-wrxl p-8"
        >
            <h1 className="mb4 text-3xl font-bold">{post.title}</h1>
            <p>{post.content}</p>
        </article>
    )
}