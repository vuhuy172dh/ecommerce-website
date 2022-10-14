import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function PopupStatus({ success, failure, children }) {
  return (
    <div className="flex fixed top-0 right-0 left-0 bottom-0 animate-[fadeOut_2s_ease-in-out]">
      <div className="w-[200px] laptop:w-[300px] bg-gray-800 bg-opacity-60 m-auto z-20 rounded-md  px-8 py-5">
        {success && (
          <div className="flex w-[40px] h-[40px] laptop:w-[80px] laptop:h-[80px] rounded-[50%] bg-green-300 mx-auto">
            <FontAwesomeIcon
              className="m-auto text-[20px] laptop:text-[50px] text-white"
              icon={faCheck}
            />
          </div>
        )}
        {failure && (
          <div className="flex  w-[40px] h-[40px] laptop:w-[80px] laptop:h-[80px] rounded-[50%] bg-red-500 mx-auto">
            <FontAwesomeIcon
              className="m-auto text-[20px] laptop:text-[50px] text-white"
              icon={faXmark}
            />
          </div>
        )}
        <p className="text-white mt-4 text-center">{children}</p>
      </div>
    </div>
  )
}

export default PopupStatus
