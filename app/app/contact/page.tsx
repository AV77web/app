import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <main className="mx-auto w-full max-w-4xl flex-1 px-8 py-12">
            <h1 className="mb-4 text-4xl font-bold text-zinc-100">Contattaci</h1>
            <p className="mb-10 text-lg text-zinc-400">
                Compila il form sottostante per metterti in contatto con noi.
            </p>
            <ContactForm />
        </main>
    );
}
