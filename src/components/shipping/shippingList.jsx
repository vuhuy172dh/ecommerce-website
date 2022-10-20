import ShippingItem from './shippingItem'

function ShippingList({ shippingList }) {
  return (
    <div className="w-full flex flex-col gap-2">
      {shippingList.map((item, index) => (
        <ShippingItem key={index} name={item.name} price={item.price} />
      ))}
    </div>
  )
}

export default ShippingList
