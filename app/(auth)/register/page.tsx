import React from "react";
import RegisterCard from "./_components/RegisterCard";

export default function Register() {
    return (
        <section
            className="bg-no-repeat min-h-screen w-full text-white flex justify-center items-center"
            style={{ background: "url('/drawing_background.svg')" }}
        >
            <RegisterCard />
        </section>
    );
}
