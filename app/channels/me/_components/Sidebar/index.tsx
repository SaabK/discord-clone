"use client";

import React, { useState } from "react";
import Search from "./Search";
import { SmallHeading } from "@/app/_components/Headings";
import { FaPlus } from "react-icons/fa";
import { friends, meOptions } from "@/lib/data";
import Tabs from "./Tabs";

export default function Sidebar() {
    const [active, setActive] = useState<number | null>(null);

    const handleActive = (index: number) => {
        setActive(index);
    };

    return (
        <aside className="bg-mediumGrey min-w-60 custom-scrollbar !scrollbar-none hover:!scrollbar-thin">
            <div className="p-2.5">
                <Search />
            </div>

            <hr className="border-darkGrey/60 border" />

            <div className="p-2.5 text-white">
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

                <div className="mt-5">
                    <div className="flex justify-between items-center px-2">
                        <SmallHeading className="  hover:text-slate-200/85">
                            Direct Messages
                        </SmallHeading>
                        <FaPlus className="w-3 text-lightGrey cursor-pointer hover:brightness-125" />
                    </div>

                    <menu className="mt-2 space-y-1">
                        {friends.map((friend, index) => (
                            <Tabs
                                object={friend}
                                index={index + meOptions.length}
                                key={index}
                                active={active}
                                handleActive={handleActive}
                                imageClass="w-7 rounded-full"
                            />
                        ))}
                    </menu>
                </div>
            </div>
        </aside>
    );
}
