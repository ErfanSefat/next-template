import { baseApi } from "./baseApi";

export const sampleQuery = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSamples: builder.query<void, void>({
      query: () => "/sample-query",
    }),
  }),
});

export const { useGetSamplesQuery } = sampleQuery;
