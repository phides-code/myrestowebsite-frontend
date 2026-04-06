interface AddressProps {
    address: string;
}

const Address = ({ address }: AddressProps) => {
    return (
        <div>
            <p>{address}</p>
        </div>
    );
};

export default Address;
