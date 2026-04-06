interface MainPageProps {
    mainBlurb: string;
}

const Mainpage = ({ mainBlurb }: MainPageProps) => {
    return (
        <div className='page-shell'>
            <p className='main-page__blurb'>{mainBlurb}</p>
        </div>
    );
};

export default Mainpage;
