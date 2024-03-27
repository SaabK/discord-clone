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
        if (authenticated) router.push("/channels/me");

        // Even if I'm authenticated, I am pushed to the login page. So the best thing to do is to display some kind of message in login or register page.

        if (!authenticated) router.push("/login");
    }, [authenticated]);

    return <>{children}</>;
}
