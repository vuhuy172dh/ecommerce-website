
function ProductItem({Img, Name, Price}) {
  return (
    <div>
      <img className="w-full object-cover" src= {Img} alt={Name}/>
      <h4 className="mt-6 mb-2 text-h4">{Name}</h4>
      <h4 className="text-[18px]">{Price}</h4>
    </div>
  )
}

export default ProductItem
