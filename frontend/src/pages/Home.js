import Carousel from './../components/Carousel';
import imgs from './../components/HomeImgArray';

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
            img: imgs[0]
        },
        {
            title: "2",
            body: "lorem ipsum dolor sit amet",
            img: imgs[1]
        },
        {
            title: "3",
            body: "lorem ipsum dolor sit amet",
            img: imgs[2]
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
            <img style={{ width: "100%" }} src={slide.img} alt="home slide" />
        </div>
    ));
    return (
        <div className="container" style={{ height: "200vh" }}>
            <Carousel slides={slides} {...settings} />
        </div>
    );
}

export default Home;