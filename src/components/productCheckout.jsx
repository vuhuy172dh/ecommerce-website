function ProductCheckout({ img, name, price }) {
  return (
    <div className="w-full max-h-20 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/*image*/}
        <div className="h-full w-16 rounded-lg overflow-hidden">
          <img src={img} alt={name} className="h-full object-cover" />
        </div>
        {/*name*/}
        <p className="text-light_grey h-4 font-[500]">{name}</p>
      </div>

      {/*price*/}
      <p className="text-light_grey h-6">${price}</p>
    </div>
  )
}

export default ProductCheckout