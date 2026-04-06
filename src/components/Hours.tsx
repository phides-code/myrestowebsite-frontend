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
        <div className='page-shell'>
            <h1 className='page-shell__title'>Hours</h1>
            <div className='hours-list'>
                <div className='hours-list__row'>
                    <span className='hours-list__day'>Monday</span>
                    <span>{hoursMonday}</span>
                </div>
                <div className='hours-list__row'>
                    <span className='hours-list__day'>Tuesday</span>
                    <span>{hoursTuesday}</span>
                </div>
                <div className='hours-list__row'>
                    <span className='hours-list__day'>Wednesday</span>
                    <span>{hoursWednesday}</span>
                </div>
                <div className='hours-list__row'>
                    <span className='hours-list__day'>Thursday</span>
                    <span>{hoursThursday}</span>
                </div>
                <div className='hours-list__row'>
                    <span className='hours-list__day'>Friday</span>
                    <span>{hoursFriday}</span>
                </div>
                <div className='hours-list__row'>
                    <span className='hours-list__day'>Saturday</span>
                    <span>{hoursSaturday}</span>
                </div>
                <div className='hours-list__row'>
                    <span className='hours-list__day'>Sunday</span>
                    <span>{hoursSunday}</span>
                </div>
            </div>
        </div>
    );
};

export default Hours;
