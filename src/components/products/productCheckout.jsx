function ProductCheckout({ img, name, price, numberProduct }) {
  return (
    <div className="w-full max-h-20 flex items-center my-2 justify-between">
      <div className="flex items-center justify-start gap-4">
        {/*image*/}
        <div className="h-full w-16 shrink-0 rounded-lg overflow-hidden">
          <img src={img} alt={name} className="h-full w-full object-cover" />
        </div>
        {/*name*/}
        <div className="flex flex-col gap-2">
          <p className="text-light_grey h-4 font-[500]">{name}</p>
          <p className="text-light_grey h-4 font-[500]">x{numberProduct}</p>
        </div>
      </div>

      {/*price*/}
      <p className="text-light_grey h-6">${price}</p>
    </div>
  )
}

export default ProductCheckout
