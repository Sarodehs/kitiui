import React from 'react'
import VenDashboard from '../Vendors/VenDashboard'

const AdminContacts = () => {
    return (
        <div>
            <div>
                <div id='dashboad'>

                    <body className="body-padding body-p-top light-theme">

                        <VenDashboard />

                        {/* <!-- main content start --> */}
                        <div className="main-content">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="panel">
                                        <div className="panel-header">
                                            <h5>Contact Form One</h5>
                                        </div>
                                        <div className="panel-body">
                                            <div className="row g-3">
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control form-control-sm" placeholder="Your Name*" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="email" className="form-control form-control-sm" placeholder="Your Email*" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="tel" className="form-control form-control-sm" placeholder="Your Phone*" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control form-control-sm" placeholder="Your Website*" />
                                                </div>
                                                <div className="col-12">
                                                    <input type="text" className="form-control form-control-sm" placeholder="Subject*" />
                                                </div>
                                                <div className="col-12">
                                                    <textarea className="form-control form-control-sm" rows="8"
                                                        placeholder="Your Message*"></textarea>
                                                </div>
                                                <div className="col-12 text-end">
                                                    <button className="btn btn-sm btn-primary">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="panel">
                                        <div className="panel-header">
                                            <h5>Contact Form Two</h5>
                                        </div>
                                        <div className="panel-body">
                                            <div className="row g-3">
                                                <div className="col-sm-6">
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                                                        <input type="text" className="form-control form-control-sm" placeholder="Your Name*" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="fa-solid fa-at"></i></span>
                                                        <input type="email" className="form-control form-control-sm" placeholder="Your Email*" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="fa-solid fa-phone"></i></span>
                                                        <input type="tel" className="form-control form-control-sm" placeholder="Your Phone*" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="fa-solid fa-globe"></i></span>
                                                        <input type="text" className="form-control form-control-sm" placeholder="Your Website*" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="fa-solid fa-pen"></i></span>
                                                        <input type="text" className="form-control form-control-sm" placeholder="Subject*" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <textarea className="form-control form-control-sm" rows="8"
                                                        placeholder="Your Message*"></textarea>
                                                </div>
                                                <div className="col-12 text-end">
                                                    <button className="btn btn-sm btn-primary">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="panel">
                                        <div className="panel-header">
                                            <h5>Contact Form Three</h5>
                                        </div>
                                        <div className="panel-body">
                                            <div className="row g-3">
                                                <div className="col-sm-6">
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <input type="text" className="form-control form-control-sm"
                                                                placeholder="Your Name*" />
                                                        </div>
                                                        <div className="col-12">
                                                            <input type="email" className="form-control form-control-sm"
                                                                placeholder="Your Email*" />
                                                        </div>
                                                        <div className="col-12">
                                                            <input type="tel" className="form-control form-control-sm"
                                                                placeholder="Your Phone*" />
                                                        </div>
                                                        <div className="col-12">
                                                            <input type="text" className="form-control form-control-sm"
                                                                placeholder="Your Website*" />
                                                        </div>
                                                        <div className="col-12">
                                                            <input type="text" className="form-control form-control-sm" placeholder="Subject*" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <textarea className="form-control form-control-sm h-100" rows="8"
                                                        placeholder="Your Message*"></textarea>
                                                </div>
                                                <div className="col-12 text-end">
                                                    <button className="btn btn-sm btn-primary">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="panel">
                                        <div className="panel-header">
                                            <h5>Contact Form Four</h5>
                                        </div>
                                        <div className="panel-body">
                                            <div className="row g-3">
                                                <div className="col-sm-6">
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                                                                <input type="text" className="form-control form-control-sm"
                                                                    placeholder="Your Name*" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <span className="input-group-text"><i className="fa-solid fa-at"></i></span>
                                                                <input type="email" className="form-control form-control-sm"
                                                                    placeholder="Your Email*" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <span className="input-group-text"><i className="fa-solid fa-phone"></i></span>
                                                                <input type="tel" className="form-control form-control-sm"
                                                                    placeholder="Your Phone*" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <span className="input-group-text"><i className="fa-solid fa-globe"></i></span>
                                                                <input type="text" className="form-control form-control-sm"
                                                                    placeholder="Your Website*" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <span className="input-group-text"><i className="fa-solid fa-pen"></i></span>
                                                                <input type="text" className="form-control form-control-sm"
                                                                    placeholder="Subject*" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <textarea className="form-control form-control-sm h-100" rows="8"
                                                        placeholder="Your Message*"></textarea>
                                                </div>
                                                <div className="col-12 text-end">
                                                    <button className="btn btn-sm btn-primary">Send Message</button>
                                                </div>
                                            </div>
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
        </div>
    )
}

export default AdminContacts
