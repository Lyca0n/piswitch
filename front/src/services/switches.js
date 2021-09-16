import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SWITCH_API } from "../constants/API";

export const switchApi = createApi({
    reducerPath: 'appliances',
    tagTypes: ['Appliances'],
    baseQuery: fetchBaseQuery({ baseUrl: SWITCH_API }),
    endpoints: (builder) => ({
        getAppliances: builder.query({
            query: () => 'appliances',
            providesTags: (result) => result
                ? [
                    ...result.appliances.map(({ pin }) => ({ type: 'Appliances', pin })),
                    { type: 'Appliances', id: 'LIST' },
                ]
                : [{ type: 'Appliances', id: 'LIST' }],
        }),
        getApplianceById: builder.query({
            query: (id) => ({ url: `appliances/${id}` }),
            providesTags: (result, error, id) => [{ type: 'Appliances', id }],
        }),
        createAppliance: builder.mutation({
            query: (body) => ({
                url: `appliances`,
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['Appliances']
        }),
        updateApplianceById: builder.mutation({
            query: ({ id, ...put }) => ({
                url: `appliances/${id}`,
                method: 'PUT',
                body: put,
            }),
            invalidatesTags: ['Appliances']
        }),
        deleteApplianceById: builder.mutation({
            query: (id) => ({
                url: `appliances/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Appliances']
        }),
        toggleApplianceById: builder.mutation({
            query: (id) => ({
                url: `appliances/${id}/toggle`,
                method: 'PUT',
            }),
            invalidatesTags: ['Appliances']
        }),
    })
})

export const { 
    useGetAppliancesQuery, 
    useCreateApplianceMutation, 
    useGetApplianceByIdQuery, 
    useUpdateApplianceByIdMutation, 
    useDeleteApplianceByIdMutation, 
    useToggleApplianceByIdMutation 
} = switchApi;
