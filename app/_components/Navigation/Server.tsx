import { Server } from "@/lib/types";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface ServerProps {
    server: Server;
    index: number;
    handleActive: Function;
    active: number;
}

export default function Server({
    server,
    handleActive,
    index,
    active,
}: ServerProps) {
    return (
        <li
            className={cn("channel", active === index && "active")}
            onClick={(e) => handleActive(index)}
        >
            <Image fill alt="Discord" src={server.icon} />
        </li>
    );
}
