import React from 'react'
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/clients/avater.jpg'

const title = "More Then 60,000 Ctomers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Jt download & install & start to shopping";

const clientsList = [
{
imgUrl: avatar,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with ',
},
{
imgUrl: avatar,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with ',
},
{
imgUrl: avatar,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with ',
},
{
imgUrl: avatar,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with ',
},
{
imgUrl: avatar,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with ',
},
{
imgUrl: avatar,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with ',
},
{
imgUrl: avatar,
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with ',
},
]


const LocationSprade = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <h2 className='title'>{title}</h2>
                {desc}
            </div>

            {/* main content start*/}
            <div className='section-wrapper'>
              <div className='clients'>
                {
                  clientsList.map( (val , i ) => {
                    return (
                      <div key={i} className='client-list'>
                        <Link to="/sign-up" className='client-content'>
                            <span>{val.text}</span>
                        </Link>
                        <div className='client-thumb'>
                          <img src={val.imgUrl} alt='img' />

                        </div>

                      </div>
                    )
                  })
                }
              </div>

            </div>
            {/* main content end*/}


        </div>
    </div>
  )
}

export default LocationSprade