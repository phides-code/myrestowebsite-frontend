interface AddressProps {
    address: string;
}

const Address = ({ address }: AddressProps) => {
    return (
        <div className='page-shell'>
            <h1 className='page-shell__title'>Find Us</h1>
            <div className='address-block'>
                <p>{address}</p>
            </div>
        </div>
    );
};

export default Address;
