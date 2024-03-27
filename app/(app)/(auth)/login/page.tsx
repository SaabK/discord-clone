import React from "react";
import LoginCard from "./_components/LoginCard";

export default function Login() {
    return (
        <section
            className="bg-no-repeat min-h-screen w-full text-white flex justify-center items-center"
            style={{ background: "url('/drawing_background.svg')" }}
        >
            <LoginCard />
        </section>
    );
}
