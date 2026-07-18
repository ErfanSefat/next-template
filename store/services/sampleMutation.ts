import { baseApi } from "./baseApi";

export const sampleMutation = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    mutate: builder.mutation<void, void>({
      query: (body) => ({
        url: "/sample-mutation",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useMutateMutation } = sampleMutation;
