import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/store/baseQuery";

export const userApiSlice = createApi({
    reducerPath: "userApi",
    baseQuery,
    tagTypes: ["user"],
    endpoints: (builder) => ({
        user: builder.query({
            query: () => ({
                url: "/fetch-user-data",
                method: "GET",
            }),
        }),
    }),
});

export const { useUserQuery } = userApiSlice;
