import React from 'react'
import cardone from "../assets/img/card1.png";
import cardtwo from "../assets/img/card2.png";
import cardthree from "../assets/img/card3.png";
import cardfour from "../assets/img/card4.png";
import cardfive from "../assets/img/card5.png";
import cardsix from "../assets/img/card6.png";
import cardseven from "../assets/img/card7.png";
import cardeight from "../assets/img/card8.png";
import cardnine from "../assets/img/card9.png";
import cardten from "../assets/img/card10.png";
import cardeleven from "../assets/img/card11.png";
import all from "../assets/img/allimg.png";

const Simplicity = () => {
  return (
    <div id='Price' className='bg_simple mt_150 overflow-hidden'>
        <div className=' text-center pt_139' data-aos="fade-up">
                <h2 className=' txt_clr font_48 fw_600 lnht_125 ff_hal_display'>Simplicity meets innovative design</h2>
                <p className=' fs_21 fw_400 txt_clr_1 ff_hal_text lnht_150 mt_40 '>It's really easy to start using Digits. <span className=' d-lg-block'>Install the theme, choose a demo and</span><span className=' d-lg-block'>start designing the future of your business!</span></p>
                <button className=' text-white fs_16 fw_400 lnht_100 ff_hal_text bttn_digi mt_39'>Buy Digits</button>
            </div>
            <img className=' w-100 d-xxl-none' src={all} alt="" />
        <div className='bcg_box d-none d-xxl-block ' data-aos="fade-down">
            <div className=' d-flex justify-content-end  align-items-start'>
                <div className=' w-100 img_card_4'>
                    <img className=' img_border card_img' src={cardone} alt="" />
                    <img className=' img_border card_img pt_20' src={cardtwo} alt="" />
                    <img className=' img_border card_img pt_20' src={cardthree} alt="" />
                </div>
                <div className=' w-100 img_card'>
                    <img className=' img_border card_img' src={cardfour} alt="" />
                    <img className=' img_border card_img pt_20' src={cardfive} alt="" />
                </div>
                <div className=' w-100 img_card_1'>
                    <img className=' img_border card_img' src={cardsix} alt="" />
                    <img className=' img_border card_img pt_20' src={cardseven} alt="" />
                </div>
                <div className=' w-100 img_card_2'>
                    <img className=' img_border card_img' src={cardeight} alt="" />
                    <img className=' img_border card_img pt_20' src={cardnine} alt="" />
                </div>
                <div className=' w-100 img_card_3'>
                    <img className=' img_border card_img' src={cardten} alt="" />
                    <img className=' img_border card_img pt_20' src={cardeleven} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Simplicity