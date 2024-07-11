"use client"

const localStore = {
	setItem: (name, value) => {
		if (typeof window !== "undefined") {
			localStorage.setItem(name, value)
		}
	},

	getItem: (name) => {
		if (typeof window !== "undefined") {
			return localStorage.getItem(name)
		}
		return null
	},

	removeItem: (name) => {
		if (typeof window !== "undefined") {
			localStorage.removeItem(name)
		}
	},
}

export default localStore
