import PurchaseProductItem from './purchaseProductItem'

function PurchaseProductItemList({ products }) {
  return (
    <div className="w-full flex flex-col gap-3">
      {products.map((product, index) => (
        <PurchaseProductItem key={index} product={product} />
      ))}
    </div>
  )
}

export default PurchaseProductItemList
