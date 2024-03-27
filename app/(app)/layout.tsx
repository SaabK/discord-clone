"use client";

import { getUser } from "@/lib/features/user/userThunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch();
    const { authenticated } = useAppSelector((state) => state.user);

    const router = useRouter();

    useEffect(() => {
        dispatch(getUser());
        if (authenticated) {
            router.push("/channels/me");
            console.log("Authenticated in AppLayout!");
        }

        if (!authenticated) {
            router.push("/login");
            console.log("Not Authenticated in AppLayout!");
        }
    }, [authenticated]);

    return <>{children}</>;
}
