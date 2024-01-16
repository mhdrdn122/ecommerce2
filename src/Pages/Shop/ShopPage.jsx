import React, { useState } from 'react'
import HeaderSection from '../../Components/Utilis/HeaderSection'
import ProductCard from '../../Components/Shop/ProductCard'
import Data from '../../products.json'
import Pagination from '../../Components/Utilis/Pagination'
import Search from '../../Components/Shop/Search'
import ShopCategory from '../../Components/Shop/ShopCategory'
import PopuLarPost from '../../Components/Shop/PopuLarPost'
import Tags from '../../Components/Shop/Tags'
const showResults = "Showing 01 - 12 of 139 Results"

const ShopPage = () => {
  const [ GridList , setGridList ] = useState(true)
  const [ Products , setProducts ] = useState(Data)

  // pagination 
  const [currentPage , setCurrentPage] =  useState(1)
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage ;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage ;
  const currentProducts = Products.slice(indexOfFirstProduct , indexOfLastProduct)

  // function to change the current page 
  const paginate = ( pageNumber ) => {
    setCurrentPage(pageNumber)
  }

  // filter products based on category
  const [selectedCategory , setSelectedCategory] = useState("All")
  const menuItems = [...new Set(Data.map((val) => val.category))]
  
  const filterItem = (curcat) => {
    const newItem =  Data.filter((newVal)=>{
      return newVal.category === curcat
    })
    setSelectedCategory(curcat);
    setProducts(newItem)
  }
  return (

    <div>
      <HeaderSection title="Our Shope Page" curPage="shop"/>
      {/* shop page start   */}

      <div className='shop-page padding-tb'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here start */}
                <div className="shop-title d-flex flex-warp justify-content-between">
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${ GridList ? "gridActive" : "listActive"}`}>
                    <a  className='grid' onClick={() => setGridList(!GridList)}>
                        <i className='icofont-ghost'></i>
                    </a>

                    <a  className='list' onClick={() => setGridList(!GridList)}>
                        <i className='icofont-listine-dots'></i>
                    </a>
                  </div>
                </div>
                {/* layout and title here end */}
                <div>
                  <ProductCard GridList={GridList} Products={currentProducts} />
                </div>

                <div>
                  <Pagination
                  productsPerPage = {productsPerPage} 
                  totalProducts = {Products.length}
                  paginate = {paginate}
                  activePage = {currentPage} />
                </div>
              </article>
            </div>

            <div className="col-lg-4 col-12">
              <aside>
                <Search Products ={Products} GridList ={GridList}/>
                <ShopCategory 
                
                filterItem={filterItem}
                setItem={setProducts}
                menuItems={menuItems}
                setProducts={setProducts}
                setSelectedCategory = {setSelectedCategory}
                selectedCategory={selectedCategory}/>
                <PopuLarPost />
                <Tags />
              </aside>

            </div>
          </div>
        </div>
      </div>
      {/* shop page end   */}

    </div>
  )
}

export default ShopPage