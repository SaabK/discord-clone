"use client";

import { friends } from "@/lib/data";
import React, { useState } from "react";
import Tabs from "./Tabs";

export default function Friends() {
    const [active, setActive] = useState<number | null>(null);

    const handleActive = (index: number) => {
        setActive(index);
    };

    return (
        <menu className="mt-2 space-y-1">
            {friends.map((friend, index) => (
                <Tabs
                    object={friend}
                    index={index}
                    key={index}
                    active={active}
                    handleActive={handleActive}
                    imageClass="w-7 rounded-full"
                />
            ))}
        </menu>
    );
}
