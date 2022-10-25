function ProductScrollView({ images }) {
  return (
    <div className="w-full min-h-full flex flex-col gap-10">
      {images.map((img, index) => (
        <div
          className="w-full h-[calc(100vh-144px)] laptop:h-[calc(100vh-80px)] rounded-xl overflow-hidden shadow-lg shadow-gray-800/40"
          key={index}
        >
          <img src={img} alt="img" className="w-full min-h-full object-cover" />
        </div>
      ))}
    </div>
  )
}

export default ProductScrollView
