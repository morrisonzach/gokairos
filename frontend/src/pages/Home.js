import Carousel from './../components/Carousel';

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const slidesInfo = [
        {
            title: "1",
            body: "lorem ipsum dolor sit amet",
            img: null
        },
        {
            title: "2",
            body: "lorem ipsum dolor sit amet",
            img: null
        }
    ];
    const slides = slidesInfo.map((slide) => (
        <div>
            <h1>
                {slide.title}
            </h1>
            <p>
                {slide.body}
            </p>
        </div>
    ));
    return (
        <div className="container" style={{ height: "200vh" }}>
            <Carousel slides={slides} {...settings} />
        </div>
    );
}

export default Home;