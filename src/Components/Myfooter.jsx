import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from "../assets/img/logo.svg";
import { Dribble, Envanto, Facebook, Instagram, Twitter } from './Mysvg';

const Myfooter = () => {
  return (
    <div>
        <div className="custom_container pb_107">
            <Row className=' pt_128'>
                <Col md={9} lg={5}>
                    <img className=' cursor_pointer' src={logo} alt="" />
                    <p className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_145 pt_31'>Digits is a website template built to <span className=' d-lg-block'>work seamlesly with the WordPress</span><span className=' d-lg-block'> block editor to create beautifully </span><span className=' d-lg-block'> designed pages in minutes.</span></p>
                </Col>
                <Col md={4} lg={2} xs={6} className=' pt-4 pt-lg-0'>
                    <ul>
                        <li className=' ff_hal_display txt_clr fs_22 fw_600 lnht_20 mb_22'>Pages</li>
                        <li><a href="" className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_250 underlines position-relative'>Home</a></li>
                        <li><a href="" className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_250 underlines position-relative'>About</a></li>
                        <li><a href="" className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_250 underlines position-relative'>News</a></li>
                        <li><a href="" className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_250 underlines position-relative'>Pricing</a></li>
                        <li><a href="" className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_250 underlines position-relative'>Contact</a></li>
                    </ul>
                </Col>
                <Col md={3} lg={2} xs={6} className=' pt-4 pt-lg-0'>
                    <ul>
                        <li className=' ff_hal_display txt_clr fs_22 fw_600 lnht_20 mb_22'>Demos</li>
                        <li><a href="" className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_250 underlines position-relative '>Classic</a></li>
                        <li><a href="" className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_250 underlines position-relative'>Boxy</a></li>
                        <li><a href="" className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_250 underlines position-relative'>Gradient</a></li>
                        <li><a href="" className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_250 underlines position-relative'>Minimal</a></li>
                        <li><a href="" className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_250 underlines position-relative'>Night</a></li>
                    </ul>
                </Col>
                <Col md={3} lg={3} className=' d-flex flex-column align-items-lg-end pt-4 pt-lg-0'>
                    <ul className=' ff_hal_display txt_clr fs_22 fw_600 lnht_20'>
                        <li>Resources</li>
                        <div className=' d-flex gap_24 mt_icon'>
                            <a href="https://www.facebook.com/" target='_blank'><Facebook/></a>
                            <a href="https://www.instagram.com/" target='_blank'><Instagram/></a>
                            <a href="https://twitter.com/" target='_blank'><Twitter/></a>
                            <a href="https://dribbble.com/" target='_blank'><Dribble/></a>
                            <a href="https://elements.envato.com/" target='_blank'><Envanto/></a>
                        </div>
                        <li><a href="" className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_250 underlines position-relative'> Download now</a></li>
                        <li><a href="" className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_250 underlines position-relative'>Documentation</a></li>
                    </ul>
                </Col>
            </Row>
            <div className='footer_line mt_line'></div>
            <div className=' d-flex flex-wrap justify-content-between align-items-center'>
                <div>
                    <p className=' txt_clr_2 ff_hal_text lnht_27 fs_14 fw_400'>Copyright © 2020 tempy.club</p>
                </div>
                <div className=' d-flex gap-5 pt-2'>
                    <p className=' txt_clr_1 ff_hal_text fs_14 fw_400 lnht_27 cursor_pointer'>Privacy Policy</p>
                    <p className=' txt_clr_1 ff_hal_text fs_14 fw_400 lnht_27 cursor_pointer'>Terms of Use</p>
                    <p className=' txt_clr_1 ff_hal_text fs_14 fw_400 lnht_27 cursor_pointer'>GDPR</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Myfooter