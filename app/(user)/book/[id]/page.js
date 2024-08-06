"use client"

import useToast from "@/utils/toaster/useToast"
import { Spinner } from "@nextui-org/react"
import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useGetBook } from "../../Hooks/books"

import { ReactEpubViewer } from "react-epub-viewer"

const RenderBook = () => {
	const { id } = useParams()
	const { showToast } = useToast()
	const [location, setLocation] = useState(0)
	const viewerRef = useRef(null)

	const { data: book, isLoading, isError, error } = useGetBook({ id })

	useEffect(() => {
		console.log("book", book)

		if (isError) {
			showToast(
				"error",
				"Error",
				error?.response?.data?.message || error?.message
			)
		}

		if (book) {
			console.log("book", book)
			setLocation(book?.lastReadPage)
		}
	}, [book, isError, error])

	useEffect(() => {
		console.log("location", location)
	}, [location])

	if (isLoading) {
		return (
			<div className='w-screen h-screen flex justify-center items-center'>
				<Spinner size='md' color='default' />
			</div>
		)
	}

	return (
		<>
			<h1>Title</h1>
			<div className='w-full h-full'>
				{/* <ReactReader
					url={`${process.env.NEXT_PUBLIC_SERVER_URL}/${book?.bookPath}`}
					location={location}
					locationChanged={(epubcfi) => setLocation(epubcfi)}
					loadingView={
						<div className='w-full h-full flex justify-center items-center'>
							<Spinner size='md' color='default' />
						</div>
					}
				/> */}
				<ReactEpubViewer
					url={`${process.env.NEXT_PUBLIC_SERVER_URL}/${book?.bookPath}`}
					ref={viewerRef}
				/>
			</div>
		</>
	)
}
export default RenderBook
