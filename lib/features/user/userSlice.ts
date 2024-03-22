import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./userThunk";
import { User } from "@supabase/supabase-js";

export interface UserState {
    username: string;
    dName: string;
    email: string;
    authenticated: boolean;
}

const initialState: UserState = {
    username: "",
    dName: "",
    email: "",
    authenticated: false,
};

function storeUser(state: UserState, user: User | null) {
    state.email = user?.email as string;
    state.username = user?.user_metadata.username;
    state.dName = user?.user_metadata.dName;
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                registerUser.fulfilled,
                (state, { payload: { data, error } }) => {
                    // console.log("Your user successfully created: ", data);

                    storeUser(state, data.user);
                    state.authenticated = true;

                    // console.log("state after registering: ", current(state));
                }
            )
            .addCase(registerUser.rejected, () => {
                console.log("Some error occurred during registeration");
            })

            .addCase(
                loginUser.fulfilled,
                (state, { payload: { data, error } }) => {
                    console.log("Your user was logged in!", data);

                    storeUser(state, data.user);
                    state.authenticated = true;
                }
            )
            .addCase(loginUser.rejected, () =>
                console.log("Some error occurred during login")
            );
    },
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
