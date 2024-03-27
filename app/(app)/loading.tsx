import Image from "next/image";
import React from "react";

export default function Loading() {
    return (
        <section className="min-h-screen flex flex-col gap-1 items-center justify-center bg-grey text-white text-4xl">
            <Image src="/loading.gif" alt="Loading..." width={60} height={60} />
            <p>Loading ...</p>
        </section>
    );
}
