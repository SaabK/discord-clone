import { StaticImageData } from "next/image";

export interface Server {
    name: string;
    icon: string;
}

export interface Message {
    name: string;
    message: string;
    image: string | StaticImageData;
    date: string;
}
