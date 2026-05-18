import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (<main className="max-w-4xl mx-auto p-8">

        <h1 className="text-4xl font-bld mb-6">Contattici</h1>
        <div className="text-lg text-gray-600 mb-8">
            <p>Compila il form sottostante per metterti in contatto con noi.</p>
        </div>
        <ContactForm/>

    </main>)
}