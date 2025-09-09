import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
        {/* ------ left side ------= */}
        <div>
            <p>
                Book Appointment <br>
                </br>
                With Trusted Doctors
            </p>
            <div>
                <img src={assets.group_profiles} alt='' />
                <p>
                    Simply browse through our trusted cotors <br></br> schedule your appointments hassle-free
                </p>
            </div>
            <a href=''>
                Book appointment <img src={assets.arrow_icon} alt='' />
            </a>
        </div>
        {/* ------ right side ------= */}
        <div>
            <img src = {assets.header_img} alt='' />
        </div>
    </div>

  )
}

export default Header