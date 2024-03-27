import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function ChatInput() {
    return (
        <div className=" absolute bottom-0 p-3 w-full">
            <input
                type="text"
                name="message"
                className=" bg-shadeGrey rounded text-white w-full py-2.5 px-3 pl-10 text-sm focus:outline-none outline-none focus:shadow-lg transition-all "
                placeholder="Message @Dyno"
            />
            <FaPlus className="absolute inset-0 left-0 m-auto cursor-pointer mx-5 p-1.5 bg-mediumGrey w-6 h-6 rounded-full hover:bg-darkGrey transition-all" />
        </div>
    );
}
