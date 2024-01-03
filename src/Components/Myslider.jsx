import React from 'react'
import Slider from "react-slick";
import net from "../assets/img/netflix.svg";
import draw from "../assets/img/drawkit.svg";
import figma from "../assets/img/figma.svg";
import cine from "../assets/img/cinemax.svg";
import strip from "../assets/img/stripe.svg";
import google from "../assets/img/google.svg";
import dis from "../assets/img/disnep.svg";
import Marquee from "react-fast-marquee";

const Myslider = () => {
    const settings = {
        dots: false,
        arrows:false,
        autoplay:true,
        infinite: true,
        cssEase:"linear",
        speed:4000,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div id='Products' className=' mt-5 pt-1 pt-md-5'>
        <div className="custom_container mt-5 pt-3 mt-md-5">
            <div className=' text-center mt-xl-5 pt-xl-2' data-aos="zoom-in">
                <h2 className=' txt_clr_2 fs_16 fw_400 ff_hal_text lnht_168'>Trusted by forward-thinking software teams around the world</h2>
            </div>
            <Marquee>
              <div className=' d-flex gap_72 mt_49' data-aos="zoom-in-up">
              <div>
            <img src={net} alt="" />
          </div>
          <div>
            <img src={draw} alt="" />
          </div>
          <div>
          <img src={figma} alt="" />
          </div>
          <div>
          <img src={cine} alt="" />
          </div>
          <div>
          <img src={strip} alt="" />
          </div>
          <div>
          <img src={google} alt="" />
          </div>
          <div>
          <img className=' mr_72' src={dis} alt="" />
          </div>
              </div>
            </Marquee>
            {/* <Slider {...settings} className=' '>
          <div>
            <img src={net} alt="" />
          </div>
          <div>
            <img src={draw} alt="" />
          </div>
          <div>
          <img src={figma} alt="" />
          </div>
          <div>
          <img src={cine} alt="" />
          </div>
          <div>
          <img src={strip} alt="" />
          </div>
          <div>
          <img src={google} alt="" />
          </div>
          <div>
          <img src={dis} alt="" />
          </div>
            </Slider> */}
        </div>
    </div>
  )
}

export default Myslider