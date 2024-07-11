"use client"

import { NextUIProvider } from "@nextui-org/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ToastContainer } from "react-toastify"

const queryClient = new QueryClient()

const Providers = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<NextUIProvider>
				<ToastContainer closeButton draggable hideProgressBar />
				{children}
			</NextUIProvider>
		</QueryClientProvider>
	)
}
export default Providers
