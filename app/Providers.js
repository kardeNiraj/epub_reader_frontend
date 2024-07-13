"use client"

import { AntdRegistry } from "@ant-design/nextjs-registry"
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
				<AntdRegistry>
					<ToastContainer closeButton draggable hideProgressBar />
					{children}
				</AntdRegistry>
			</NextUIProvider>
		</QueryClientProvider>
	)
}
export default Providers
