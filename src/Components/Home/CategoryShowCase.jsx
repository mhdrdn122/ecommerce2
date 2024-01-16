import React, { useState } from 'react'
import shape1 from '../../assets/images/shape-img/icon/01.png'
import shape2 from '../../assets/images/shape-img/icon/02.png'
import Ratting from '../Utilis/Ratting';
import { Link } from 'react-router-dom';

import catTap1 from '../../assets/images/categoryTab/01.jpg'
import catTap2 from '../../assets/images/categoryTab/02.jpg'
import catTap3 from '../../assets/images/categoryTab/03.jpg'
import catTap4 from '../../assets/images/categoryTab/04.jpg'
import catTap5 from '../../assets/images/categoryTab/05.jpg'
import catTap6 from '../../assets/images/categoryTab/06.jpg'
import catTap7 from '../../assets/images/categoryTab/07.jpg'
import catTap8 from '../../assets/images/categoryTab/08.jpg'

const title = "Our Products";

const ProductData = [
{
imgUrl: catTap1,
cate: 'Shoes',
title: 'Nike Premier X',
author: 'assets/images/course/author/01.jpg',
brand: 'Nike',
price: '$199.00',
id: 1,
},
{
imgUrl: catTap2,
cate: 'Bags',
title: 'Asthetic Bags',
author: 'assets/images/course/author/02.jpg',
brand: 'D&J Bags',
price: '$199.00',
id: 2,
},
{
imgUrl: catTap3,
cate: 'Phones',
title: 'iPhone 12',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Apple',
price: '$199.00',
id: 3,
},
{
imgUrl: catTap4,
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: 'assets/images/course/author/04.jpg',
brand: 'Gucci',
price: '$199.00',
id: 4,
},
{
imgUrl: catTap5,
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
price: '$199.00',
id: 5,
},
{
imgUrl: catTap6,
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
price: '$199.00',
id: 6,
},
{
imgUrl: catTap7,
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: 'assets/images/course/author/01.jpg',
brand: 'Gucci',
price: '$199.00',
id: 7,
},
{
imgUrl: catTap8,
cate: 'Shoes',
title: 'Casual Sneakers',
author: 'assets/images/course/author/02.jpg',
brand: 'Bata',
price: '$199.00',
id: 8,
},
]


const CategoryShowCase = () => {
    const [ items , setItems ] = useState(ProductData)

    const filterItem = (categItem) => {
      const updataItems = ProductData.filter((curElem) => {
        return curElem.cate === categItem
      })
      setItems(updataItems)

    }
  return (
    <div className='course-section style-3 padding-tb'>
        {/* Shape start */}
        <div className='course-shape one'>
            <img src={shape1} alt="shape img" />
        </div>

        <div className='course-shape two'>
            <img src={shape2} alt="shape img" />
        </div>

        {/* Shape End */}

      <div className='container'>

          
        {/* section header start */}
        <div className='section-header'>
          <h2 className='title'>{title}</h2>
          <div className='course-filter-group'>
            <ul className='lab-ul'>
              <li onClick={()=> setItems(ProductData)} >All</li>
              <li onClick={()=> filterItem("Shoes")} >Shoes</li>
              <li onClick={()=> filterItem("Bags")} >Bags</li>
              <li onClick={()=> filterItem("Phones")} >Phones</li>
              <li onClick={()=> filterItem("Beauty")} >Beauty</li>

            </ul>
          </div>

        </div>

        {/* section header end */}

        {/* section body start */}
        <div className='section-wrapper'>
          <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
            {
              items.map((product) => {
                return(
                  <div key={product.id} className='col'>
                    <div className='course-item style-4'>
                      <div className='course-inner'>
                        <div className='course-thumb'>
                          <img src={product.imgUrl} alt="img" />
                          <div className='course-category'>
                            <div className='course-cate'>
                              <a href="#" >{product.cate}</a>
                            </div>
                            <div className='course-reiew'>
                              <Ratting />
                            </div>

                          </div>

                        </div>

                        {/* content */}
                        <div className='course-content'>
                          <Link to={`/shop/${product.id}`}> <h6>{product.title}</h6></Link>
                          <div className='course-footer'>
                            <div className='course-author'> 
                              <Link to='/' className='ca-name' >{product.brand}</Link>
                            </div>
                            <div className='course-price'>
                              {product.price}
                            
                            </div>

                          </div>
                        </div>
                        
                      </div>

                    </div>

                  </div>
                )
              })
            }
          </div>
        </div>

        {/* section body end */}


      </div>



    </div>
  )
}

export default CategoryShowCase