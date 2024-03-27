import { Message } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface MessageProps {
    message: Message;
}

export default function Message({ message }: MessageProps) {
    return (
        <div className="flex gap-2">
            <Image
                src={message.image}
                alt={message.name}
                className="rounded-full w-11 h-11"
            />
            <div>
                <div className="flex gap-3 items-center">
                    <h4 className="">{message.name}</h4>
                    <span className="text-lightGrey text-xs">
                        {message.date}
                    </span>
                </div>

                <p className="text-sm text-slate-100/90">{message.message}</p>
            </div>
        </div>
    );
}
