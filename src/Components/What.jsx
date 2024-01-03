import React from 'react'
import { Col, Row } from 'react-bootstrap'
import cardgirl from "../assets/img/girl.svg";
import boy from "../assets/img/boy.svg";
import girl from "../assets/img/cutegirl.svg";

const What = () => {
  return (
    <div>
        <div className="custom_container mb_150">
            <div className=' text-center pt_117' data-aos="fade-right">
                <h2 className=' fs_48 fw_600 txt_clr ff_hal_display lnht_125'>What others are saying</h2>
            </div>
            <Row className=' d-flex justify-content-center'>
                <Col sm={7} md={6} lg={4} data-aos="fade-left">
                    <div className=' my_card text-center text-xl-start'>
                        <div className=' d-flex flex-column justify-content-between h-100'>
                            <div>
                                <p className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_180 pb_39'>Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!</p>
                            </div>
                            <div className=' d-flex justify-content-center text-center flex-column'>
                           <div>
                            <img src={cardgirl} alt="" />
                           </div>
                            <p className=' fs_22 fw_900 lnht_27 ff_hal_display txt_clr pt_23'>Happy User</p>
                            <p className=' fs_18 fw_400 lnht_180 ff_hal_text txt_clr_1'>tempy.club</p>
                            </div>
                        </div>
                        
                    </div>
                </Col>
                <Col sm={7} md={6} lg={4} className=' mt-4 mt-md-0'  data-aos="zoom-in">
                    <div className=' my_card text-center text-xl-start'>
                        <div className=' d-flex flex-column h-100 justify-content-between'>
                            <div>
                                <p className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_180 pb_39'>Really easy to use and customize. easy to understand. Darinka helped me with my site! She answers very quickly, a good service! Thank you very much!</p>
                            </div>
                            <div className=' d-flex justify-content-center text-center flex-column'>
                           <div  className=' '>
                            <img src={boy} alt="" />
                           </div>
                            <p className=' fs_22 fw_900 lnht_27 ff_hal_display txt_clr pt_23'>Happy User</p>
                            <p className=' fs_18 fw_400 lnht_180 ff_hal_text txt_clr_1'>tempy.club</p>
                            </div>
                        </div>
                        
                    </div>
                </Col>
                <Col sm={7} md={6} lg={4} className=' mt-4 mt-lg-0' data-aos="zoom-in-up">
                    <div className=' my_card text-center text-xl-start'>
                        <div className=' d-flex flex-column justify-content-between h-100'>
                            <div>
                                <p className=' fs_18 fw_400 txt_clr_1 ff_hal_text lnht_180 pb_39'>Really pleasing to look at! Documentation (including installation instructions) are clear and that is coming from a relatively new WordPress user.</p>
                            </div>
                            <div className=' d-flex justify-content-center text-center flex-column'>
                           <div className=''>
                            <img src={girl} alt="" />
                           </div>
                            <p className=' fs_22 fw_900 lnht_27 ff_hal_display txt_clr pt_23'>Happy User</p>
                            <p className=' fs_18 fw_400 lnht_180 ff_hal_text txt_clr_1'>tempy.club</p>
                        </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default What