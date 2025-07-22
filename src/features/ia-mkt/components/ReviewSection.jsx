import { useMemo, useState } from "react";
import ReviewCard from "./ReviewCard";
import { BadgeInfo, BookmarkCheck, ChevronLeft, ChevronRight } from "lucide-react";
import ButtonVm from "../../../common/components/ButtonVm"
import { useTheme } from "@mui/material/styles"
import { Box } from "@mui/material";

const ReviewsSection = ({ reviews, handleOpen }) => {
    const theme = useTheme()
    const itemsPerPage = 3;
    const totalPages = Math.ceil(reviews.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    const currentReviews = useMemo(() => {
        const start = currentPage * itemsPerPage;
        return reviews.slice(start, start + itemsPerPage);
    }, [currentPage, reviews]);

    return (
        <section className="py-16 bg-gray-950 relative">
            
                <Box sx={{mx:"auto", px:4, display:"flex" , flexDirection:"column" ,justifyItems:"center",alignItems:"center", color:theme.palette.primary.main}}>

                <h2 className="text-2xl font-bold  text-center mb-10">Reseñas de nuestros usuarios</h2>
                <div className="flex justify-between   absolute top-50 px-10 w-full ">
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


                <ButtonVm onClick={handleOpen} sx={{ width: "60%" }} variant="secondary" startIcon={<BadgeInfo />} animateIcon={true} animationType="wobble">Solicita mas informacion</ButtonVm>
                </Box>


           
        </section>
    );
};

export default ReviewsSection;