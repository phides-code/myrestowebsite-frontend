interface AddressProps {
    address: string;
}

const Address = ({ address }: AddressProps) => {
    const addressFormatted = address.replace(' ', '+');

    return (
        <div className='page-shell'>
            <h1 className='page-shell__title'>Find Us</h1>
            <div className='address-block'>
                <p>{address}</p>
                <iframe
                    width='100%'
                    height='300'
                    loading='lazy'
                    allowFullScreen
                    style={{
                        border: 0,
                    }}
                    referrerPolicy='no-referrer-when-downgrade'
                    src={`https://www.google.com/maps?q=${addressFormatted}&output=embed`}
                />
            </div>
        </div>
    );
};

export default Address;
