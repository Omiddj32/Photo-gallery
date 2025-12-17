import { useEffect, useState } from "react";
import Gallery from "./components/gallery";
import Loader from "./components/Loader";

function App() {
  const [photos, setPhotos] = useState([]);
  const [visible, setVisible] = useState(4);
  const [loading, setLoading] = useState(true);

  const showMore = () => {
    setVisible((prev) => prev + 4);
  };

  const KEY = import.meta.env.VITE_UNSPLASH_KEY;

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch(
          `https://api.unsplash.com/photos?per_page=30&client_id=${KEY}`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await res.json();
        console.log(data);

        const images = data.map((item) => item.urls.regular);

        setPhotos(images);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, [KEY]);

  if (loading) {
    return <Loader />;
  }

  // const photos = [
  //   "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  //   "https://w0.peakpx.com/wallpaper/717/928/HD-wallpaper-the-punisher-action-series.jpg",
  //   "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  //   "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  //   "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  //   "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  //   "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  //   "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
  //   "https://w0.peakpx.com/wallpaper/352/104/HD-wallpaper-the-punisher-frank-castle-marvel-marvel-comics-netflix-superhero.jpg",
  //   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  //   "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  //   "https://w0.peakpx.com/wallpaper/526/559/HD-wallpaper-punisher-daredevil-frank-castle-marvel-matt-murdock-netflix.jpg",
  //   "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4",
  //   "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  //   "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  //   "https://w0.peakpx.com/wallpaper/90/70/HD-wallpaper-the-punisher-frank-castle-netflix-series.jpg",
  // ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="playwrite-no p-5 text-center text-3xl font-bold">
        Photo Gallery
      </h1>

      <Gallery photos={photos} visible={visible} />

      {visible < photos.length && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={showMore}
            className="cursor-pointer rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
