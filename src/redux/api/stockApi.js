import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const stockApi = createApi({
    reducerPath: 'stockApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://stockbackend-znbu.onrender.com/api/stock',
        credentials: 'include',
    }),
    tagTypes: ['stock'],
    endpoints: (builder)=> ({
        addStock: builder.mutation({
            query: ({userId, units}) => ({
                url: '/add',
                method: 'POST',
                body: { userId, units},
            }),
            invalidatesTags: ['stock'],
        }),
        getUserStocks: builder.query({
            query: (userId) => `/user/${userId}`,
            providesTags: ['stock'],
    }),
    approveStock: builder.mutation({
        query: ({userId, stockId})=>({
            url: `/approve/${userId}/${stockId}`,
            method: 'PUT',
        }),
        invalidatesTags: ['stock'],
    }),
    deleteStock: builder.mutation({
        query: ({ userId, stockId }) => ({
            url: `/delete/${userId}/${stockId}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['stock'],
    }),
    }),
});

export const {
    useAddStockMutation,
    useGetUserStocksQuery,
    useApproveStockMutation,
    useDeleteStockMutation,
} = stockApi