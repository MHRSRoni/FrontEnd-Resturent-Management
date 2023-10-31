import MenuBar from "../common/container/MenuBar"
import useMenuAndTitleLink from "../common/hooks/useMenuAndTitleLink"
import Title from "../common/presentional/Title"


const InfoHeader = ({header}) => {

    return (
        <>
        <p className="text-lg mt-3 font-semibold text-gray-600">{header}</p>
        <hr className="border-primary mb-2" />
        </>
    )
}


const InfoField = ({info, data}) => {

    return (
        <div className="w-1/3 flex gap-x-2">
            <p>{info ? info + ' : ' : ''} </p>
            <p>{data}</p>
        </div>
    )
}


const AccountInfo = () => {
    return (
        <div className="flex flex-col gap-y-1 mt-2 mb-2 px-4">
                    <div className="flex gap-2 ">
                        <InfoField info={'Customer Id'} data={'454546546545646'} />
                        <InfoField info={'Username'} data={'MdMonirHosen'} />
                        <InfoField info={'Name'} data={'Md monir hosen'} />
                    </div>
                    <div className="flex gap-2 ">
                        <InfoField info={'Email'} data={'mdmonirhose@gmal.com'} />
                        <InfoField info={'Status'} data={'customer'} />
                        <InfoField />
                    </div>
                </div>
    )
}


const AddressInfo = () => {

    return (
        <div className="flex flex-col gap-y-1 mt-2 ps-4">
            <div className="flex ">
                <InfoField info={'District'} data={'Noakhali'} />
                <InfoField info={'Thana'} data={'Senbag'} />
                <InfoField info={'Bajar'} data={'test bajar'} />
            </div>
            <div className="flex ">
                <InfoField info={'Street No'} data={'Main street'} />
                <InfoField info={'Holding No'} data={'test holding'} />
                <InfoField  />
            </div>
                
        </div>
    )
}

const PaymentInfo = () => {

    return (
        <div className="flex flex-col gap-y-1 mt-2 ps-4">
            <div className="flex">
                <InfoField info={'Bank'} data={'Dutch Bangla'} />
                <InfoField info={'Account No'} data={'5648548454546'} />
            </div>
            <div className="flex">
                <InfoField info={'Card'} data={'Visa Card'} />
                <InfoField info={'Card No'} data={'45646465456'} />
            </div>
        </div>
    )
}





const StaffDetails = () => {

    const [activeMenu, activeMenuHandler, menus] = useMenuAndTitleLink(['Staff Profile','Qualification', 'Salary', 'Report Status', 'Send Mail'])

    return (
        <div className="">
            <Title title={activeMenu} />
            <div className="mx-4 mt-2">
                <MenuBar active={activeMenu} setActive={activeMenuHandler} menus={menus}/>
            </div>
            <div className="mt-4 mx-16 shadow px-2 py-5 rounded-lg">
                <div className="bg-center bg-cover h-32 w-32 rounded-md mx-auto" style={{backgroundImage : 'url(https://placehold.co/600X600)'}}></div>
                <InfoHeader header={'Account Information'} />
                <AccountInfo />
                <InfoHeader header={'Address'} />
                <AddressInfo />
                <InfoHeader header={'Payment Information'} />
                <PaymentInfo />
            </div>
            
        </div>
        
    );
};

export default StaffDetails;