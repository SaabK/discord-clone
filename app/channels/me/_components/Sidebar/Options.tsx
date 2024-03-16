"use client";

import { meOptions } from "@/lib/data";
import React, { useState } from "react";
import Tabs from "./Tabs";

export default function Options() {
    const [active, setActive] = useState<number | null>(null);

    const handleActive = (index: number) => {
        setActive(index);
    };

    return (
        <menu className="space-y-1">
            {meOptions.map((option, index) => (
                <Tabs
                    index={index}
                    key={index}
                    object={option}
                    active={active}
                    handleActive={handleActive}
                />
            ))}
        </menu>
    );
}
