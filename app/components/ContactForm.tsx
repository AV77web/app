//====================================
// File: ContactForm.tsx
// modulo contatti
// @author: "villari.andrea@libero.it"
// @version: "1.0.0 2026-05-18"
//====================================

"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<FormStatus>("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setStatus("sending");

        try {
            // Simulazione API
            await new Promise((resolve) => setTimeout(resolve, 1000));

            console.log("Messaggio inviato:", formData);

            setStatus("success");

            // Reset form
            setFormData({
                name: "",
                email: "",
                message: "",
            });

            // Reset stato
            setTimeout(() => {
                setStatus("idle");
            }, 3000);

        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <section className="w-full py-16 px-4 bg-gray-100">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">

                {/* Titolo */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Contattaci
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Compila il form e ti risponderemo al più presto.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                >

                    {/* Nome */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-700"
                        >
                            Nome
                        </label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Mario Rossi"
                            required
                            className="
                                w-full
                                rounded-xl
                                border
                                border-gray-300
                                px-4
                                py-3
                                text-gray-800
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-200
                            "
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@example.com"
                            required
                            className="
                                w-full
                                rounded-xl
                                border
                                border-gray-300
                                px-4
                                py-3
                                text-gray-800
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-200
                            "
                        />
                    </div>

                    {/* Messaggio */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="message"
                            className="text-sm font-medium text-gray-700"
                        >
                            Messaggio
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Scrivi qui il tuo messaggio..."
                            rows={6}
                            required
                            className="
                                w-full
                                rounded-xl
                                border
                                border-gray-300
                                px-4
                                py-3
                                text-gray-800
                                outline-none
                                transition
                                resize-none
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-200
                            "
                        />
                    </div>

                    {/* Bottone */}
                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="
                            w-full
                            rounded-xl
                            bg-blue-600
                            px-6
                            py-3
                            text-white
                            font-semibold
                            transition
                            hover:bg-blue-700
                            disabled:cursor-not-allowed
                            disabled:opacity-70
                        "
                    >
                        {status === "sending"
                            ? "Invio in corso..."
                            : "Invia messaggio"}
                    </button>

                    {/* Messaggi */}
                    {status === "success" && (
                        <div
                            className="
                                rounded-lg
                                bg-green-100
                                border
                                border-green-300
                                px-4
                                py-3
                                text-green-700
                                text-sm
                            "
                        >
                            Messaggio inviato correttamente!
                        </div>
                    )}

                    {status === "error" && (
                        <div
                            className="
                                rounded-lg
                                bg-red-100
                                border
                                border-red-300
                                px-4
                                py-3
                                text-red-700
                                text-sm
                            "
                        >
                            Errore durante l'invio del messaggio.
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}