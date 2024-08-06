"use client"

import ClassNames from "embla-carousel-class-names"
import useEmblaCarousel from "embla-carousel-react"
import MobileBookCard from "../book/card/MobileBookCard"
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselButtons"
import { DotButton, useDotButton } from "./DotButtons"

const Carousel = (props) => {
	const { books, options, className } = props
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
		ClassNames(),
	])

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi)
	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi)

	return (
		<div className={`embla py-10 ${className}`}>
			<div className='embla__viewport' ref={emblaRef}>
				<div className='embla__container'>
					{books.map((book, index) => (
						<div
							className='embla__slide embla__class-names flex justify-center'
							key={index}>
							<MobileBookCard book={book} type='continue' />
						</div>
					))}
				</div>
			</div>

			<div className='embla__controls'>
				<div className='embla__buttons'>
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>

				<div className='embla__dots'>
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={"embla__dot".concat(
								index === selectedIndex ? " embla__dot--selected" : ""
							)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Carousel
