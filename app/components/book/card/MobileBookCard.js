"use client"

import { Card, CardHeader, Image } from "@nextui-org/react"
import { useRouter } from "next/navigation"

const MobileBookCard = ({ book, type }) => {
	const router = useRouter()
	// pick up where you left
	const headerSubtitle = {
		continue: "continue reading",
		new: "might try",
		lost: "pick up",
	}

	console.log("data in book: ", book)

	return (
		<Card className='w-10/12'>
			<CardHeader className='absolute z-10 top-1 flex-col !items-start gap-2'>
				<p className='text-tiny text-white/60 uppercase font-bold'>
					{headerSubtitle[type]}
				</p>
				<h4 className='text-white font-medium text-large'>{book?.name}</h4>
			</CardHeader>
			<Image
				removeWrapper
				alt='Book Cover'
				className='z-0 w-full h-full object-cover'
				src={
					book?.cover_id
						? `https://covers.openlibrary.org/a/id/${book?.cover_id}-L.jpg`
						: "https://nextui.org/images/card-example-4.jpeg"
				}
				fallbackSrc={
					book?.cover_id
						? `https://covers.openlibrary.org/a/id/${book?.cover_id}-S.jpg`
						: "https://nextui.org/images/card-example-4.jpeg"
				}
				onClick={() => router.push(`/book/${book?._id}`)}
			/>
		</Card>
	)
}
export default MobileBookCard
