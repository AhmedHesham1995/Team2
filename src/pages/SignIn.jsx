import React, { useState,useContext } from 'react';
import logo from '../assets/logo1.png';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { login } from '../services/auth';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// const MySwal = withReactContent(Swal);
import { authContext } from '../contexts/authContext';
import { useDispatch } from 'react-redux';


const SignIn = () => {

const {setLogin}=useContext(authContext)

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',

    })

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
    })

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setUser({ ...user, [name]: value })

        switch (name) {
            case "email":
                const emailRegix = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                setErrors({
                    ...errors,
                    emailError:
                        (value.length === 0) ?
                            "email is required" :
                            emailRegix.test(value) ? '' :
                                "Invalid Email"
                })
                break;
            case 'password':
                const passwordRegex = /^.{8,}$/;
                setErrors({
                    ...user,
                    passwordError:
                        (value.length === 0) ?
                            "password is required" :
                            passwordRegex.test(value) ? '' :
                                "more than 8 characters"
                })
                break;
            default:
                break;
        }
    }

    const signInSubmit = () => {
        navigate('/home');
    }

    const handleSubmit=async(ev)=>{
        ev.preventDefault()

         if(errors.emailError||errors.passwordError){
            // toast.error("Validation Error")
            console.log('error');
            // MySwal.fire({
            //     icon: 'error',
            //     title: 'Validation Error',
            //     text: 'Please correct the form errors.',
            //   });
        }
        else{
            try{
                const res = await login(user)
                console.log(res);
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("ID", res.data.id)
                setLogin(true)
                navigate('/home')
                
            }
            catch(err){
                // MySwal.fire({
                //     icon: 'error',
                //     title: 'something went wrong',
                //     text: 'Please correct the form errors.',
                //   });
            }

    }}

    return (
        <>
            <form onSubmit={handleSubmit} className="bg-dark text-center align-items-center justify-content-center d-flex">
                <div className="container col-lg-5 col-md-8 col-sm-10">
                    <div className="BBG bg-black rounded-4">
                        <div className="d-flex flex-row bd-highlight">
                        </div>
                        <div className="col d-flex align-items-center justify-content-center">
                            <div className="d-grid gap-3 text-white">
                                <div>
                                    <img className="logo" src={logo} alt="Logo" />
                                </div>
                                <p className="SIText fw-bold mx-auto">Sign in to X</p>
                                <button type="button" className="btn btn-lg border rounded-pill btn-light">
                                    <i className="fa-brands fa-google"></i> Sign in with Google
                                </button>
                                <button type="button" className="btn btn-lg border rounded-pill fw-bold btn-light">
                                    <i className="fa-brands fa-apple"></i> Sign in with Apple
                                </button>
                                <hr className="hr-text gradient" data-content="or" />

                                <div>
                                    <input
                                        className={`form-control ${(errors.emailError) ? 'is-invalid' : 'text-dark'}`}
                                        name='email'
                                        type="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        placeholder="phone, name, or username"
                                    />
                                    <div className='invalid-feedback'>{errors.emailError}</div>
                                </div>

                                <div className=''>
                                    <input
                                        className={`form-control ${(errors.passwordError) ? 'is-invalid' : 'text-dark'}`}
                                        name='password'
                                        type={showPassword ? "text" : "password"}
                                        placeholder="enter your password"
                                        onChange={handleChange}
                                    />
                                    {/* <h6
                                            type='text'
                                            className='cur'
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? "hide" : 'show'}
                                        </h6> */}
                                    <div className='invalid-feedback'>{errors.passwordError}</div>
                                </div>

                                <button type="submit" className="btn border rounded-pill btn-light fw-bold">sign in</button>
                                <button type="button" className="btn border rounded-pill text-light fw-bold">Forgot Password?</button>
                                <p className="SUText">Dont have an account ? <NavLink to="/SignUp">Sign up</NavLink></p>
                                <h5><NavLink to='/join' className='text-danger'>back</NavLink> </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SignIn;