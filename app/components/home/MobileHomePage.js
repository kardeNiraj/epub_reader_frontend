import { booksData, currentRead } from "@/app/data/bookData";
import Carousel from "../carousel/Carousel";
import {
  useGetReadingBooks,
  useGetToReadBooks,
} from "@/app/(user)/Hooks/books";
import { Spinner } from "@nextui-org/react";

const MobileHomePage = () => {
  const { data: currentRead, isLoading: currentReadLoading } =
    useGetReadingBooks();

  const { data: booksData, isLoading: toReadLoading } = useGetToReadBooks();

  return (
    <div className="min-h-screen mx-auto py-20 w-10/12">
      <h2 className="text-2xl font-semibold">Activity</h2>
      {currentReadLoading ? (
        <div className="w-full flex justify-center">
          <Spinner color="default" size="md" />
        </div>
      ) : (
        currentRead.length > 0 && <Carousel books={currentRead} />
      )}

      <h3 className="text-lg font-medium text-foreground/60 uppercase">
        Added Books
      </h3>
      {toReadLoading ? (
        <div className="w-full flex justify-center">
          <Spinner color="default" size="md" />
        </div>
      ) : (
        booksData?.length > 0 && <Carousel books={booksData} />
      )}
    </div>
  );
};
export default MobileHomePage;
