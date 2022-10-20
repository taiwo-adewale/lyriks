import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: () => {
      Headers.set('X-RapidAPI-Key', '')

      return headers
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' })
  })
})

export const {
  useGetTopChartsQuery,
} = shazamCoreApi