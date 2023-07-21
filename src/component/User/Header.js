/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Header() {
    return (
        <div id='user' className='class="header"'>




            <div className="header header-inner">
                <div className="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-7 col-lg-7">
                                <ul className="top-header-link d-lg-flex d-none">
                                    <li>
                                        <span>SHOP EVENTS & SAVE UP TO 65% OFF!</span>
                                    </li>
                                    <li>
                                        <span className="mr-5px">Call Us:</span><a href="tel:001-1234-88888"> 001-1234-88888</a>
                                    </li>
                                    <li>
                                        <a href="/#">Sell On Kirti.Today </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xxl-6 col-xl-5 col-lg-5">
                                <ul className="top-header-link justify-content-lg-end justify-content-center">
                                    <li>
                                        <a href="/#">Track my order</a>
                                    </li>
                                    <li>
                                        <select name="currency" id="currency" className="select">
                                            <option value="USD">Dollar (USD)</option>
                                            <option value="BDT">Taka (BDT)</option>
                                        </select>
                                    </li>
                                    <li>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header">
                    <div className="bottom-header">
                        <div className="container">
                            <div className="row justify-content-between align-items-center g-md-4 g-sm-0">
                                <div className="col-xxl-3 col-xl-2 col-lg-2 col-sm-3 col-6">
                                    <div className="logo">
                                        <a href="index-2.html">
                                            <img src="./assets/images/kirti.today/Kirti Logo 1.png" alt="logo" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-7 col-lg-8 col-sm-6 col-12 search-col">
                                    <div className="header-search">
                                        <form>
                                            <div className="wrap">
                                                <select name="category" className="select">
                                                    <option value="">All Categories</option>
                                                    <option value="1">Women's Fashion</option>
                                                    <option value="2">Men's Fashion</option>
                                                    <option value="3">Photography </option>
                                                    <option value="4">Watches & Accessories</option>
                                                    <option value="5">TV & Home Appliances</option>
                                                    <option value="6">Bags & Shoes</option>
                                                    <option value="7">Toys , Kids & Babies</option>
                                                    <option value="8">Headphone</option>
                                                </select>
                                                <span className="devider"></span>
                                                <input type="search" name="search" placeholder="What do you need?" />
                                            </div>
                                            <button type="submit">
                                                <span><i className="fa-light fa-magnifying-glass"></i></span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-xl-3 col-lg-2 col-sm-3 col-6">
                                    <ul className="bottom-header-right d-flex align-items-center justify-content-end">
                                        <li className="live-chat d-xl-flex d-none align-items-center">
                                            <div className="icon">
                                                <img src="assets/images/call-icon.png" alt="call" />
                                            </div>
                                            <div className="txt">
                                                <span className="d-block">Live Chat or :</span>
                                                <a className="d-block" href="tel:+997509153">+997 509 153</a>
                                            </div>
                                        </li>
                                        <li className="header-cart-options">
                                            <a role="button" className="search-open d-sm-none"><i className="fa-light fa-magnifying-glass"></i></a>
                                            <a href="compare.html" className="compare-list-btn"><i className="fa-light fa-shuffle"></i></a>
                                            <a role="button" className="wish-list-btn">
                                                <i className="fa-light fa-heart"></i>
                                                <span className="quantity">02</span>
                                            </a>
                                            <a role="button" className="cart-list-btn">
                                                <i className="fa-light fa-cart-shopping"></i>
                                                <span className="quantity">03</span>
                                            </a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




                <div className="bottom-header">
                    <div className="container">
                       
                        <div className="row align-items-center">
                          
                                <nav className="navbar navbar-expand-lg">
                                    <div className="container-fluid">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <nav id="revel-mobile-menu" className="revel-mobile-menu">
                                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="/HomePage">Home</a>
                                                    </li>
                                                    <li className=" nav-item">
                                                        <a className="nav-link" href="/About">About</a>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="/#" id="shopDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Shop
                                                        </a>
                                                        <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                                                            <li><a className="dropdown-item" href="shop.html">Shop Left Bar</a></li>
                                                            <li><a className="dropdown-item" href="shop-right-bar.html">Shop Right Bar</a></li>
                                                            <li><a className="dropdown-item" href="shop-details.html">Shop Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="/#" id="pageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            PAGES
                                                        </a>
                                                        <ul className="dropdown-menu" aria-labelledby="pageDropdown">
                                                            <li><a className="dropdown-item" href="account.html">Account Page</a></li>
                                                            <li><a className="dropdown-item" href="cart.html">Cart Page</a></li>
                                                            <li><a className="dropdown-item" href="compare.html">Compare Page</a></li>
                                                            <li><a className="dropdown-item" href="faq.html">FAQ Page</a></li>
                                                            <li><a className="dropdown-item" href="wishlist.html">Wishlist</a></li>
                                                            <li><a className="dropdown-item" href="register.html">Register Page</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="/#" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Blog
                                                        </a>
                                                        <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                                                            <li><a className="dropdown-item" href="blog.html">Blog Page</a></li>
                                                            <li><a className="dropdown-item" href="blog-details.html">Blog Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="/Contact">Contact</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </nav>
                          
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--------------------------------- HEADER CART LIST START ---------------------------------> */}
    <div class="header-cart-wrap" id="headerCartWrap">
        <div class="cart-list">
            <div class="title">
                <h3>Shopping Cart</h3>
                <button class="cart-close"><i class="fa-regular fa-xmark"></i></button>
            </div>
            <ul>
                <li>
                    <a href="shop-details.html">
                        <div class="part-img">
                            <img src="assets/images/feat-product-3.jpg" alt="Image"/>
                        </div>
                        <div class="part-txt">
                            <span class="name">Diamond wedding ring</span>
                            <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                        </div>
                    </a>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </li>
                <li>
                    <a href="shop-details.html">
                        <div class="part-img">
                            <img src="assets/images/feat-product-2.jpg" alt="Image"/>
                        </div>
                        <div class="part-txt">
                            <span class="name">Living Summer Chair</span>
                            <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                        </div>
                    </a>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </li>
                <li>
                    <a href="shop-details.html">
                        <div class="part-img">
                            <img src="assets/images/feat-product-10.jpg" alt="Image"/>
                        </div>
                        <div class="part-txt">
                            <span class="name">Wireless Headphone</span>
                            <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                        </div>
                    </a>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </li>
            </ul>
            <div class="total">
                <p>Subtotal: <span>$15:00</span></p>
            </div>
            <div class="btn-box">
                <a href="#" class="def-btn">View Cart</a>
                <a href="#" class="def-btn">Checkout</a>
            </div>
        </div>
        
    </div>
    {/* <!--------------------------------- HEADER CART LIST END ---------------------------------> */}



    {/* <!--------------------------------- HEADER WISH LIST START ---------------------------------> */}
    <div class="header-cart-wrap" id="headerWishWrap">
        <div class="cart-list">
            <div class="title">
                <h3>Wish List</h3>
                <button class="wish-close"><i class="fa-regular fa-xmark"></i></button>
            </div>
            <ul>
                <li>
                    <a href="shop-details.html">
                        <div class="part-img">
                            <img src="assets/images/feat-product-3.jpg" alt="Image"/>
                        </div>
                        <div class="part-txt">
                            <span class="name">Diamond wedding ring</span>
                            <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                        </div>
                    </a>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </li>
                <li>
                    <a href="shop-details.html">
                        <div class="part-img">
                            <img src="assets/images/feat-product-2.jpg" alt="Image"/>
                        </div>
                        <div class="part-txt">
                            <span class="name">Living Summer Chair</span>
                            <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                        </div>
                    </a>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </li>
                <li>
                    <a href="shop-details.html">
                        <div class="part-img">
                            <img src="assets/images/feat-product-10.jpg" alt="Image"/>
                        </div>
                        <div class="part-txt">
                            <span class="name">Wireless Headphone</span>
                            <span>1 <i class="fa-regular fa-xmark"></i> $5.00</span>
                        </div>
                    </a>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </li>
            </ul>
            <div class="total">
                <p>Subtotal: <span>$15:00</span></p>
            </div>
            <div class="btn-box">
                <a href="#" class="def-btn">View Wish List</a>
                <a href="#" class="def-btn">Add All To Cart</a>
            </div>
        </div>
    </div>
    {/* <!--------------------------------- HEADER WISH LIST END ---------------------------------> */}


        </div>
    )
}

export default Header
