import Icon from './icon/icon'

function Banner() {
  const handleTurnOffBanner = () => {
    console.log('Switch mode')
  }

  return (
    <div className="flex px-4 py-3 bg-primary text-white -mx-6 laptop:-mx-20">
      <p className="flex flex-1 items-center text-h6 font-satoshi laptop:justify-center">
        <Icon icon="delivery_16" />
        <span className="ml-2 overflow-auto">
          Free delivery on all orders over £50 with code easter checkout
        </span>
      </p>
      <button onClick={handleTurnOffBanner} className="">
        <Icon icon="close_24" />
      </button>
    </div>
  )
}

export default Banner
