import { supabase } from "@/lib/db";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
    "user/register",
    async (values: {
        email: string;
        username: string;
        dName: string;
        password: string;
    }) => {
        const response = await supabase.auth.signUp({
            email: values.email,
            password: values.password,
            options: {
                data: {
                    username: values.username,
                    dName: values.dName,
                },
            },
        });

        return response;
    }
);

export const loginUser = createAsyncThunk(
    "user/login",
    async ({ email, password }: { email: string; password: string }) => {
        const response = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        return response;
    }
);
