import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import React, { useState } from "react";

interface TabsProps {
    index: number;
    object: any;
    active: number | null;
    handleActive: Function;
    imageClass?: string;
}

export default function Tabs({
    index,
    object,
    active,
    handleActive,
    imageClass,
}: TabsProps) {
    return (
        <li
            key={index}
            className={cn(
                "flex items-center gap-3.5 px-2.5 py-2 opacity-80 cursor-pointer hover:opacity-100 hover:bg-slate-100/10 group rounded hover:brightness-150",
                active === index && "bg-slate-100/10 brightness-150 opacity-100"
            )}
            onClick={() => handleActive(index)}
        >
            <Image
                src={object.icon}
                alt={object.name}
                className={cn("w-6", imageClass)}
            />
            <span className="text-white/50 font-light group-hover:text-white/70 ">
                {object.name}
            </span>
        </li>
    );
}
