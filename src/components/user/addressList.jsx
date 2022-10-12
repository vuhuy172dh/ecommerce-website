import AddressItem from "./addressItem"

function AddressList({addressList = []}) {

    return (
        <>
            {
                addressList.map(
                        item => <AddressItem key={item.id} address={{
                        Id: item.id,
                        Name: item.name, 
                        PhoneNumber: item.phoneNumber, 
                        Address: item.address, 
                        Default: item.default, 
                        Province: item.province, 
                        District: item.district, 
                        Ward: item.ward}}/>
                    )
            }   
        </>
    )
}

export  default AddressList