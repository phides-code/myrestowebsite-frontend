interface MainPageProps {
    mainBlurb: string;
}

const Mainpage = ({ mainBlurb }: MainPageProps) => {
    return <p>{mainBlurb}</p>;
};

export default Mainpage;
