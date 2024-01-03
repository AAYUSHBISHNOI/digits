import React from 'react'
import { Message } from './Mysvg'

const Ready = () => {
  return (
    <div id='Blog' className='bg_ready'>
        <div className="custom_container">
            <div className=' d-flex pt_text flex-wrap justify-content-md-between justify-content-center align-items-center'>
                <div className=' ' data-aos="fade-up">
                    <h2 className=' text-white fonts_48 fw_600 ff_hal_display lnht_125'>Ready to launch <span className=' d-md-block'>your next website?</span></h2>
                </div>
                <div className=' d-flex flex-column pt-4 pt-lg-0 align-items-lg-end' data-aos="fade-down">
                    <button className=' fs_18 fw_600 txt_clr_1 ff_hal_display lnht_110 bttn_in d-flex align-items-center justify-content-center gap-2'><Message/>Get in touch now</button>
                    <p className=' fs_16 fw_400 ff_hal_text lnht_20 txt_clr_3 mt_19'>Or, take a peek inside our <span className='txt_clr_4'>design studio</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ready