"use client";

import React, { useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const { authenticated } = useAppSelector((state) => state.user);

    useEffect(() => {
        if (authenticated) router.push("/channels/me");
    }, [authenticated]);

    return <>{children}</>;
}
