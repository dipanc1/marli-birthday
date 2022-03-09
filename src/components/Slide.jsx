import React from 'react'
import { Carousel } from '3d-react-carousal';
import './slide.css';

let slides = [
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847470/birthday_web_app/24_cxtbv3.jpg" alt="1" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847470/birthday_web_app/18_emap91.jpg" alt="2" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847470/birthday_web_app/22_yp2z6r.jpg" alt="3" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847470/birthday_web_app/19_costjp.jpg" alt="4" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847471/birthday_web_app/17_shptgf.jpg" alt="5" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847470/birthday_web_app/21_mlkp1v.jpg" alt="6" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847470/birthday_web_app/23_rtvv42.jpg" alt="7" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847471/birthday_web_app/15_c0ynp9.jpg" alt="8" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847471/birthday_web_app/16_c7346j.jpg" alt="9" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847472/birthday_web_app/14_d3fu7o.jpg" alt="10" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847471/birthday_web_app/20_xbwadg.jpg" alt="11" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847472/birthday_web_app/10_juucqw.jpg" alt="12" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847472/birthday_web_app/8_zidykh.jpg" alt="13" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847472/birthday_web_app/11_lxzc3l.jpg" alt="14" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847472/birthday_web_app/13_tc9hkj.jpg" alt="15" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847472/birthday_web_app/9_vjlwmk.jpg" alt="16" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847472/birthday_web_app/7_fpwhov.jpg" alt="17" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847473/birthday_web_app/6_guj4eh.jpg" alt="18" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847473/birthday_web_app/12_bpuy6s.jpg" alt="19" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847473/birthday_web_app/3_e4vett.jpg" alt="20" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847473/birthday_web_app/5_crg6xo.jpg" alt="21" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847474/birthday_web_app/2_qnn7x0.jpg" alt="22" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847474/birthday_web_app/1_fkwom1.jpg" alt="23" />,
    <img src="https://res.cloudinary.com/dipanc1/image/upload/v1646847473/birthday_web_app/4_nrxq2i.jpg" alt="24" />,
];

const Slide = () => {
    return (
        <>
            <h1 className='clickhere3'>Happy Happy Birthday, My Doll</h1>
            <div className="crousel">
                <Carousel slides={slides} interval={1000} />
            </div>
            <h1 className='clickhere4'>My Lovely Baby</h1>
        </>
    )
}

export default Slide