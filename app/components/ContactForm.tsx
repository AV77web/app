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

const inputClassName =
    "w-full rounded-lg bg-zinc-800 px-4 py-3 text-zinc-100 outline-none transition focus:ring-2 focus:ring-zinc-600";

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
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Nome */}
            <div className="flex flex-col gap-3">
                <label
                    htmlFor="name"
                    className="text-base font-medium text-zinc-100"
                >
                    Nome
                </label>

                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
                <label
                    htmlFor="email"
                    className="text-base font-medium text-zinc-100"
                >
                    Email
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                />
            </div>

            {/* Messaggio */}
            <div className="flex flex-col gap-3">
                <label
                    htmlFor="message"
                    className="text-base font-medium text-zinc-100"
                >
                    Messaggio
                </label>

                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={8}
                    required
                    className={`${inputClassName} min-h-[180px] resize-y`}
                />
            </div>

            {/* Bottone */}
            <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-lg bg-zinc-700 px-6 py-3 text-center font-medium text-zinc-100 transition hover:bg-zinc-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
                {status === "sending"
                    ? "Invio in corso..."
                    : "Invia Messaggio"}
            </button>

            {/* Messaggi */}
            {status === "success" && (
                <p className="text-sm text-green-400">
                    Messaggio inviato correttamente!
                </p>
            )}

            {status === "error" && (
                <p className="text-sm text-red-400">
                    Errore durante l&apos;invio del messaggio.
                </p>
            )}
        </form>
    );
}
