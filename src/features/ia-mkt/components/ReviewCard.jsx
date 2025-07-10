import { Star } from "lucide-react";

const ReviewCard = ({ institucion, usuario, comentario, valoracion }) => (
  <div className="bg-transparent text-cyan-400  rounded-xl p-6 shadow-md w-80  mx-2 border-1 h-[175px]">
    <h3 className="text-lg font-bold ">{usuario}</h3>
    <p className="text-sm  mb-1">{institucion}</p>
    <div className="flex items-center mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={20}
          className={i < valoracion ? "text-yellow-400" : "text-gray-300"}
          fill={i < valoracion ? "currentColor" : "none"}
        />
      ))}
    </div>
    <p className=" text-sm">{comentario}</p>
  </div>
);
export default ReviewCard;