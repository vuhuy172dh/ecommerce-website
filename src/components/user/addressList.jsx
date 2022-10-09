import AddressItem from "./addressItem"

function AddressList({addressList = []}) {

    return (
        <>
            {
                addressList.map(item => <AddressItem key={item.id} Name={item.name} PhoneNumber={item.phoneNumber} Address={item.address} Default={item.default}/>)
            }   
        </>
    )
}

export  default AddressList