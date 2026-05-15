import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return <>
        <h1>Contatti</h1>
        <Link href="/about">About</Link>
        <Image src="/globe.svg" alt="Immagine globo"></Image>
    </>
}