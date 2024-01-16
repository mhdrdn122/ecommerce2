import React from 'react'
import { Link } from 'react-router-dom';
import cat1 from "../../assets/images/category/01.jpg"
import cat2 from "../../assets/images/category/02.jpg"
import cat3 from "../../assets/images/category/03.jpg"
import cat4 from "../../assets/images/category/04.jpg"
import cat5 from "../../assets/images/category/05.jpg"
import cat6 from "../../assets/images/category/06.jpg"


const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
{
imgUrl: cat1,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'DSLR Camera',
},
{
imgUrl: cat2 ,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Shoes',
},
{
imgUrl: cat3,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Photography',
},
{
imgUrl: cat4,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Formal Dress',
},
{
imgUrl: cat5,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Colorful Bags',
},
{
imgUrl: cat6,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Home Decor',
},
]

const HomeCategory = () => {
  return (
    <div category-section style-4 padding-b>
       <div className='container'>
        {/* section header  start*/}
            <div className='section-header text-center'>
                <span className='subtitle'>{subTitle}</span>
                <h2 className='title'>{title}</h2>
            </div>
        {/* section header  end*/}

        {/* section card start*/}

            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                    {
                        categoryList.map((val,i) => (
                            <div key={i} className='col'>
                                <Link to="/shop" className='category-item'>
                                  <div className='category'>
                                        {/* image thumbnall*/}
                                        <div className='category-thumb'>
                                            <img src={val.imgUrl} alt='imgCat'/>
                                        </div>

                                        {/* content */}
                                        <div className='category-content'>
                                            <div className='cate-icon'>
                                                <i className={val.iconName}></i>
                                            </div>
                                            <Link to="/shop">{val.title}</Link>
                                        </div>
                                  </div>
                                </Link>
                             </div>
                        ))

                    }
                </div>

            </div>
        {/* section card end*/}


        {/* btn get start */}
        <div className='text-center mt-5'>
            <Link to='/shop' className='lab-btn'>
                <span>
                    {btnText}
                </span>
            </Link>

        </div>

        {/* btn get end */}



        </div> 
    </div>
  )
}

export default HomeCategory