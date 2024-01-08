import { apiSlice } from "../apiSlice";

export const summaryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: () => ({
                url: `summary`,
            }) ,
        }),
    }),
});

export const { useGetSummaryQuery } = summaryApiSlice;