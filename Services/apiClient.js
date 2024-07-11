import localStore from "@/utils/cookie"
import { default as axios } from "axios"

const apiClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
})

apiClient.interceptors.request.use(
	(config) => {
		console.log("config of request: " + JSON.stringify(config))
		return config
	},
	(error) => {
		console.log("error in request config: " + error)
		return Promise.reject(error)
	}
)

apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		if (
			(error?.response &&
				(
					error?.response?.data?.message ||
					error?.response?.data?.status_message
				)?.includes("Token is expired")) ||
			(
				error?.response?.data?.message || error?.response?.data?.status_message
			)?.includes("Please provide a valid token.")
		) {
			localStore.removeItem("userToken")
		}
		return Promise.reject(error)
	}
)

export default apiClient
