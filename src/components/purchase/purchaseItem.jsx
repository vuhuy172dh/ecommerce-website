import Button from '../button'
import PurchaseProductItemList from './purchaseProductItemList'

function PurchaseItem({ purchaseItem }) {
  return (
    <div className="w-full py-2 px-8 bg-border_grey rounded-lg shadow-md shadow-gray-600/50">
      <div className="w-full flex justify-end">
        <p className="text-h4 text-primary">
          <strong>Waiting</strong>
        </p>
      </div>

      {/*products cart list*/}
      <PurchaseProductItemList products={purchaseItem.products} />
      {/*Divider*/}
      <hr className="w-full border-t border-t-primary/50 my-2" />

      {/*detail*/}
      <div className="w-full flex flex-col items-end">
        <p>
          <strong>Total Price:</strong> {purchaseItem.total}$
        </p>
        <div>
          <Button Color="primary" Custom={true} Padding="py-2 px-8">
            Detail
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PurchaseItem
