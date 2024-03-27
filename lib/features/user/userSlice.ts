import { createSlice, current } from "@reduxjs/toolkit";
import { getUser, loginUser, registerUser } from "./userThunk";
import { User } from "@supabase/supabase-js";

export interface UserState {
    username: string;
    dName: string;
    email: string;
    authenticated: boolean;
    error: string;
}

const initialState: UserState = {
    username: "",
    dName: "",
    email: "",
    authenticated: false,
    error: "",
};

function storeUser(state: UserState, user: User | null, error: any) {
    if (error && error.name) {
        state.authenticated = false;
        state.error = error.name;
        return;
    }

    state.email = user?.email as string;
    state.username = user?.user_metadata.username;
    state.dName = user?.user_metadata.dName;

    state.authenticated = true;
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // -- Registeration --
            .addCase(
                registerUser.fulfilled,
                (state, { payload: { data, error } }) => {
                    // console.log("Your user successfully created: ", data);

                    storeUser(state, data.user, error);

                    // console.log("state after registering: ", current(state));
                }
            )
            .addCase(registerUser.rejected, () => {
                console.log("Some error occurred during registeration");
            })
            // -- Login --
            .addCase(
                loginUser.fulfilled,
                (state, { payload: { data, error } }) => {
                    // console.log("Your user was logged in!", { data, error });

                    storeUser(state, data.user, error);
                }
            )
            .addCase(loginUser.rejected, () =>
                console.log("Some error occurred during login")
            )
            // -- Get the user --
            .addCase(
                getUser.fulfilled,
                (state, { payload: { data, error } }) => {
                    storeUser(state, data.user, error);
                }
            );
    },
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
