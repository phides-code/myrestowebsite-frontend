import { URL_PREFIX } from '../constants';
import type { ImageSource } from '../types';

interface TopBannerProps {
    bannerMessage: string;
    bannerImage: ImageSource;
}

const TopBanner = ({ bannerImage, bannerMessage }: TopBannerProps) => {
    return (
        <header className='top-banner'>
            <img
                className='top-banner__image'
                src={`${URL_PREFIX}/images/${bannerImage.uuidName}`}
                alt='Banner'
            />
            <p className='top-banner__message'>{bannerMessage}</p>
        </header>
    );
};

export default TopBanner;
