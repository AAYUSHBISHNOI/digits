import React from 'react'
import { Col, Row } from 'react-bootstrap'
import allimg from "../assets/img/cardimgall.png";
import { Easy, Fast, Figma } from './Mysvg';

const Work = () => {
  return (
    <div id='Company' className=' '>
        <div className="custom_container ">
            <div className=' text-center pt_81' data-aos="zoom-in-down">
                <h2 className=' fs_48 fw_800 txt_clr ff_hal_display lnht_125'>Whatever work you do, <span className=' d-lg-block'>we're able to help</span></h2>
            </div>
            <Row className='justify-content-between align-items-center'>
                <Col lg={6} className=' d-flex justify-content-center' data-aos="zoom-in-left">
                    <img className=' w_100' src={allimg} alt="" />
                </Col>
                <Col lg={5} className=' mt-4 mt-sm-5 mt-lg-0 d-flex justify-content-end flex-column align-item-center' data-aos="zoom-in-right">
                    <div className=' d-flex gap-5'>
                        <div className=''>
                            <Figma/>
                        </div>
                        <div>
                            <p className=' fs_22 fw_600 txt_clr ff_hal_display'>Design and Assets</p>
                            <p className=' txt_clr_1 fs_18 fw_400 lnht_150 ff_hal_text pt-4'>Make your brand stand out with <span className=' d-lg-block'>pixel-perfect design crafted to</span><span className=' d-lg-block'> perfection.</span></p>
                        </div>
                    </div>
                    <div className='card_line mt-4 mb-4 mt-xxl-5  mb-xxl-5'></div>
                    <div className=' d-flex align-items-start gap-5'>
                        <div className=''>
                            <Easy/>
                        </div>
                        <div >
                            <p className=' fs_22 fw_600 txt_clr ff_hal_display'>Easy Content</p>
                            <p className=' txt_clr_1 fs_18 fw_400 lnht_150 ff_hal_text pt-4'>Import your demos or build pages<span className=' d-lg-block'> visually. Bonus: All images and</span><span className=' d-lg-block'> illustrations included!</span></p>
                        </div>
                    </div>
                    <div className=' card_line mt-4 mb-4 mt-xxl-5 mb-xxl-5'></div>
                    <div className=' d-flex gap-5'>
                        <div className=''>
                        <Fast/>
                        </div>
                        <div>
                            <p className=' fs_22 fw_600 txt_clr ff_hal_display'>Fast and Reliable</p>
                            <p className=' txt_clr_1 fs_18 fw_400 lnht_150 ff_hal_text pt-4'>No heavy-weight plugins. No <span className=' d-lg-block'>builders. No unneccesary file</span><span className=' d-lg-block'>  loading. Pure WordPress.</span></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Work