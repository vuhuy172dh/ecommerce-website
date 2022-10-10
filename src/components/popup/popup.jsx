
function Popup ({children}) {

    return(
        <div className="flex fixed top-0 right-0 left-0 bottom-0">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black bg-opacity-30 z-10 animate-[fadeIn_0.3s_ease-in]"></div>

            {/* popup body */}
            <div className="bg-white m-auto z-20 rounded-md  px-8 py-5 overflow-hidden animate-[growth_0.2s_ease-in]">
                {children}
            </div>
        </div>
    )
}

export default Popup
