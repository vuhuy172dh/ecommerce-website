import Popup from "./popup"
import Button from "../button"

function PopupConfirm ({Title = "Title", Content = "Content", onBack , onConfirm = {}}) {
    return(
        <Popup>
            <div className="w-[450px]">
                <h3 className="text-body-lg font-semibold mb-5">{Title}</h3>
                <p className="text-body-md text-primary mb-5">{Content}</p>
                <div className="flex justify-end gap-3">
                    {
                        onBack?<div className=""><Button Color="secondary" onClick={onBack}>Trở về</Button></div> :('')
                    }
                    <div className=""><Button Color="primary" onClick={onConfirm}>Xác nhận</Button></div>
                </div>
            </div>
        </Popup>
    )
}

export default PopupConfirm