import React from "react";
import Search from "./Search";
import Options from "./Options";
import { SmallHeading } from "@/app/_components/Headings";
import { FaPlus } from "react-icons/fa";
import Friends from "./Friends";

export default function Sidebar() {
    return (
        <aside className="bg-mediumGrey min-w-60 custom-scrollbar !scrollbar-none hover:!scrollbar-thin">
            <div className="p-2.5">
                <Search />
            </div>

            <hr className="border-darkGrey/60 border" />

            <div className="p-2.5 text-white">
                <Options />

                <div className="mt-5">
                    <div className="flex justify-between items-center px-2">
                        <SmallHeading className="  hover:text-slate-200/85">
                            Direct Messages
                        </SmallHeading>
                        <FaPlus className="w-3 text-lightGrey cursor-pointer hover:brightness-125" />
                    </div>

                    <Friends />
                </div>
            </div>
        </aside>
    );
}
