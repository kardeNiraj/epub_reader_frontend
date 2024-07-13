import apiClient from "@/Services/apiClient"
import { useMutation } from "@tanstack/react-query"

// login hook made by @tanstack react-query.
// handles errors and provides response object if success
export const useLogin = () => {
	return useMutation({
		mutationKey: ["LOGIN"],
		mutationFn: async (data) => {
			const response = await apiClient.post("/api/user/login", data)
			return response.data.data
		},
	})
}

// signup hook made by @tanstack react-query.
// handles errors and provides response object if success
export const useSignup = () => {
	// expected data --
	// 	{
	// 		"name": "niraj karde",
	// 		"email": "niraj.private01@gmail.com",
	// 		"phone": "832947670",
	// 		"password": "123123"
	// 	}

	return useMutation({
		mutationKey: ["CREATE_NEW_USER"],
		mutationFn: async (data) => {
			const response = await apiClient.post("/api/user", data)
			return response.data.data
		},
	})
}

// remove afterwards -- written for explanation
const login = async (data) => {
	const response = await apiClient.get("/api/user/login", data)
	// success status
	if (response.status === 200) {
		// have all the data in response.data = {
		// 	token: "jkhfjkwbd", loginComplete: true
		// }
	} else {
		console.log("have an error: " + response.data.message)
	}
}
