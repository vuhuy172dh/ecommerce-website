import PurchaseItem from './purchaseItem'

function PurchaseItemList({ purchases }) {
  return (
    <div className="w-full mb-4 flex flex-col gap-3">
      {purchases.map((purchase) => (
        <PurchaseItem purchaseItem={purchase} />
      ))}
    </div>
  )
}

export default PurchaseItemList
