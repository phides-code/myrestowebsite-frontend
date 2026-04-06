import { URL_PREFIX } from '../constants';
import type { ImageSource } from '../types';

interface TopBannerProps {
    bannerMessage: string;
    bannerImage: ImageSource;
}

const TopBanner = ({ bannerImage, bannerMessage }: TopBannerProps) => {
    return (
        <div>
            <img
                src={`${URL_PREFIX}/images/${bannerImage.uuidName}`}
                alt={'banner image'}
                style={{
                    width: '100%',
                    maxHeight: '300px',
                    objectFit: 'cover',
                }}
            />
            <p>{bannerMessage}</p>
        </div>
    );
};

export default TopBanner;
