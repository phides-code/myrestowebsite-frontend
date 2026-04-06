interface ContactInfo {
    phone: string;
    email: string;
    instagram: string;
    facebook: string;
    tiktok: string;
}

interface ContactInfoProps {
    contactInfo: ContactInfo;
}

const ContactInfo = (contactInfo: ContactInfoProps) => {
    const { email, facebook, instagram, phone, tiktok } =
        contactInfo.contactInfo;
    return (
        <div>
            <p>Contact Us</p>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>instagram: {instagram}</div>
            <div>facebook: {facebook}</div>
            <div>tiktok: {tiktok}</div>
        </div>
    );
};

export default ContactInfo;
