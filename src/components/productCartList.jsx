import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const productCartList = ({ cartItems }) => {
  return cartItems.map(({ id, name, detail, price, imgUrl }) => (
    <div key={id} className="flex py-4 laptop:w-[100%] laptop:justify-between">
      {/*Product Cart Item */}
      <div className="laptop:w-[45%] flex">
        <div className="w-[134px] laptop:w-[110px] h-[166px] laptop:h-[134px] ">
          {/*Image product */}
          <img
            src={imgUrl}
            alt={name}
            className="w-[134px] laptop:w-[110px] h-[166px] laptop:h-[134px] max-w-none"
          />
        </div>
        {/*Name , detail, price product */}
        <div className="ml-5 laptop:ml-3 p-1 flex flex-col laptop:w-[100%] laptop:flex-row">
          <div className="flex-1">
            <p className="text-[16px] laptop:text-[20px]">{name}</p>
            <p className="text-[14px] py-2">{detail}</p>
            <p className="text-[16px]">${price}</p>
          </div>
          <div className="ml-6 flex laptop:hidden">
            <div className="w-[24px] h-[24px] rounded-full hover:cursor-pointer hover:bg-border_grey flex align-middle justify-center">
              <FontAwesomeIcon icon={faMinus} className="m-auto" />
            </div>
            <div className="mx-5">1</div>
            <div className="w-[24px] h-[24px] rounded-full hover:cursor-pointer hover:bg-border_grey flex align-middle justify-center">
              <FontAwesomeIcon icon={faPlus} className="m-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden laptop:flex items-center">
        <div className="w-[24px] h-[24px] rounded-full hover:cursor-pointer hover:bg-border_grey flex align-middle justify-center">
          <FontAwesomeIcon icon={faMinus} className="m-auto" />
        </div>
        <span className="mx-5">1</span>
        <div className="w-[24px] h-[24px] rounded-full hover:cursor-pointer hover:bg-border_grey flex align-middle justify-center">
          <FontAwesomeIcon icon={faPlus} className="m-auto" />
        </div>
      </div>
      <div className="hidden laptop:flex items-center">
        <p>$ {price}</p>
      </div>
    </div>
  ))
}

export default productCartList
