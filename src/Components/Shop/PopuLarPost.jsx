import React from 'react'

import pop1 from "../../assets/images/blog/10.jpg"
import pop2 from "../../assets/images/blog/11.jpg"
import pop3 from "../../assets/images/blog/12.jpg"
import pop4 from "../../assets/images/blog/09.jpg"
import { Link } from 'react-router-dom'

const title = "Most Popular Post"

const postList = [
    {
    id:1,
    imgUrl: pop1,
    imgAlt: 'rajibraj91',
    title: 'Poor People Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    {
    id:2,
    imgUrl: pop2,
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    {
    id:3,
    imgUrl: pop3,
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    {
    id:4,
    imgUrl: pop4,
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    ]
    
const PopuLarPost = () => {
  return (
    <div className='widget widget-post'>
        <div className="widget-header">
            <h5 className="title">{title}</h5>
        </div>

        <ul className="widget-wrapper">
            {
                postList.map((blog,i) => (
                    <li key={i} className='d-flex flex-wrap justify-content-between'>
                        <div className="post-thumb">
                            <Link to={`/blog/${blog.id}`}>
                                <img src={blog.imgUrl} alt={blog.imgAlt} />
                            </Link>
                        </div>
                        <div className="post-content">
                            <Link to={`/blog/${blog.id}`}>
                                <h5>{blog.title}</h5>
                                <p>{blog.date}</p>
                            </Link>
                        </div>

                    </li>
                ))
            }
        </ul>
        
    </div>
  )
}

export default PopuLarPost