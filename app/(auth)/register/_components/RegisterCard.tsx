"use client";

import React, { useState } from "react";
import AuthInput from "../../_components/AuthInput";
import Link from "next/link";

import { useFormik } from "formik";
import * as Yup from "yup";
import { supabase } from "@/lib/db";

export default function RegisterCard() {
    const formik = useFormik({
        initialValues: {
            username: "",
            dName: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(15, "Must be 15 characters or less")
                .min(3, "Must be at least 3 characters")
                .required("You cannot leave this empty!"),
            dName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .min(3, "Must be at least 3 characters"),
            email: Yup.string()
                .email("Invalid email address")
                .required("You cannot leave this empty!"),
            password: Yup.string()
                .required("You cannot leave this empty!")
                .min(8, "Must be at least 8 characters"),
        }),
        onSubmit: async (values) => {
            // Submit the values to backend
            // console.log(values);

            const { data, error } = await supabase.auth.signUp({
                email: values.email,
                password: values.password,
                options: {
                    data: {
                        username: values.username,
                        dName: values.dName,
                    },
                },
            });

            console.log("Data: ", data);
            console.log("Error: ", error);
        },
    });

    return (
        <article className="bg-mediumGrey w-3/12 mx-auto rounded p-8  my-4">
            <h3 className="font-bold text-2xl text-center">
                Create an account
            </h3>

            <form
                className="flex flex-col gap-4 mt-6"
                onSubmit={formik.handleSubmit}
            >
                <AuthInput
                    name="email"
                    type="email"
                    label="Email"
                    required
                    formik={formik}
                />
                <AuthInput
                    name="dName"
                    type="text"
                    label="Display Name"
                    formik={formik}
                />
                <AuthInput
                    name="username"
                    type="text"
                    label="Username"
                    formik={formik}
                    required
                />
                <AuthInput
                    name="password"
                    type="password"
                    label="Password"
                    formik={formik}
                    required
                />

                <button
                    className="btn-primary disabled:cursor-not-allowed disabled:opacity-75"
                    type="submit"
                    disabled={Object.keys(formik.errors).length !== 0}
                >
                    Register
                </button>
            </form>

            <p className="text-xs text-slate-100/70 my-2.5">
                By registering, you agree to Discord's{" "}
                <a
                    href="https://www.discord.com/terms"
                    className="text-sky-400 hover:underline"
                >
                    Terms of Service
                </a>{" "}
                and{" "}
                <a
                    href="https://www.discord.com/privacy"
                    className="text-sky-400 hover:underline"
                >
                    Privacy Policy
                </a>
                .
            </p>
            <Link
                href="/login"
                className="text-sky-500 text-xs hover:underline"
            >
                Already have an account?
            </Link>
        </article>
    );
}
