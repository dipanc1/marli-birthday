import React from 'react'
import './slide.css';
import Video from './Video';
import im1 from './images/1.jpg';
import im2 from './images/2.jpg';
import im3 from './images/3.jpg';
import im4 from './images/4.jpg';
import im5 from './images/5.jpg';
import im6 from './images/6.jpg';
import im7 from './images/7.jpg';
import im8 from './images/8.jpg';
import im9 from './images/9.jpg';

let slides = [
    <img src={im9} alt="24" />,
    <img src={im5} alt="20" />,
    <img src={im7} alt="22" />,
    <img src={im4} alt="19" />,
    <img src={im6} alt="21" />,
    <img src={im3} alt="18" />,
    <img src={im8} alt="23" />,
    <img src={im1} alt="16" />,
    <img src={im2} alt="17" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847470/birthday_web_app/24_cxtbv3.jpg" alt="1" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847470/birthday_web_app/18_emap91.jpg" alt="2" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847470/birthday_web_app/22_yp2z6r.jpg" alt="3" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847470/birthday_web_app/19_costjp.jpg" alt="4" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847471/birthday_web_app/17_shptgf.jpg" alt="5" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847470/birthday_web_app/21_mlkp1v.jpg" alt="6" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847470/birthday_web_app/23_rtvv42.jpg" alt="7" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847471/birthday_web_app/15_c0ynp9.jpg" alt="8" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847471/birthday_web_app/16_c7346j.jpg" alt="9" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847472/birthday_web_app/14_d3fu7o.jpg" alt="10" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847471/birthday_web_app/20_xbwadg.jpg" alt="11" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847472/birthday_web_app/10_juucqw.jpg" alt="12" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847472/birthday_web_app/8_zidykh.jpg" alt="13" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847472/birthday_web_app/11_lxzc3l.jpg" alt="14" />,
    // <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847472/birthday_web_app/13_tc9hkj.jpg" alt="15" />,
];

const Slide = () => {
    const [video, setVideo] = React.useState(false);
    const handleClick = () => {
        setVideo(true);
    }
    return (
        <>{!video ?
            (
                <>
                    <h1 className='clickhere3'>Happy Happy Birthday, My Doll</h1>
                    {/* <div className="crousel">
                        <Carousel slides={slides} interval={1000} />
                    </div> */}
                    <section id="slideshow">
                        <div class="entire-content">
                            <div class="content-carrousel">
                                {slides.map((slide, index) =>
                                    <figure class="shadow">
                                        {slide}
                                    </figure>
                                )}
                            </div>
                        </div>
                    </section>
                    <h1 className='clickhere4'>My Lovely Baby</h1>
                    <h5 className='clickhere5' onClick={handleClick}>Click Here, after seeing the slideshow...</h5>
                </>
            )
            : <Video />}
        </>
    )
}

export default Slide