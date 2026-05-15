export default function About() {
    return (
        <main className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6">Chi Siamo</h1>

            <div className="text-lg text-gray-600 space-y-4 mb-8">
                <p>
                    Siamo un team di sviluppatori appassionati di tecnologia web moderne.
                </p>
                <p>
                    La nostra missione è creare applicazione veloci, scalabili e user-friendly.
                </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded">
                <h2 className="text-s1 font bold mb-4">I Nostri Vaolori</h2>
                <ul className="space-y-2">
                    <li>Qualità del codice</li>
                    <li>Performance first</li>
                    <li>User experience</li>
                </ul>
            </div>
        </main>
    );
}