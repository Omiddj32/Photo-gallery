function ImageModal({ src, onClose }) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <img
        src={src}
        alt=""
        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        onClick={onClose}
        className="absolute top-5 right-5 cursor-pointer text-3xl text-white"
      >
        ×
      </button>
    </div>
  );
}

export default ImageModal;
