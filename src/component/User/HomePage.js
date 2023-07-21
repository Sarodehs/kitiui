/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'

import axios from 'axios'



const HomePage = () => {
    // const [allProduct, SetProduct] = React.useState([]);

    // useEffect(() => {
    //     axios.get("https://fakestoreapi.com/products")
    //         .then(response => response.data)
    //         .then(res => {
    //             console.log(res)
    //             SetProduct(res)
    //         })
    // }, [])
    const [electronics, Setelectronics] = React.useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/electronics")
            .then(response => response.data)
            .then(res => {
                console.log(res)
                Setelectronics(res)
            })
    }, [])
    const [jewelery, Setjewelery] = React.useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/jewelery")
            .then(response => response.data)
            .then(res => {
                console.log(res)
                Setjewelery(res)
            })
    }, [])

    const [Groceries, SetGroceries] = React.useState([]);

      const getGroceries = async () => {
      const res = await fetch('https://dummyjson.com/products/category/groceries');
      const groceriesData = await res.json();
      console.log(groceriesData.products);
      SetGroceries(groceriesData.products);

    }
  
    useEffect(() => {
      getGroceries();
    }, []);

    return (
        <div id='user'>
            <Header />


             {/* <!---------------------------------banner SECTION start HERE ---------------------------------> */}
            <div className="hot-deal-banner">
                <div className="container">
                    <div className="bg">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner-txt">
                                    <h2><span>coming soon...</span> this month</h2>
                                    <p>Groceries  & Chairs up to 30% off</p>
                                    <div id="hotDealCountdown" className="countdown"></div>
                                    <a href="shop-details.html" className="def-btn">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!---------------------------------banner SECTION end HERE ---------------------------------> */}
        
         {/* <!---------------------------------electronics SECTION start HERE ---------------------------------> */}
            <div className="flash-deal">
                <div className="container">
                    <div className="panel">
                        <div className="panel-header">
                            <div className="row align-items-center">
                                <div className="col-lg-2 col-md-2 col-6">
                                    <h2 className="title">Top Electronics</h2>
                                </div>
                                {/* <div className="col-lg-8 col-md-8 countdown-col">
                                    <div className="countdown-wrap d-flex">
                                        <h3>Ending Soon...</h3>
                                        <div id="flashDealCountdown" className="countdown"></div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-6">
                                    <div className="text-end">
                                        <a href="shop.html" className="explore-section">View more</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="panel-body">

                            <div className="product-custom-row">
                                <div className='product-custom-row '>
                                  
                            {electronics.map((display, ind) => (
                            <div className="custom-col ">
                            <div className="single-product-card">
                                <div className="part-img">
                                    <span className="off-tag">15%</span>
                                    <a href="shop-details.html"><img className='w-50 h-50 justify-contant-center ' src={display.image} alt="Product"/></a>
                                    <div className="cart-option cart-option-bottom">
                                        <ul>
                                            <li>
                                                {/* <a role="button" className="add-to-cart">
                                                    <i className="fa-light fa-cart-shopping"></i>
                                                </a> */}
                                                  <a role="button" className="add-to-cart" 
                                                  >
                                                    <i className="fa-light fa-cart-shopping"></i></a>
                          
                                            </li>
                                            <li>
                                                <a role="button" className="add-to-wish">
                                                    <i className="fa-light fa-heart"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a role="button" className="quick-view">
                                                    <i className="fa-light fa-image"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="shop-details.html" className="view-product">
                                                    <i className="fa-light fa-eye"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="part-txt">
                                    <h4 className="product-name"><a href="shop-details.html">{display.category}</a></h4>
                                    <p className="price"><span>{display.price}</span>$75.00</p>
                                    <div className="star">
                                        <i className="fa-solid fa-star-sharp rated"></i>
                                        <i className="fa-solid fa-star-sharp rated"></i>
                                        <i className="fa-solid fa-star-sharp rated"></i>
                                        <i className="fa-solid fa-star-sharp rated"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
               {/* <!---------------------------------electronics SECTION end HERE ---------------------------------> */}



 {/* <!---------------------------------Jewelery SECTION start HERE ---------------------------------> */}
 <div className="flash-deal">
                <div className="container">
                    <div className="panel">
                        <div className="panel-header">
                            <div className="row align-items-center">
                                <div className="col-lg-2 col-md-2 col-6">
                                    <h2 className="title">Top Jewelery</h2>
                                </div>
                                {/* <div className="col-lg-8 col-md-8 countdown-col">
                                    <div className="countdown-wrap d-flex">
                                        <h3>Ending Soon...</h3>
                                        <div id="flashDealCountdown" className="countdown"></div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-6">
                                    <div className="text-end">
                                        <a href="shop.html" className="explore-section">View more</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="panel-body">

                            <div className="product-custom-row">
                                <div className='product-custom-row '>
                                  
                            {jewelery.map((display, ind) => (
                            <div className="custom-col ">
                            <div className="single-product-card">
                                <div className="part-img">
                                    <span className="off-tag">15%</span>
                                    <a href="shop-details.html"><img className='w-50 h-50 ' src={display.image} alt="Product"/></a>
                                    <div className="cart-option cart-option-bottom">
                                        <ul>
                                            <li>
                                                {/* <a role="button" className="add-to-cart">
                                                    <i className="fa-light fa-cart-shopping"></i>
                                                </a> */}
                                                  <a role="button" className="add-to-cart" 
                                                  >
                                                    <i className="fa-light fa-cart-shopping"></i></a>
                          
                                            </li>
                                            <li>
                                                <a role="button" className="add-to-wish">
                                                    <i className="fa-light fa-heart"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a role="button" className="quick-view">
                                                    <i className="fa-light fa-image"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="shop-details.html" className="view-product">
                                                    <i className="fa-light fa-eye"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="part-txt">
                                    <h4 className="product-name"><a href="shop-details.html">{display.category}</a></h4>
                                    <p className="price"><span>{display.price}</span>$75.00</p>
                                    <div className="star">
                                        <i className="fa-solid fa-star-sharp rated"></i>
                                        <i className="fa-solid fa-star-sharp rated"></i>
                                        <i className="fa-solid fa-star-sharp rated"></i>
                                        <i className="fa-solid fa-star-sharp rated"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
               {/* <!---------------------------------Jewelery SECTION end HERE ---------------------------------> */}


                 {/* <!--------------------------------- CATGORIES SECTION STARTS HERE ---------------------------------> */}
    <section class="rev-6-categories rev-18-categories">
        <div class="container">
            <div class="panel rev-18-panel rev-6-panel">
                <div class="area-heading">
                    <div class="area-heading-left">
                        <h2 class="title">Top Categories</h2>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="category-table">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="#" class="single-category">
                                        <img src="assets/images/icons/category-1.png" alt="icon" class="single-category__img"/>
                                        <h5 class="single-category__title">Monitors</h5>
                                    </a>
                                </td>
                                <td>
                                    <a href="#" class="single-category">
                                        <img src="assets/images/icons/category-2.png" alt="icon" class="single-category__img"/>
                                        <h5 class="single-category__title">Smartwatches</h5>
                                    </a>
                                </td>
                                <td>
                                    <a href="#" class="single-category">
                                        <img src="assets/images/icons/category-3.png" alt="icon" class="single-category__img"/>
                                        <h5 class="single-category__title">Laptops</h5>
                                    </a>
                                </td>
                                <td>
                                    <a href="#" class="single-category">
                                        <img src="assets/images/icons/category-4.png" alt="icon" class="single-category__img"/>
                                        <h5 class="single-category__title">Headphones</h5>
                                    </a>
                                </td>
                                <td>
                                    <a href="#" class="single-category">
                                        <img src="assets/images/icons/category-5.png" alt="icon" class="single-category__img"/>
                                        <h5 class="single-category__title">Camera</h5>
                                    </a>
                                </td>
                                <td>
                                    <a href="#" class="single-category">
                                        <img src="assets/images/icons/category-6.png" alt="icon" class="single-category__img"/>
                                        <h5 class="single-category__title">Fashion</h5>
                                    </a>
                                </td>
                                <td>
                                    <a href="#" class="single-category">
                                        <img src="assets/images/icons/category-7.png" alt="icon" class="single-category__img"/>
                                        <h5 class="single-category__title">Toys</h5>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#" class="single-category">
                                        <img src="assets/images/icons/category-8.png" alt="icon" class="single-category__img"/>
                                        <h5 class="single-category__title">Computer</h5>
                                    </a>
                                </td>
                                <td>
                                    <a href="#" class="single-category">
                                        <img src="assets/images/icons/category-9.png" alt="icon" class="single-category__img"/>
                                        <h5 class="single-category__title">Mobile</h5>
                                    </a>
                                </td>
                                <td>
                                    <a href="#" class="single-category">
                                        <img src="assets/images/icons/category-10.png" alt="icon" class="single-category__img"/>
                                        <h5 class="single-category__title">Networking</h5>
                                    </a>
                                </td>
                                <td>
                                    <a href="#" class="single-category">
                                        <img src="assets/images/icons/category-11.png" alt="icon" class="single-category__img"/>
                                        <h5 class="single-category__title">Groceries</h5>
                                    </a>
                                </td>
                                <td>
                                    <a href="#" class="single-category">
                                        <img src="assets/images/icons/category-12.png" alt="icon" class="single-category__img"/>
                                        <h5 class="single-category__title">Motorcycle</h5>
                                    </a>
                                </td>
                                <td>
                                    <a href="#" class="single-category">
                                        <img src="assets/images/icons/category-13.png" alt="icon" class="single-category__img"/>
                                        <h5 class="single-category__title">Makeup</h5>
                                    </a>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    {/* <!--------------------------------- CATGORIES SECTION ENDS HERE ---------------------------------> */}



