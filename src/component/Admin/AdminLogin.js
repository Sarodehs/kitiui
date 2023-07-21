/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useNavigate } from 'react-router-dom';

function AdminLogin() {

    const UserOriginal = 'user@gmail.com';
    const passOriginal = '1234';

    const [userName, setUserName] = React.useState([]);
    const [userPass, setUserPass] = React.useState([]);

    const navigate = useNavigate();


    const input = (e) => {
        setUserName(e.target.value)
    }

    const input2 = (e) => {
        setUserPass(e.target.value)
    }


    const submitUser = () => {
        if (userName === UserOriginal && userPass === passOriginal) {
            // alert("okkkk")

            navigate(`/admindashboard`)
        }
        else (
            alert("Invalid Data Enter please Enter Correct Data !!!")
        )
    }

    const registerPage = () => {
        navigate(`/admindashboard`)
    }


    return (
        <div id='user'>

            <div className='inner'>



                {/* <!--------------------------------- BANNER SECTION START ---------------------------------> */}
                <div className="banner banner-inner">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6 col-md-9 col-8">
                                <div className="breadcrumb-txt">
                                    <h1>Login Page</h1>
                                    <ul>
                                        <li><a href='/#'><i className="fa-regular fa-house"></i></a></li>
                                        <li>/</li>
                                        <li>Login</li>
                                        <li><a href='/venlogin'>Vendor</a></li>
                                        <li><a href='/adminlogin'>Admin</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-3 col-4">
                                <div className="part-img">
                                    <img src="/assets/images/breadcrumb-img.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--------------------------------- BANNER SECTION END --------------------------------->
  
  
  
      <!--------------------------------- REGISTER SECTION START ---------------------------------> */}
                <div className="register py-120">
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-xl-5 col-md-6">
                                <div className="login-area">
                                    <h2>Log in your Account</h2>
                                    <p>There are no enrollment fees or shipping quotas. Simp vide your contact information, create a user ID and word.</p>
                                    <form className="login-form">
                                        <input type="text" onChange={input} placeholder="Username or Email Address" />
                                        <input type="password" onChange={input2} placeholder="Enter Password" />
                                        <button onClick={submitUser} className="def-btn btn-border">Login</button><br /><br />
                                        <button onClick={registerPage} className="def-btn btn-border">Register</button>

                                    </form>
                                    <span className="devider">or</span>
                                    <div className="social-login-box">
                                        <button className="def-btn btn-fb">Login with your facebook</button>
                                        <button className="def-btn btn-gl">Login with your google+</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!--------------------------------- REGISTER SECTION END --------------------------------->
  
  
  
      <!--------------------------------- FEATURES SECTION START ---------------------------------> */}
                <div className="features" id="feature">
                    <div className="container">
                        <div className="panel panel-shadow px-0">
                            <div className="custom-row">
                                <div className="custom-col">
                                    <div className="single-feature">
                                        <div className="part-icon">
                                            <span><i className="flaticon-money-saving"></i></span>
                                        </div>
                                        <div className="part-txt">
                                            <h4>Free Delivery</h4>
                                            <p>For all order over $99</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-col">
                                    <div className="single-feature">
                                        <div className="part-icon">
                                            <span><i className="flaticon-dollar"></i></span>
                                        </div>
                                        <div className="part-txt">
                                            <h4>30 Days Return</h4>
                                            <p>If goods have Problems</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-col">
                                    <div className="single-feature">
                                        <div className="part-icon">
                                            <span><i className="flaticon-credit-card"></i></span>
                                        </div>
                                        <div className="part-txt">
                                            <h4>Secure Payment</h4>
                                            <p>100% secure payment</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-col">
                                    <div className="single-feature">
                                        <div className="part-icon">
                                            <span><i className="flaticon-call-center"></i></span>
                                        </div>
                                        <div className="part-txt">
                                            <h4>24/7 Support</h4>
                                            <p>Dedicated support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default AdminLogin
