"use client"

const store = {
	set: (name, value) => {
		if (typeof window !== "undefined") {
			localStorage.setItem(name, value)
		}
	},

	get: (name) => {
		if (typeof window !== "undefined") {
			return localStorage.getItem(name)
		}
		return null
	},

	remove: (name) => {
		if (typeof window !== "undefined") {
			localStorage.removeItem(name)
		}
	},
}

export default store
