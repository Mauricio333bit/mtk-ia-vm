import { useMemo, useState } from "react";
import ReviewCard from "./ReviewCard";
import { BookmarkCheck, ChevronLeft, ChevronRight } from "lucide-react";
import ButtonVm from "../../../common/components/ButtonVm"
const ReviewsSection = ({ reviews }) => {
    const itemsPerPage = 3;
    const totalPages = Math.ceil(reviews.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    const currentReviews = useMemo(() => {
        const start = currentPage * itemsPerPage;
        return reviews.slice(start, start + itemsPerPage);
    }, [currentPage, reviews]);

    return (
        <section className="py-16 bg-gray-950 relative">
            <div className="max-w-6xl mx-auto px-4 flex flex-col  justify-center items-center">
                <h2 className="text-2xl font-bold text-cyan-400 text-center mb-10">Reseñas de nuestros usuarios</h2>
                <div className="flex justify-between  text-cyan-400 absolute top-50 px-10 w-full ">
                    <button
                        className=" py-2  disabled:opacity-40 hover:cursor-pointer"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                        disabled={currentPage === 0}
                    >
                        <ChevronLeft className="size-14"></ChevronLeft>
                    </button>
                    <button
                        className=" py-2  disabled:opacity-40 hover:cursor-pointer"
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                        disabled={currentPage >= totalPages - 1}
                    >
                        <ChevronRight className="size-14"></ChevronRight>
                    </button>
                </div>

                <div className=" mb-6 flex overflow-hidden transition-transform duration-300 ease-in-out">
                    {currentReviews.map((review, idx) => (
                        <ReviewCard key={idx} {...review} />
                    ))}
                </div>
                <ButtonVm sx={{ width: "70%" }} variant="primary" startIcon={<BookmarkCheck />} animateIcon={true} animationType="bounce">Adquirir servicio</ButtonVm>

            </div>
        </section>
    );
};

export default ReviewsSection;