{/* <!---------------------------------Groceries SECTION start HERE ---------------------------------> */}
            <div className="flash-deal">
                <div className="container">
                    <div className="panel">
                        <div className="panel-header">
                            <div className="row align-items-center">
                                <div className="col-lg-2 col-md-2 col-6">
                                    <h2 className="title">Top Groceries</h2>
                                </div>
                              
                                {/* <div className="col-lg-2 col-md-2 col-6">
                                    <div className="text-end">
                                        <a href="shop.html" className="explore-section">View more</a>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="panel-body">

                            <div className="product-custom-row">
                                <div className='product-custom-row '>
                                  
                            {Groceries.map((display, ind) => (
                            <div className="custom-col ">
                            <div className="single-product-card">
                                <div className="part-img">
                                    <span className="off-tag">15%</span>
                                    <a href="shop-details.html"><img className='w-50 h-50 ' src={display.thumbnail} alt="Product"/></a>
                                    <div className="cart-option cart-option-bottom">
                                        <ul>
                                            <li>
                                                <a role="button" className="add-to-cart">
                                                    <i className="fa-light fa-cart-shopping"></i>
                                                </a>
                                                 
                                            </li>
                                            <li>
                                                <a role="button" className="add-to-wish">
                                                    <i className="fa-light fa-heart"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a role="button" className="quick-view">
                                                    <i className="fa-light fa-image"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="shop-details.html" className="view-product">
                                                    <i className="fa-light fa-eye"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="part-txt">
                                    <h4 className="product-name"><a href="shop-details.html">{display.title}</a></h4>
                                    <p className="price"><span>{display.price}</span>$75.00</p>
                                    <div className="star">
                                        <i className="fa-solid fa-star-sharp rated"></i>
                                        <i className="fa-solid fa-star-sharp rated"></i>
                                        <i className="fa-solid fa-star-sharp rated"></i>
                                        <i className="fa-solid fa-star-sharp rated"></i>
                                        <i className="fa-solid fa-star-sharp"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
               {/* <!---------------------------------Groceries SECTION end HERE ---------------------------------> */}

            <Footer />
        </div>
    )
}

export default HomePage


