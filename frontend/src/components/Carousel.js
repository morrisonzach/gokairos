import Slider from 'react-slick';

function Carousel(props) {
    return (
        <>
            <Slider {...props}>
                {props.slides}
            </Slider>
        </>
    );
}

export default Carousel;