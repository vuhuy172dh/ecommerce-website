function ShippingItem({ name, price }) {
  return (
    <label className="flex w-full py-3 px-2 items-center justify-between border border-light_grey/20 text-light_grey rounded-xl">
      <div className="flex items-center gap-2">
        <input type="radio" name="shippin" className="peer" />
        <p>{name}</p>
      </div>
      <p>{price}</p>
    </label>
  )
}

export default ShippingItem
