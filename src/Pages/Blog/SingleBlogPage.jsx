import React, { useState } from 'react'
import blogList from '../../utilis/blogdata'
import { useParams } from 'react-router'
import HeaderSection from '../../Components/Utilis/HeaderSection'

import Tags from '../../Components/Shop/Tags'
import PopuLarPost from '../../Components/Shop/PopuLarPost'

import single1 from '../../assets/images/blog/single/01.jpg'
import single2 from '../../assets/images/blog/single/02.jpg'


const socialList = [
    {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
    },
    {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
    },
    {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
    },
    {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
    },
    {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
    },
];
    
const SingleBlogPage = () => {
    const [blog , setBlog] =  useState(blogList)
    const {id} = useParams()

    const result = blog.filter( b => b.id === Number(id) )

  return (
    <div>
        <HeaderSection title={"Single Blog Page"} curPage={"Blog / Blog Details"}/>

        <div className="blog-section blog-single padding-tb section-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <article>
                            <div className="section-wrapper">
                                <div className="row row-cols-1 justify-content-center g-4">
                                    <div className="col">
                                        <div className="post-item style-2">
                                            <div className="post-inner">
                                                {
                                                    result.map((item) => (
                                                        <div key={item.id}>
                                                            <div className="post-thumb">
                                                                <img className='w-100' src={item.imgUrl} alt={item.imgAlt} />
                                                            </div>

                                                            <div className="post-content">
                                                                <h3>{item.title}</h3>
                                                                <div className="meta-post">
                                                                    <ul className="lab-ul">
                                                                        {
                                                                            item.metaList.map( (val , i) => (
                                                                                <li key={i}>
                                                                                        <i className={val.iconName}></i> {"  "}
                                                                                        {val.text}
                                                                                </li>
                                                                            ) )
                                                                        }
                                                                    </ul>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                     Odio totam aliquid quam velit tempora temporibus alias eos,
                                                                      ut adipisci expedita quia qui deserunt natus, dolores rem beatae repellendus,
                                                                       explicabo atque reiciendis modi iusto enim earum quae blanditiis! Ratione dicta similique ducimus,
                                                                     earum, saepe sit, exercitationem minima modi quas animi tenetur?
                                                                </p>
                                                                <blockquote>
                                                                    <p>
                                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                                         Iste distinctio autem incidunt ad reprehenderit at ex culpa nulla placeat minima aliquam id dolor,
                                                                         fugiat voluptate harum, molestiae optio eum numquam.
                                                                        <cite>
                                                                            <a href="#">
                                                                                ...Melissa Hunter
                                                                            </a>
                                                                        </cite>
                                                                    </p>
                                                                </blockquote>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                     Odio totam aliquid quam velit tempora temporibus alias eos,
                                                                      ut adipisci expedita quia qui deserunt natus, dolores rem beatae repellendus,
                                                                       explicabo atque reiciendis modi iusto enim earum quae blanditiis! Ratione dicta similique ducimus,
                                                                     earum, saepe sit, exercitationem minima modi quas animi tenetur?
                                                                </p>
                                                                <img src={single1} alt='img'/>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                     Odio totam aliquid quam velit tempora temporibus alias eos,
                                                                      ut adipisci expedita quia qui deserunt natus, dolores rem beatae repellendus,
                                                                       explicabo atque reiciendis modi iusto enim earum quae blanditiis! Ratione dicta similique ducimus,
                                                                     earum, saepe sit, exercitationem minima modi quas animi tenetur?
                                                                </p>
                                                                <div className="video-thumb">
                                                                    <img src={single2} alt='img'/>
                                                                    <a href="#" className='video-button popup'>
                                                                        <i className='icofont-ui-play'></i>
                                                                    </a>
                                                                </div>

                                                                <p>{item.desc}</p>
                                                                <div className="tags-section">
                                                                    <ul className="tags lab-ul">
                                                                        <li>
                                                                            <a href="#">Agency</a>
                                                                        </li>

                                                                        <li>
                                                                            <a href="#">Agency</a>
                                                                        </li>

                                                                        <li>
                                                                            <a href="#">Agency</a>
                                                                        </li>
                                                                    </ul>

                                                                    <ul className="lab-ul social-icons">
                                                                        {
                                                                            socialList.map( (val , i) => (
                                                                                <li key={i}>
                                                                                    <a href="#" className={val.className}>
                                                                                        <i className={val.iconName}></i>
                                                                                    </a>
                                                                                </li>
                                                                            ))
                                                                        }
                                                                         
                                                                    </ul>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="navigations-part">
                                            <div className="left">
                                                <a href="#" className='prev'>
                                                    <i className="icofont-double-left"></i> Previous Blog
                                                </a>
                                                <a href="#" className='title'>
                                                    Evisculate Parallel Processes Vie Technice Sound Models Authoritative

                                                </a>
                                            </div>

                                            <div className="right">
                                                <a href="#" className='prev'>
                                                     Previous Blog <i className="icofont-double-right"></i>
                                                </a>
                                                <a href="#" className='title'>
                                                    Evisculate Parallel Processes Vie Technice Sound Models Authoritative

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="col-lg-4 col-12">
                        <Tags />
                        <PopuLarPost />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlogPage