import { useState } from "react";
import Photo from "./photo";
import ImageModal from "../ImageModal";

function Gallery({ photos, visible }) {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <div className="grid columns-1 grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photos.slice(0, visible).map((src, index) => (
          <Photo key={index} src={src} onClick={setSelectedImage} />
        ))}
      </div>

      <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}

export default Gallery;
