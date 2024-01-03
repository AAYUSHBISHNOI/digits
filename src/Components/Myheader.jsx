import React from 'react'
import { useState } from 'react'
import logo from "../assets/img/logo.svg";
import headimg from "../assets/img/haedimg.png";
import lady from "../assets/img/lady.svg";
import triangle from "../assets/img/pinktriangle.svg";
import circle from "../assets/img/pinkcircle.svg";
import blue from "../assets/img/bluecircle.svg";
import yellow from "../assets/img/yellowcircle.svg";
import { Close, Open } from './Mysvg';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import arrow from "../assets/img/arrow-down.svg";

const Myheader = () => {
    const [show, setShow] = useState(false);
    if(show){
      document.body.classList.add("overflow-hidden")
    }else{
      document.body.classList.remove("overflow-hidden")
    }
    const Movement = () => {
      setShow(false);
    };
  return (
    <div>
        <nav className=' py-2'>
            <div className="custom_container">
                <div className=' d-flex justify-content-between align-items-center'>
                  <div className='  d-flex align-items-center gap_85'>
                    <a href="headlogo"><img src={logo} alt="" /></a>
                        <ul className={show ? "open": ""}>
                          <li><a href="#Home" onClick={Movement} className=' ff_hal_text txt_clr fs_16 fw_400 lnht_500 underlines position-relative'>Homepages</a></li>
                          <li><a href="#Products" onClick={Movement} className=' ff_hal_text txt_clr fs_16 fw_400 lnht_500 underlines position-relative'>Products</a></li>
                          <li className=' d-flex gap-3 align-items-center'><a href="#Company" onClick={Movement} className=' ff_hal_text txt_clr fs_16 fw_400 lnht_500 underlines position-relative'>Company</a>
                          <img className=' cursor_pointer' src={arrow} alt="" />
                          </li>
                          <li><a href="#Price" onClick={Movement} className=' ff_hal_text txt_clr fs_16 fw_400 lnht_500 underlines position-relative'>Pricing</a></li>
                          <li><a href="#Blog" onClick={Movement} className=' ff_hal_text txt_clr fs_16 fw_400 lnht_500 underlines position-relative'>Blog</a></li>
                          <div className=' d-flex flex-column align-items-center gap-5 d-lg-none'>
                            <li><a href="" className=' ff_hal_text txt_clr fs_16 fw_400 mb-0 underlines position-relative'>+00 123 456 789</a></li>
                            <button className=' ff_hal_text text-white fs_16 fw_400 bttn_us lnht_250'>Contact Us</button>
                         </div>
                        </ul>
                  </div>
                 <div className=' d-none d-lg-block'>
                 <div className=' d-flex align-items-center gap-4'>
                    <ul>
                      <li><a href="" className=' ff_hal_text txt_clr fs_16 fw_400 mb-0 underlines position-relative'>+00 123 456 789</a></li>
                    </ul>
                    <button className=' ff_hal_text text-white fs_16 fw_400 bttn_us lnht_250'>Contact Us</button>
                  </div>
                 </div>
                  <button className='open d-lg-none navicon z_index' onClick={() => {setShow(!show); }}>{show ? <Close/>:<Open/>}</button>
                </div>
            </div>
        </nav>
        <section id='Home' className=' bg_header'>
          <div className="custom_container">
            <div className=' pt_146 text-center' data-aos="fade-up">
              <h1 className=' ff_hal_display txt_clr fs_56 fw_800  lnht_105'>Good design meets <span className=' d-lg-block'>great user experience</span></h1>
            </div>
            <div className=' text-center pt_27' data-aos="fade-down">
              <p className='txt_clr_1 fs_18 fw_400 ff_hal_text lnht_150 pt_27'>For everyone, from beginners to experts</p>
            </div>
            <div className=' d-flex align-items-center justify-content-center gap_22 mt_29' data-aos="fade-right">
              <button className=' fs_16 fw_400 text-white lnht_100 ff_hal_text btn_buy'>Buy Digits</button>
              <button className=' fs_16 fw_400 txt_clr_1 lnht_100 ff_hal_text btn_see'>See the Features</button>
            </div>
            <div className=' d-flex justify-content-center mt_68 position-relative'>
              <img className=' position-absolute img_lady z-3 d-none d-md-block' src={lady} alt="" />
              <img className=' position-absolute img_triangle d-none d-md-block' src={triangle} alt="" />
              <img className=' position-absolute img_circle' src={circle} alt="" />
              <img className=' position-absolute img_blue' src={blue} alt="" />
              <img className=' position-absolute img_yellow d-none d-md-block' src={yellow} alt="" />
              <img className=' w_60 w-100 z-2' src={headimg} alt="" data-aos="fade-left" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Myheader