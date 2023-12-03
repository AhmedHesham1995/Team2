import React from 'react';
import logo from '../assets/logo1.png';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer/Footer'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

const Join = () => {

    const footerLinks = [
        { url: '#', text: 'About' },
        { url: '#', text: 'Help Center' },
        { url: '#', text: 'Terms of Service' },
        { url: '#', text: 'Privacy Policy' },
        { url: '#', text: 'Cookie Policy' },
        { url: '#', text: 'Accessibility' },
        { url: '#', text: 'Ads info' },
        { url: '#', text: 'Blog' },
        { url: '#', text: 'Status' },
        { url: '#', text: 'Careers' },
        { url: '#', text: 'Brand Resources' },
        { url: '#', text: 'Advertising' },
        { url: '#', text: 'Marketing' },
        { url: '#', text: 'X for Business' },
        { url: '#', text: 'Developers' },
        { url: '#', text: 'Directory' },
        { url: '#', text: 'Settings' },
    ];

    return (
        <>
            <div className="bg-black">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <img className="logoWH" src={logo} alt="logo" />
                        </div>
                        <div className="col-md-6">
                            <div className="fw-bold mx-auto text-white">
                                <p className="HNText fw-bold">Happening now</p>
                                <br />
                                <p className="JTText fw-bold">Join today.</p>
                            </div>
                            <div className="d-grid gap-2 mx-auto text-white ">
                                <button type="button" className="btnM col-5 btn border rounded-pill btn-light">
                                    <i className="fa-brands fa-google"></i> Sign up with Google
                                </button>
                                <button type="button" className="btnM col-5 btn border rounded-pill fw-bold btn-light">
                                    <i className="fa-brands fa-apple"></i> Sign up with Apple
                                </button>
                                <hr className="col-5 hr-text gradient" data-content="or" />
                                <button type="button" className="btnM col-5 btn btn-primary rounded-pill fw-bold text-white"><NavLink to='/SignUp' className="text-white">Create account</NavLink></button>
                                <p className="rolesText col-5 text-white-50 bg-black">
                                    By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.</p>
                                <h5 className="fw-bold">Already have an account?</h5>
                                <button type="button" className="btnM col-5 btn border rounded-pill text-primary fw-bold"><NavLink to='/signin'>Sign in</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer links={footerLinks} />
            </div>
        </>
    )
}

export default Join;