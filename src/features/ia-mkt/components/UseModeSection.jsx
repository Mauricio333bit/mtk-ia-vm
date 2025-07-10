const getYouTubeEmbedUrl = (url) => {
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}`;
};

const UseModeSection = ({ titulo, descripcion, videoUrl }) => {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <section className="py-12 px-6 bg-gray-800 rounded-xl shadow-lg max-w-6xl mx-auto my-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-cyan-400">{titulo}</h2>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">{descripcion}</p>
      </div>

      <div className="flex justify-center mt-6">
        
        <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl transform transition duration-300  border border-gray-700">
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default UseModeSection;
