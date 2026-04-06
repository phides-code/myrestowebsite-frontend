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
        <div className='page-shell'>
            <h1 className='page-shell__title'>Contact us</h1>
            <div className='contact-grid'>
                <div className='contact-grid__row'>
                    <span className='contact-grid__label'>Email</span>
                    <span className='contact-grid__value'>{email}</span>
                </div>
                <div className='contact-grid__row'>
                    <span className='contact-grid__label'>Phone</span>
                    <span className='contact-grid__value'>{phone}</span>
                </div>
                <div className='contact-grid__row'>
                    <span className='contact-grid__label'>Instagram</span>
                    <span className='contact-grid__value'>{instagram}</span>
                </div>
                <div className='contact-grid__row'>
                    <span className='contact-grid__label'>Facebook</span>
                    <span className='contact-grid__value'>{facebook}</span>
                </div>
                <div className='contact-grid__row'>
                    <span className='contact-grid__label'>TikTok</span>
                    <span className='contact-grid__value'>{tiktok}</span>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
