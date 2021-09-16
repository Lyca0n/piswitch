import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SWITCH_API } from '../constants/API';

export const pinApi= createApi({
    reducerPath: 'pins',
    baseQuery: fetchBaseQuery({baseUrl: SWITCH_API}),
    endpoints: (builder) => ({
        getPins: builder.query({ query: () => 'pins'})
    })
})

export const { useGetPinsQuery } = pinApi;