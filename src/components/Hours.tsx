interface HoursInfo {
    hoursMonday: string;
    hoursTuesday: string;
    hoursWednesday: string;
    hoursThursday: string;
    hoursFriday: string;
    hoursSaturday: string;
    hoursSunday: string;
}

interface HoursInfoProps {
    hoursInfo: HoursInfo;
}

const Hours = (hoursInfo: HoursInfoProps) => {
    const {
        hoursFriday,
        hoursMonday,
        hoursSaturday,
        hoursSunday,
        hoursThursday,
        hoursTuesday,
        hoursWednesday,
    } = hoursInfo.hoursInfo;

    return (
        <div>
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

export default Hours;
