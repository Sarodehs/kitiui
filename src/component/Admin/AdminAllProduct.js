/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import VenDashboard from '../Vendors/VenDashboard'

const AdminAllProduct = () => {
    return (
        <div>
            <div id='dashboad'>

                <body className="body-padding body-p-top light-theme">

                    <VenDashboard />

                    {/* <!-- main content start --> */}
                    <div className="main-content">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="panel">
                                    <div className="panel-header">
                                        <h5>All Products</h5>
                                        <div className="btn-box d-flex flex-wrap gap-2">
                                            <div id="tableSearch"></div>
                                            <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                                            <div className="digi-dropdown dropdown">
                                                <button className="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="fa-regular fa-ellipsis-vertical"></i></button>
                                                <ul className="digi-dropdown-menu dropdown-menu">
                                                    <li className="dropdown-title">Show Table Title</li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showProduct" checked />
                                                            <label className="form-check-label" for="showProduct">
                                                                Products
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showPublished" checked />
                                                            <label className="form-check-label" for="showPublished">
                                                                Published
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showStock" checked />
                                                            <label className="form-check-label" for="showStock">
                                                                Stock
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showPrice" checked />
                                                            <label className="form-check-label" for="showPrice">
                                                                Price
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showSales" checked />
                                                            <label className="form-check-label" for="showSales">
                                                                Sales
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showRating" checked />
                                                            <label className="form-check-label" for="showRating">
                                                                Rating
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li className="dropdown-title pb-1">Showing</li>
                                                    <li>
                                                        <div className="input-group">
                                                            <input type="number" className="form-control form-control-sm w-50" value="10" />
                                                            <button className="btn btn-sm btn-primary w-50">Apply</button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="btn-box">
                                                <a href="dashboard-add-product.html" className="btn btn-sm btn-primary"><i className="fa-light fa-plus"></i> Add New</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="product-table-quantity">
                                            <ul>
                                                <li className="text-white">All (23)</li>
                                                <li>Published (19)</li>
                                                <li>Draft (05)</li>
                                                <li>Trush (05)</li>
                                            </ul>
                                        </div>
                                        <div className="table-filter-option">
                                            <div className="row g-3">
                                                <div className="col-xl-10 col-9 col-xs-12">
                                                    <div className="row g-3">
                                                        <div className="col">
                                                            <form className="row g-2">
                                                                <div className="col">
                                                                    <select className="form-control form-control-sm" data-placeholder="Bulk action">
                                                                        <option value="">Bulk action</option>
                                                                        <option value="0">Edit</option>
                                                                        <option value="1">Move To Trash</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col">
                                                                    <button className="btn btn-sm btn-primary w-100">Apply</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="col">
                                                            <select className="form-control form-control-sm">
                                                                <option value="0">All Category</option>
                                                                <option value="1">Cloth</option>
                                                                <option value="2">Fashion</option>
                                                                <option value="3">Bag</option>
                                                                <option value="4">Food</option>
                                                                <option value="5">Medicine</option>
                                                                <option value="6">Watch</option>
                                                                <option value="7">Smart Phone</option>
                                                            </select>
                                                        </div>
                                                        <div className="col">
                                                            <select className="form-control form-control-sm">
                                                                <option value="0">All Product Type</option>
                                                                <option value="1">Downloadable</option>
                                                                <option value="2">Virtual</option>
                                                            </select>
                                                        </div>
                                                        <div className="col">
                                                            <select className="form-control form-control-sm">
                                                                <option value="0">All Product Stock</option>
                                                                <option value="1">In stock</option>
                                                                <option value="2">Out of stock</option>
                                                                <option value="3">On backorder</option>
                                                            </select>
                                                        </div>
                                                        <div className="col">
                                                            <button className="btn btn-sm btn-primary"><i className="fa-light fa-filter"></i> Filter</button>
                                                        </div>
                                                        <div className="col">
                                                            <div className="digi-dropdown dropdown">
                                                                <button className="btn btn-sm btn-icon btn-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="fa-regular fa-plus"></i></button>
                                                                <ul className="digi-dropdown-menu dropdown-menu">
                                                                    <li className="dropdown-title">Filter Options</li>
                                                                    <li>
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" id="filterCategory" checked />
                                                                            <label className="form-check-label" for="filterCategory">
                                                                                Category
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" id="filterProductType" checked />
                                                                            <label className="form-check-label" for="filterProductType">
                                                                                Product Type
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" id="filterStock" checked />
                                                                            <label className="form-check-label" for="filterStock">
                                                                                Stock
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-3 col-xs-12 d-flex justify-content-end">
                                                    <div id="productTableLength"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <table className="table table-dashed table-hover digi-dataTable all-product-table table-striped" id="allProductTable">
                                            <thead>
                                                <tr>
                                                    <th className="no-sort">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="markAllProduct" />
                                                        </div>
                                                    </th>
                                                    <th>Product</th>
                                                    <th>SKU</th>
                                                    <th>Stock</th>
                                                    <th>Price</th>
                                                    <th>Sales</th>
                                                    <th>Rating</th>
                                                    <th>Published</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-product-card">
                                                            <div className="part-img">
                                                                <img src="dashboad/assets/images/product-img-1.jpg" alt="Image" />
                                                            </div>
                                                            <div className="part-txt">
                                                                <span className="product-name">A4TECH BH300 Bluetooth Wireless Headset</span>
                                                                <span className="product-category">Category: electronics/music</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CSJ0158</td>
                                                    <td>12</td>
                                                    <td>$560</td>
                                                    <td>256</td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                            </div>
                                                            <div className="rating-amount">(42)</div>
                                                        </div>
                                                    </td>
                                                    <td>12/24/2023 01:05 PM</td>
                                                    <td>
                                                        <div className="btn-box">
                                                            <button><i className="fa-light fa-eye"></i></button>
                                                            <button><i className="fa-light fa-pen"></i></button>
                                                            <button><i className="fa-light fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-product-card">
                                                            <div className="part-img">
                                                                <img src="dashboad/assets/images/product-img-4.jpg" alt="Image" />
                                                            </div>
                                                            <div className="part-txt">
                                                                <span className="product-name">Premium Blend Tea</span>
                                                                <span className="product-category">Category: Drink/tea</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CSJ0158</td>
                                                    <td>22</td>
                                                    <td>$160</td>
                                                    <td>756</td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                            </div>
                                                            <div className="rating-amount">(380)</div>
                                                        </div>
                                                    </td>
                                                    <td>10/21/2022 01:05 PM</td>
                                                    <td>
                                                        <div className="btn-box">
                                                            <button><i className="fa-light fa-eye"></i></button>
                                                            <button><i className="fa-light fa-pen"></i></button>
                                                            <button><i className="fa-light fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-product-card">
                                                            <div className="part-img">
                                                                <img src="dashboad/assets/images/product-img-3.jpg" alt="Image" />
                                                            </div>
                                                            <div className="part-txt">
                                                                <span className="product-name">Chris Adams Body Spray Classic Denim</span>
                                                                <span className="product-category">Category: Fashion/perfume</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CSJ0158</td>
                                                    <td>12</td>
                                                    <td>$560</td>
                                                    <td>256</td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                            </div>
                                                            <div className="rating-amount">(42)</div>
                                                        </div>
                                                    </td>
                                                    <td>12/24/2023 01:05 PM</td>
                                                    <td>
                                                        <div className="btn-box">
                                                            <button><i className="fa-light fa-eye"></i></button>
                                                            <button><i className="fa-light fa-pen"></i></button>
                                                            <button><i className="fa-light fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-product-card">
                                                            <div className="part-img">
                                                                <img src="dashboad/assets/images/product-img-1.jpg" alt="Image" />
                                                            </div>
                                                            <div className="part-txt">
                                                                <span className="product-name">A4TECH BH300 Bluetooth Wireless Headset</span>
                                                                <span className="product-category">Category: electronics/music</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CSJ0158</td>
                                                    <td>12</td>
                                                    <td>$560</td>
                                                    <td>256</td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                            </div>
                                                            <div className="rating-amount">(42)</div>
                                                        </div>
                                                    </td>
                                                    <td>12/24/2023 01:05 PM</td>
                                                    <td>
                                                        <div className="btn-box">
                                                            <button><i className="fa-light fa-eye"></i></button>
                                                            <button><i className="fa-light fa-pen"></i></button>
                                                            <button><i className="fa-light fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-product-card">
                                                            <div className="part-img">
                                                                <img src="dashboad/assets/images/product-img-4.jpg" alt="Image" />
                                                            </div>
                                                            <div className="part-txt">
                                                                <span className="product-name">Premium Blend Tea</span>
                                                                <span className="product-category">Category: Drink/tea</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CSJ0158</td>
                                                    <td>22</td>
                                                    <td>$160</td>
                                                    <td>756</td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                            </div>
                                                            <div className="rating-amount">(380)</div>
                                                        </div>
                                                    </td>
                                                    <td>10/21/2022 01:05 PM</td>
                                                    <td>
                                                        <div className="btn-box">
                                                            <button><i className="fa-light fa-eye"></i></button>
                                                            <button><i className="fa-light fa-pen"></i></button>
                                                            <button><i className="fa-light fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-product-card">
                                                            <div className="part-img">
                                                                <img src="dashboad/assets/images/product-img-3.jpg" alt="Image" />
                                                            </div>
                                                            <div className="part-txt">
                                                                <span className="product-name">Chris Adams Body Spray Classic Denim</span>
                                                                <span className="product-category">Category: Fashion/perfume</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CSJ0158</td>
                                                    <td>12</td>
                                                    <td>$560</td>
                                                    <td>256</td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                            </div>
                                                            <div className="rating-amount">(42)</div>
                                                        </div>
                                                    </td>
                                                    <td>12/24/2023 01:05 PM</td>
                                                    <td>
                                                        <div className="btn-box">
                                                            <button><i className="fa-light fa-eye"></i></button>
                                                            <button><i className="fa-light fa-pen"></i></button>
                                                            <button><i className="fa-light fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-product-card">
                                                            <div className="part-img">
                                                                <img src="dashboad/assets/images/product-img-1.jpg" alt="Image" />
                                                            </div>
                                                            <div className="part-txt">
                                                                <span className="product-name">A4TECH BH300 Bluetooth Wireless Headset</span>
                                                                <span className="product-category">Category: electronics/music</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CSJ0158</td>
                                                    <td>12</td>
                                                    <td>$560</td>
                                                    <td>256</td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                            </div>
                                                            <div className="rating-amount">(42)</div>
                                                        </div>
                                                    </td>
                                                    <td>12/24/2023 01:05 PM</td>
                                                    <td>
                                                        <div className="btn-box">
                                                            <button><i className="fa-light fa-eye"></i></button>
                                                            <button><i className="fa-light fa-pen"></i></button>
                                                            <button><i className="fa-light fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-product-card">
                                                            <div className="part-img">
                                                                <img src="dashboad/assets/images/product-img-4.jpg" alt="Image" />
                                                            </div>
                                                            <div className="part-txt">
                                                                <span className="product-name">Premium Blend Tea</span>
                                                                <span className="product-category">Category: Drink/tea</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CSJ0158</td>
                                                    <td>22</td>
                                                    <td>$160</td>
                                                    <td>756</td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                            </div>
                                                            <div className="rating-amount">(380)</div>
                                                        </div>
                                                    </td>
                                                    <td>10/21/2022 01:05 PM</td>
                                                    <td>
                                                        <div className="btn-box">
                                                            <button><i className="fa-light fa-eye"></i></button>
                                                            <button><i className="fa-light fa-pen"></i></button>
                                                            <button><i className="fa-light fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-product-card">
                                                            <div className="part-img">
                                                                <img src="dashboad/assets/images/product-img-3.jpg" alt="Image" />
                                                            </div>
                                                            <div className="part-txt">
                                                                <span className="product-name">Chris Adams Body Spray Classic Denim</span>
                                                                <span className="product-category">Category: Fashion/perfume</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CSJ0158</td>
                                                    <td>12</td>
                                                    <td>$560</td>
                                                    <td>256</td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                            </div>
                                                            <div className="rating-amount">(42)</div>
                                                        </div>
                                                    </td>
                                                    <td>12/24/2023 01:05 PM</td>
                                                    <td>
                                                        <div className="btn-box">
                                                            <button><i className="fa-light fa-eye"></i></button>
                                                            <button><i className="fa-light fa-pen"></i></button>
                                                            <button><i className="fa-light fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-product-card">
                                                            <div className="part-img">
                                                                <img src="dashboad/assets/images/product-img-1.jpg" alt="Image" />
                                                            </div>
                                                            <div className="part-txt">
                                                                <span className="product-name">A4TECH BH300 Bluetooth Wireless Headset</span>
                                                                <span className="product-category">Category: electronics/music</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CSJ0158</td>
                                                    <td>12</td>
                                                    <td>$560</td>
                                                    <td>256</td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                            </div>
                                                            <div className="rating-amount">(42)</div>
                                                        </div>
                                                    </td>
                                                    <td>12/24/2023 01:05 PM</td>
                                                    <td>
                                                        <div className="btn-box">
                                                            <button><i className="fa-light fa-eye"></i></button>
                                                            <button><i className="fa-light fa-pen"></i></button>
                                                            <button><i className="fa-light fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-product-card">
                                                            <div className="part-img">
                                                                <img src="dashboad/assets/images/product-img-4.jpg" alt="Image" />
                                                            </div>
                                                            <div className="part-txt">
                                                                <span className="product-name">Premium Blend Tea</span>
                                                                <span className="product-category">Category: Drink/tea</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CSJ0158</td>
                                                    <td>22</td>
                                                    <td>$160</td>
                                                    <td>756</td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                            </div>
                                                            <div className="rating-amount">(380)</div>
                                                        </div>
                                                    </td>
                                                    <td>10/21/2022 01:05 PM</td>
                                                    <td>
                                                        <div className="btn-box">
                                                            <button><i className="fa-light fa-eye"></i></button>
                                                            <button><i className="fa-light fa-pen"></i></button>
                                                            <button><i className="fa-light fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-product-card">
                                                            <div className="part-img">
                                                                <img src="dashboad/assets/images/product-img-3.jpg" alt="Image" />
                                                            </div>
                                                            <div className="part-txt">
                                                                <span className="product-name">Chris Adams Body Spray Classic Denim</span>
                                                                <span className="product-category">Category: Fashion/perfume</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CSJ0158</td>
                                                    <td>12</td>
                                                    <td>$560</td>
                                                    <td>256</td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                            </div>
                                                            <div className="rating-amount">(42)</div>
                                                        </div>
                                                    </td>
                                                    <td>12/24/2023 01:05 PM</td>
                                                    <td>
                                                        <div className="btn-box">
                                                            <button><i className="fa-light fa-eye"></i></button>
                                                            <button><i className="fa-light fa-pen"></i></button>
                                                            <button><i className="fa-light fa-trash"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="table-bottom-control"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- footer start --> */}
                        <div className="footer">
                            <p>Copyright© <script>document.write(new Date().getFullYear())</script> All Rights Reserved By <span className="text-primary">Revel</span></p>
                        </div>
                        {/* <!-- footer end --> */}
                    </div>
                    {/* <!-- main content end --> */}


                </body>
            </div>
        </div>
    )
}

export default AdminAllProduct
