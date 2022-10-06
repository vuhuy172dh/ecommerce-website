
function ProductItem({Img, Name, Price}) {
  return (
    <div className="pb-5">
      <img className="w-full object-cover" src= {Img} alt={Name}/>
      <h4 className="mt-6 mb-2 text-h4">{Name}</h4>
      <h4 className="text-body-lg">{Price}</h4>
    </div>
  )
}

export default ProductItem
