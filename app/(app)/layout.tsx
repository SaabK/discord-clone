"use client";

import { getUser } from "@/lib/features/user/userThunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch();
    const { authenticated } = useAppSelector((state) => state.user);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        (async () => {
            setIsLoading(false);
            await dispatch(getUser());
        })();

        if (!isLoading) {
            if (authenticated) {
                router.push("/channels/me");
                console.log("Authenticated in AppLayout!");
            } else {
                router.push("/login");
                console.log("Not Authenticated in AppLayout!");
            }
        }
    }, [authenticated]);

    return <>{children}</>;
}
