import { messages } from "@/lib/data";
import React from "react";
import Message from "./Message";

export default function Messages() {
    return (
        <article className="p-3 space-y-6 overflow-y-auto scroll-smooth scrollbar scrollbar-track-darkGrey scrollbar-thumb-lightGrey/60 mb-16">
            {/* The above works, don't touch it */}
            {messages.map((message, index) => (
                <Message message={message} key={index} />
            ))}
        </article>
    );
}
