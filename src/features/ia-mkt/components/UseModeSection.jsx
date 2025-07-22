import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles"
const getYouTubeEmbedUrl = (url) => {
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get("v");
  return `https://www.youtube-nocookie.com/embed/${videoId}`;
};


const UseModeSection = ({ titulo, descripcion, videoUrl }) => {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);
  const theme = useTheme()
  return (
   
      <Box sx={{ py: 12, px: 6, background:theme.palette.background.default,mx:"auto"}}>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold ">{titulo}</h2>
          <p className="mt-4  max-w-3xl mx-auto">{descripcion}</p>
        </div>

        <div className="flex justify-center mt-6">

          <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl transform transition duration-300  border border-gray-700">
            <iframe
              className="w-full h-full"
              src={embedUrl + "?modestbranding=1&disablekb=1&rel=0&showinfo=0&autoplay=0&enablejsapi=0"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Box>
   
  );
};

export default UseModeSection;
