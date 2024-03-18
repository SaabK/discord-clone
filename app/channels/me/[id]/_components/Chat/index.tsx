import React from "react";
import dyno from "../../../../../assets/profiles/dyno.webp";
import Image from "next/image";
import ChatInput from "./ChatInput";
import Messages from "./Messages";

export default function Chat() {
    return (
        <section className="bg-grey w-full text-white relative !max-h-screen overflow-clip flex flex-col justify-between">
            <div className="p-3 border-b-2 border-darkGrey/60 flex gap-3 items-center">
                <Image src={dyno} alt="dyno" className="rounded-full w-6" />
                <h3 className="font-semibold">Dyno</h3>
            </div>

            <Messages />

            <ChatInput />
        </section>
    );
}
