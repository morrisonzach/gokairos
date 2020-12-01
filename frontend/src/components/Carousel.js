import Slider from 'react-slick';

function Carousel(props) {
    return (
        <div className="m-5">
            <Slider {...props}>
                {props.slides}
            </Slider>
        </div>
    );
}

export default Carousel;