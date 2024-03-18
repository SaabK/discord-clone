import React from "react";
import Sidebar from "./_components/Sidebar";

export default function MeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Sidebar />
            {children}
        </>
    );
}
