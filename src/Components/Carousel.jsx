import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
const settings = {
dots: true,
infinite: true,
speed: 500,
autoplay: true, 
autoplaySpeed: 3000, 
slidesToShow: 1,
slidesToScroll: 1

};

return (
<div className='carousel-container' style={{ marginTop: '20px'}}>
    <Slider {...settings}>
    <div>
        <img src="/062b3d81-fac3-4cec-843b-3e6f3f06a139.jpg" alt="Image 1" />
    </div>
    <div>
        <img src="/20130904_101304_20130826_123026_tour6ok.jpg" alt="Image 2" />
    </div>
    <div>
        <img src="/ben-allan-BIeC4YK2MTA-unsplash.jpg" alt="Image 3" />
    </div>
    <div>
        <img src="/building-768815_1920.webp" alt="Image 4" />
    </div>
    </Slider>
</div>
);
};

export default Carousel;
