"use client";

import React from "react";
import AuthInput from "../../_components/AuthInput";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginCard() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("You cannot leave this empty!"),
            password: Yup.string()
                .required("You cannot leave this empty!")
                .min(8, "Must be at least 8 characters"),
        }),
        onSubmit: (values) => {
            // Submit the values to backend

            console.log(values);
        },
    });

    return (
        <article className="bg-mediumGrey w-3/12 mx-auto rounded p-8 my-4">
            <div className="space-y-2 text-center">
                <h3 className="font-bold text-2xl">Welcome back!</h3>
                <p className="text-lightGrey">
                    We're so excited to see you again!
                </p>
            </div>

            <form className="my-5 space-y-4" onSubmit={formik.handleSubmit}>
                <AuthInput
                    name="email"
                    type="email"
                    label="Email"
                    required
                    formik={formik}
                />
                <div>
                    <AuthInput
                        name="password"
                        type="password"
                        label="Password"
                        formik={formik}
                        required
                    />
                    <span className="text-sky-500 text-xs hover:underline">
                        Forgot your password?
                    </span>
                </div>

                <button className="btn-primary w-full">Login</button>
            </form>

            <span className="text-sm text-lightGrey">
                Need an account?{" "}
                <Link
                    href="/register"
                    className="text-sky-500 text-xs hover:underline"
                >
                    Register
                </Link>
            </span>
        </article>
    );
}
