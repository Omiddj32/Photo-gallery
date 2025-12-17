import { useState } from "react";
import Loader from "./Loader";

function Photo_temp({ src, onClick }) {
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <div className="mb-4 break-inside-avoid">
      {!isloading && <Loader />}

      <img
        src={src}
        alt=""
        loading="lazy"
        className={`h-52 w-full cursor-pointer rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105 hover:opacity-95`}
        onLoad={() => setIsLoading(true)}
        onError={() => setError(true)}
        onClick={() => onClick(src)}
      />
    </div>
  );
}

export default Photo_temp;
