"use client";

import Image from "next/image";
import { servers } from "@/lib/data";
import Server from "./Server";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

export default function Navigation() {
    const [active, setActive] = useState(0);

    function handleActive(index: number): void {
        setActive(index);
    }

    return (
        <nav className="bg-darkGrey h-screen w-max fixed p-3">
            <div
                className={cn(
                    "channel hover:bg-discordBlue",
                    active === 0 && "active !bg-discordBlue"
                )}
                onClick={() => handleActive(0)}
            >
                <Image
                    fill // Remove this & try to remove the relative from the item
                    alt="Discord"
                    src="/discord.png"
                    className="p-2"
                />
            </div>

            <hr className="w-2/3 border-grey border rounded-full mx-auto mt-2" />

            <menu className="space-y-2 my-2">
                {servers.map((server, index) => (
                    <Server
                        key={index}
                        server={server}
                        handleActive={handleActive}
                        index={index + 1} // Add one because there is already a button with index 0
                        active={active}
                    />
                ))}
            </menu>
        </nav>
    );
}
