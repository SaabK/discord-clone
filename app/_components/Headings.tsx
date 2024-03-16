import { cn } from "@/lib/utils/cn";
import { Coda } from "next/font/google";
import React from "react";

const coda = Coda({ weight: ["400", "800"], subsets: ["latin"] });

export interface HeadingsProps {
    className?: string;
    children: string;
}

export const SmallHeading = ({ className, children }: HeadingsProps) => {
    return (
        <h3
            className={cn(
                "text-xs text-lightGrey uppercase",
                coda.className,
                className
            )}
        >
            {children}
        </h3>
    );
};
