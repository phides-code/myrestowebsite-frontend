interface ContactInfo {
    phone: string;
    email: string;
    address: string;
    instagram: string;
    facebook: string;
    tiktok: string;
    hoursMonday: string;
    hoursTuesday: string;
    hoursWednesday: string;
    hoursThursday: string;
    hoursFriday: string;
    hoursSaturday: string;
    hoursSunday: string;
}

interface ContactInfoProps {
    contactInfo: ContactInfo;
}

const ContactInfo = (contactInfo: ContactInfoProps) => {
    const {
        address,
        email,
        facebook,
        hoursFriday,
        hoursMonday,
        hoursSaturday,
        hoursSunday,
        hoursThursday,
        hoursTuesday,
        hoursWednesday,
        instagram,
        phone,
        tiktok,
    } = contactInfo.contactInfo;
    return (
        <div>
            <p>Contact Us</p>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>address: {address}</div>
            <div>instagram: {instagram}</div>
            <div>facebook: {facebook}</div>
            <div>tiktok: {tiktok}</div>

            <p>Hours</p>
            <div>Monday: {hoursMonday}</div>
            <div>Tuesday: {hoursTuesday}</div>
            <div>Wednesday: {hoursWednesday}</div>
            <div>Thursday: {hoursThursday}</div>
            <div>Friday: {hoursFriday}</div>
            <div>Saturday: {hoursSaturday}</div>
            <div>Sunday: {hoursSunday}</div>
        </div>
    );
};

export default ContactInfo;
