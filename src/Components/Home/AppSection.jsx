import React from 'react'
import { Link } from 'react-router-dom'

import appImg1 from '../../assets/images/app/01.jpg'
import appImg2 from '../../assets/images/app/02.jpg'

const btnText = "sign up for Free"
const title = "shop Anytime , Anywhere"
const desc  = " Take shop on Your any device with our app & learn all time what you want. Just download & install & start to learn"

const AppSection = () => {
  return (
    <div className='app-section padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
          <Link to='/sign-up' className='lab-btn mb-4'> {btnText} </Link>
          <h2 className='title'>{title}</h2>
          <p>{desc}</p>
        </div>

        <div className='section-wrapper'>
          <ul className='lab-ul'>
            <li> 
              <a href='#' >
                <img src={appImg1} alt='img'/>
              </a>
            </li>

            <li> 
              <a href='#' >
                <img src={appImg2} alt='img'/>
              </a>
            </li>
          </ul>

        </div>

      </div>

    </div>
  )
}

export default AppSection