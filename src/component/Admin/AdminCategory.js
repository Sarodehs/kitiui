/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import VenDashboard from '../Vendors/VenDashboard'

const AdminCategory = () => {
    return (
        <div>
            <div>
                <div id='dashboad'>

                    <body className="body-padding body-p-top light-theme">

                        <VenDashboard />


                        {/* <!-- main content start --> */}
                        <div className="main-content">
                            <div className="dashboard-breadcrumb mb-30">
                                <h2>Categories</h2>
                            </div>
                            <div className="row g-4">
                                <div className="col-xxl-4 col-md-5">
                                    <div className="panel">
                                        <div className="panel-header">
                                            <h5>Add New Category</h5>
                                        </div>
                                        <div className="panel-body">
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <label className="form-label">Category Name</label>
                                                    <input type="text" className="form-control form-control-sm" id="categoryTitle" />
                                                    <p className="perma-txt" hidden>
                                                        Permalink: <span data-link="https://example.com/" className="site-link text-primary" id="categoryPermalink">https://example.com/</span>
                                                        <input type="text" className="form-control form-control-sm" hidden="" id="editPermalink" />
                                                        <button className="btn-flush bg-primary" id="editPermaBtn">Edit</button>
                                                        <button className="btn-flush bg-success" id="createPerma" hidden="/">OK</button>
                                                        <button className="btn-flush bg-danger" id="cancelPerma" hidden="/">Cancel</button>
                                                    </p>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="form-label">Main Category</label>
                                                    <select className="form-control form-control-sm" data-placeholder="Select">
                                                        <option value="">Select</option>
                                                        <option value="0">Cloth</option>
                                                        <option value="1">-Fashion</option>
                                                        <option value="2">--Jewellery</option>
                                                        <option value="3">---Bag</option>
                                                        <option value="4">----Smart Phone</option>
                                                        <option value="5">Watch</option>
                                                        <option value="6">Sunglass</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="form-label">Custom Category Icon</label>
                                                    <input type="text" className="form-control form-control-sm" placeholder="Fontawesome 6 pro icon name" />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Description</label>
                                                    <textarea rows="5" className="form-control form-control-sm"></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Display Type</label>
                                                    <select className="form-control form-control-sm">
                                                        <option value="0">Default</option>
                                                        <option value="1">Products</option>
                                                        <option value="2">Subcategories</option>
                                                        <option value="3">Both</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <div className="upload-category-thumbnail">
                                                        <label className="form-label mb-0" id="addCatThumb">Add Category Thumbnail</label>
                                                        <input type="text" id="thumbUpload" />
                                                    </div>
                                                </div>
                                                <div className="col-12 d-flex justify-content-end">
                                                    <div className="btn-box">
                                                        <button className="btn btn-sm btn-primary">Save Category</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-8 col-md-7">
                                    <div className="panel">
                                        <div className="panel-header">
                                            <h5>All Categories</h5>
                                            <div className="btn-box d-flex gap-2">
                                                <div id="tableSearch"></div>
                                                <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                                                <div className="digi-dropdown dropdown">
                                                    <button className="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="fa-regular fa-ellipsis-vertical"></i></button>
                                                    <ul className="digi-dropdown-menu dropdown-menu">
                                                        <li className="dropdown-title">Show Table Title</li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="showName" checked />
                                                                <label className="form-check-label" for="showName">
                                                                    Name
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="showDescription" checked />
                                                                <label className="form-check-label" for="showDescription">
                                                                    Description
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="showSlug" checked />
                                                                <label className="form-check-label" for="showSlug">
                                                                    Slug
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="showCount" checked />
                                                                <label className="form-check-label" for="showCount">
                                                                    Count
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="showAction" checked />
                                                                <label className="form-check-label" for="showAction">
                                                                    Action
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
                                            </div>
                                        </div>
                                        <div className="panel-body">
                                            <div className="table-filter-option">
                                                <div className="row justify-content-between g-3">
                                                    <div className="col-xxl-4 col-6 col-xs-12">
                                                        <form className="row g-2">
                                                            <div className="col-8">
                                                                <select className="form-control form-control-sm" data-placeholder="Bulk action">
                                                                    <option value="">Bulk action</option>
                                                                    <option value="0">Edit</option>
                                                                    <option value="1">Move To Trash</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-4">
                                                                <button className="btn btn-sm btn-primary w-100">Apply</button>
                                                            </div>
                                                        </form>
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
                                                        <th>Name</th>
                                                        <th>Description</th>
                                                        <th>Slug</th>
                                                        <th>Count</th>
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
                                                            <div className="table-category-card">
                                                                <div className="part-icon">
                                                                    <span><i className="fa-light fa-vest"></i></span>
                                                                </div>
                                                                <div className="part-txt">
                                                                    <span className="category-name">Fashion</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><span className="table-dscr">The description is not prominent by default; however, some themes may show it.</span></td>
                                                        <td>fashion</td>
                                                        <td><a href="dashboard-all-product.html">10</a></td>
                                                        <td>
                                                            <div className="btn-box">
                                                                <button><i className="fa-light fa-eye"></i></button>
                                                                <button><i className="fa-light fa-pen-to-square"></i></button>
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
                                                            <div className="table-category-card">
                                                                <div className="part-icon">
                                                                    <span><img src="dashboad/assets/images/image.png" alt="image" /></span>
                                                                </div>
                                                                <div className="part-txt">
                                                                    <span className="category-name">Fashion</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><span className="table-dscr">The description is not prominent by default; however, some themes may show it.</span></td>
                                                        <td>fashion</td>
                                                        <td><a href="dashboard-all-product.html">10</a></td>
                                                        <td>
                                                            <div className="btn-box">
                                                                <button><i className="fa-light fa-eye"></i></button>
                                                                <button><i className="fa-light fa-pen-to-square"></i></button>
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
                                                            <div className="table-category-card">
                                                                <div className="part-icon">
                                                                    <span><i className="fa-light fa-vest"></i></span>
                                                                </div>
                                                                <div className="part-txt">
                                                                    <span className="category-name">Fashion</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><span className="table-dscr">The description is not prominent by default; however, some themes may show it.</span></td>
                                                        <td>fashion</td>
                                                        <td><a href="dashboard-all-product.html">10</a></td>
                                                        <td>
                                                            <div className="btn-box">
                                                                <button><i className="fa-light fa-eye"></i></button>
                                                                <button><i className="fa-light fa-pen-to-square"></i></button>
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
                                                            <div className="table-category-card">
                                                                <div className="part-icon">
                                                                    <span><img src="dashboad/assets/images/image.png" alt="image" /></span>
                                                                </div>
                                                                <div className="part-txt">
                                                                    <span className="category-name">Fashion</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><span className="table-dscr">The description is not prominent by default; however, some themes may show it.</span></td>
                                                        <td>fashion</td>
                                                        <td><a href="dashboard-all-product.html">10</a></td>
                                                        <td>
                                                            <div className="btn-box">
                                                                <button><i className="fa-light fa-eye"></i></button>
                                                                <button><i className="fa-light fa-pen-to-square"></i></button>
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
                                                            <div className="table-category-card">
                                                                <div className="part-icon">
                                                                    <span><i className="fa-light fa-vest"></i></span>
                                                                </div>
                                                                <div className="part-txt">
                                                                    <span className="category-name">Fashion</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><span className="table-dscr">The description is not prominent by default; however, some themes may show it.</span></td>
                                                        <td>fashion</td>
                                                        <td><a href="dashboard-all-product.html">10</a></td>
                                                        <td>
                                                            <div className="btn-box">
                                                                <button><i className="fa-light fa-eye"></i></button>
                                                                <button><i className="fa-light fa-pen-to-square"></i></button>
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
                                                            <div className="table-category-card">
                                                                <div className="part-icon">
                                                                    <span><img src="dashboad/assets/images/image.png" alt="image" /></span>
                                                                </div>
                                                                <div className="part-txt">
                                                                    <span className="category-name">Fashion</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><span className="table-dscr">The description is not prominent by default; however, some themes may show it.</span></td>
                                                        <td>fashion</td>
                                                        <td><a href="dashboard-all-product.html">10</a></td>
                                                        <td>
                                                            <div className="btn-box">
                                                                <button><i className="fa-light fa-eye"></i></button>
                                                                <button><i className="fa-light fa-pen-to-square"></i></button>
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
                                <p>Copyright© <script>document.write(new Date().getFullYear())</script> All Rights Reserved By <span className="text-primary">Digiboard</span></p>
                            </div>
                            {/* <!-- footer end --> */}
                        </div>
                        {/* <!-- main content end --> */}

                    </body>
                </div>
            </div>
        </div>
    )
}

export default AdminCategory
