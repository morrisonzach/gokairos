import Carousel from './../components/Carousel';
import imgs from './../components/HomeImgArray';
import './Home.css';

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const slidesInfo = [
        {
            id: 0,
            title: "1",
            body: "lorem ipsum dolor sit amet",
            img: imgs[0]
        },
        {
            id: 1,
            title: "2",
            body: "lorem ipsum dolor sit amet",
            img: imgs[1]
        },
        {
            id: 2,
            title: "3",
            body: "lorem ipsum dolor sit amet",
            img: imgs[2]
        }
    ];
    const slides = slidesInfo.map((slide) => (
        <div key={slide.id}>
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