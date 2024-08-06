import apiClient from "@/Services/apiClient"
import store from "@/utils/cookie"
import { useQuery } from "@tanstack/react-query"
import queryString from "query-string"

export const useGetBook = (params = {}, options = {}) => {
	const token = store.get("ebookUserToken")
	const { id } = params

	return useQuery({
		queryKey: ["GET_BOOK_BY_ID", id],
		queryFn: async () => {
			const response = await apiClient.get(`/api/book/${id}`, {
				headers: {
					Authorization: token,
				},
			})
			return response?.data?.data
		},
		enabled: !!id && !!token,
		refetchOnWindowFocus: false,
		retry: false,
		...options,
	})
}

export const useGetReadingBooks = (params = {}, options = {}) => {
	const { limit, offset, sort } = params
	return useQuery({
		queryKey: ["GET_CURRENTLY_READING_BOOKS", limit, offset, sort],
		queryFn: async () => {
			const query = queryString({
				limit,
				offset,
				sort,
			})
			const response = await apiClient.get(
				`/api/book/currently-reading?${query}`
			)

			return response?.data?.data
		},
		...options,
	})
}

export const useGetToReadBooks = (params = {}, options = {}) => {
	const { limit, offset, sort } = params
	return useQuery({
		queryKey: ["GET_TO_READ_BOOKS", limit, offset, sort],
		queryFn: async () => {
			const query = queryString({
				limit,
				offset,
				sort,
			})
			const response = await apiClient.get(`/api/book/to-read?${query}`)

			return response?.data?.data
		},
		...options,
	})
}
