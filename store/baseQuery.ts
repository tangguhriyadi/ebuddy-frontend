import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
    },
});
