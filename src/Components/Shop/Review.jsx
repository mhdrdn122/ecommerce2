import React, { useState } from 'react'
import instructor1 from '../../assets/images/instructor/01.jpg'
import instructor2 from '../../assets/images/instructor/02.jpg'
import instructor3 from '../../assets/images/instructor/03.jpg'
import instructor4 from '../../assets/images/instructor/04.jpg'
import Ratting from '../Utilis/Ratting'

import shop1 from '../../assets/images/shop/01.jpg'

const reviwtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: instructor1,
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: instructor2,
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: instructor3,
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: instructor4,
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
  ];

const Review = () => {
    const [ reviewShow , setReviewShow ] = useState(true)
  return (
    <>
        <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
            <li className="desc" onClick={() => setReviewShow(!reviewShow)}>Description</li>
            <li className="rev" onClick={() => setReviewShow(!reviewShow)}>Reviews {ReviewList.length}</li>
        </ul>

        {/* Desc & Review Content   */}
        <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
            <div className="review-showing">
                <ul className="content lab-ul">
                    {
                        ReviewList.map((review , i) => (
                            <li key={i}>
                                <div className="post-thumb">
                                    <img src={review.imgUrl} alt={review.imgAlt} />
                                </div>
                                <div className="post-content">
                                    <div className="entry-meta">
                                        <div className="posted-on">
                                            <a href='#'>{review.name}</a>
                                            <p>{review.date}</p>
                                        </div>
                                        <Ratting/>
                                    </div>
                                    <div className="entry-content">
                                        <p>{review.desc}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>

                {/* Add Review Field */}
                <div className="client-review">
                    <div className="review-form">
                        <div className="review-title">
                            <h5>{reviwtitle}</h5>
                        </div>

                        <form action="action" className="row">
                            <div className="col-md-4 col-12">
                                <input type="text" name='name' id='name' placeholder='Full Name *' />
                            </div>
                            <div className="col-md-4 col-12">
                                <input type="email" name='email' id='name' placeholder='Your Email *' />
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="rating">
                                    <span className="me-2">Your Rating</span>
                                    <Ratting />
                                </div>
                            </div>
                            <div className="col-md-12 col-12">
                                <textarea name='message' id='message' rows={8} placeholder='Type Here Message'></textarea>
                            </div>
                            <div className="col-12">
                                <button type='submit' className="default-button">
                                    <span>Submit Review</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            { /* Description  */}
            <div className="description">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aspernatur minima autem, hic velit ipsam qui natus odio aperiam dolor dolore quidem maxime necessitatibus accusantium adipisci! Est, sequi nihil tempore iusto tempora facilis, voluptatibus placeat eveniet dolores porro, ullam corrupti exercitationem molestias consequatur magnam dolorum voluptatem excepturi quas esse! Est?
                </p>

                <div className="post-item">
                    <div className="post-thumb">
                        <img src={shop1} alt="" />
                    </div>
                    <div className="post-content">
                        <ul className="lab-ul">
                            <li>Lorem ipsum dolor, sit amet consectetur .</li>
                            <li>Lorem ipsum dolor,  adipisicing.</li>
                            <li> sit amet consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor, sit amet consectetur .</li>
                            <li> sit amet consectetur adipisicing.</li>
                            <li> sit amet consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor,  adipisicing.</li>

                        </ul>
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aspernatur minima autem, hic velit ipsam qui natus odio aperiam dolor dolore quidem maxime necessitatibus accusantium adipisci! Est, sequi nihil tempore iusto tempora facilis, voluptatibus placeat eveniet dolores porro, ullam corrupti exercitationem molestias consequatur magnam dolorum voluptatem excepturi quas esse! Est?
                </p>

            </div>
        </div>
    </>
  )
}

export default Review