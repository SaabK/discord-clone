import { cn } from "@/lib/utils/cn";
import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { FaAsterisk } from "react-icons/fa";

interface AuthInputProps {
    type?: string;
    name: string;
    placeholder?: string;
    label: string;
    required?: boolean;
    formik: any;
}

export default function AuthInput({
    type = "text",
    name,
    placeholder,
    label,
    required,
    formik,
}: AuthInputProps) {
    return (
        <label htmlFor={name} className="flex flex-col gap-2">
            <span className="uppercase text-xs font-bold tracking-wide text-slate-100/70 flex gap-2">
                {label}
                {required && <FaAsterisk className="text-red-500 w-2" />}
            </span>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                id={name}
                required={required}
                className={cn(
                    "text-sm bg-darkGrey px-3 py-2 outline-none focus:outline-none rounded text-slate-100/85 transition-all",
                    formik.errors[name] &&
                        formik.touched[name] &&
                        "bg-red-300 text-black"
                )}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
            />
            {formik.touched[name] && formik.errors[name] ? (
                <span className="text-xs text-red-500/90 transition-all">
                    {formik.errors[name]}
                </span>
            ) : null}
        </label>
    );
}
