"use client";

import React, { useEffect } from "react";
import discord from "../../../../../assets/profiles/discord.png";
import Image from "next/image";
import { SlSettings } from "react-icons/sl";
import { useAppSelector } from "@/lib/hooks";

export default function User() {
    const { dName, username } = useAppSelector((state) => state.user);

    return (
        <div className="text-white bg-darkGrey/60 flex gap-2 items-center p-2.5 justify-between">
            <Image src={discord} alt="Discord" className="w-10 h-10" />
            <div>
                <h4 className="font-medium truncate text-sm leading-3 relative top-0.5">
                    {dName}
                </h4>
                <span className="text-xs text-lightGrey leading-3">
                    @{username}
                </span>
            </div>
            <SlSettings className="cursor-pointer hover:bg-slate-50/10 p-1.5 w-8 h-8 rounded" />
        </div>
    );
}
