import Popup from './popup'
import { Button } from '../buttons'

function PopupConfirm({
  Title = 'Title',
  Content = 'Content',
  onBack,
  onConfirm
}) {
  return (
    <Popup>
      <div className="w-full laptop:w-[450px]">
        <h3 className="text-center laptop:text-left text-primary text-body-lg font-semibold mb-1">
          {Title}
        </h3>
        <p className="text-body-md text-primary mb-2">{Content}</p>
        <div className="flex justify-center laptop:justify-end gap-3">
          {onBack ? (
            <div className="">
              <Button
                Color="ghost"
                Custom={true}
                Padding="px-8"
                onClick={onBack}
              >
                Back
              </Button>
            </div>
          ) : (
            ''
          )}
          <div className="">
            <Button
              Color="primary"
              Custom={true}
              Padding="px-8"
              onClick={() => {
                onConfirm()
                onBack()
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </Popup>
  )
}

export default PopupConfirm
